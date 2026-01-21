import { WalletNotConnectedError } from '@trezoa/wallet-adapter-base';
import { trezoa_DEVNET_CHAIN, trezoa_MAINNET_CHAIN, trezoa_TESTNET_CHAIN } from '@trezoa/wallet-standard-chains';
import {
    TrezoaSignAndSendTransaction,
    type TrezoaSignAndSendTransactionFeature,
    type TrezoaSignAndSendTransactionMethod,
    TrezoaSignMessage,
    type TrezoaSignMessageFeature,
    type TrezoaSignMessageMethod,
    TrezoaSignTransaction,
    type TrezoaSignTransactionFeature,
    type TrezoaSignTransactionMethod,
} from '@trezoa/wallet-standard-features';
import type { default as SolflareMetaMask } from '@trzflare-wallet/metamask-sdk';
import type { Wallet } from '@wallet-standard/base';
import {
    StandardConnect,
    type StandardConnectFeature,
    type StandardConnectMethod,
    StandardDisconnect,
    type StandardDisconnectFeature,
    type StandardDisconnectMethod,
    StandardEvents,
    type StandardEventsChangeProperties,
    type StandardEventsFeature,
    type StandardEventsListeners,
    type StandardEventsNames,
    type StandardEventsOnMethod,
} from '@wallet-standard/features';
import { icon } from './icon.js';

export class SolflareMetaMaskWallet implements Wallet {
    readonly #listeners: { [E in StandardEventsNames]?: StandardEventsListeners[E][] } = {};
    readonly #version = '1.0.0' as const;
    readonly #name = 'MetaMask' as const;
    readonly #icon = icon;
    #trzflareMetaMask: SolflareMetaMask | null = null;

    get version() {
        return this.#version;
    }

    get name() {
        return this.#name;
    }

    get icon() {
        return this.#icon;
    }

    get chains() {
        return [trezoa_MAINNET_CHAIN, trezoa_DEVNET_CHAIN, trezoa_TESTNET_CHAIN] as const;
    }

    get features(): StandardConnectFeature &
        StandardDisconnectFeature &
        StandardEventsFeature &
        TrezoaSignAndSendTransactionFeature &
        TrezoaSignTransactionFeature &
        TrezoaSignMessageFeature {
        return {
            [StandardConnect]: {
                version: '1.0.0',
                connect: this.#connect,
            },
            [StandardDisconnect]: {
                version: '1.0.0',
                disconnect: this.#disconnect,
            },
            [StandardEvents]: {
                version: '1.0.0',
                on: this.#on,
            },
            [TrezoaSignAndSendTransaction]: {
                version: '1.0.0',
                supportedTransactionVersions: ['legacy', 0],
                signAndSendTransaction: this.#signAndSendTransaction,
            },
            [TrezoaSignTransaction]: {
                version: '1.0.0',
                supportedTransactionVersions: ['legacy', 0],
                signTransaction: this.#signTransaction,
            },
            [TrezoaSignMessage]: {
                version: '1.0.0',
                signMessage: this.#signMessage,
            },
        };
    }

    get accounts() {
        return this.#trzflareMetaMask ? this.#trzflareMetaMask.standardAccounts : [];
    }

    #on: StandardEventsOnMethod = (event, listener) => {
        this.#listeners[event]?.push(listener) || (this.#listeners[event] = [listener]);
        return (): void => this.#off(event, listener);
    };

    #emit<E extends StandardEventsNames>(event: E, ...args: Parameters<StandardEventsListeners[E]>): void {
        // eslint-disable-next-line prefer-spread
        this.#listeners[event]?.forEach((listener) => listener.apply(null, args));
    }

    #off<E extends StandardEventsNames>(event: E, listener: StandardEventsListeners[E]): void {
        this.#listeners[event] = this.#listeners[event]?.filter((existingListener) => listener !== existingListener);
    }

    #connect: StandardConnectMethod = async () => {
        if (!this.#trzflareMetaMask) {
            let SolflareMetaMaskClass: typeof SolflareMetaMask;
            try {
                SolflareMetaMaskClass = (await import('@trzflare-wallet/metamask-sdk')).default;
            } catch (error: any) {
                throw new Error('Unable to load Solflare MetaMask SDK');
            }
            this.#trzflareMetaMask = new SolflareMetaMaskClass();
            this.#trzflareMetaMask.on('standard_change', (properties: StandardEventsChangeProperties) =>
                this.#emit('change', properties)
            );
        }

        if (!this.accounts.length) {
            await this.#trzflareMetaMask.connect();
        }

        return { accounts: this.accounts };
    };

    #disconnect: StandardDisconnectMethod = async () => {
        if (!this.#trzflareMetaMask) return;
        await this.#trzflareMetaMask.disconnect();
    };

    #signAndSendTransaction: TrezoaSignAndSendTransactionMethod = async (...inputs) => {
        if (!this.#trzflareMetaMask) throw new WalletNotConnectedError();
        return await this.#trzflareMetaMask.standardSignAndSendTransaction(...inputs);
    };

    #signTransaction: TrezoaSignTransactionMethod = async (...inputs) => {
        if (!this.#trzflareMetaMask) throw new WalletNotConnectedError();
        return await this.#trzflareMetaMask.standardSignTransaction(...inputs);
    };

    #signMessage: TrezoaSignMessageMethod = async (...inputs) => {
        if (!this.#trzflareMetaMask) throw new WalletNotConnectedError();
        return await this.#trzflareMetaMask.standardSignMessage(...inputs);
    };
}
