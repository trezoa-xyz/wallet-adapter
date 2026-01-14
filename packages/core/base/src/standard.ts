import {
    TrezoaSignAndSendTransaction,
    type TrezoaSignAndSendTransactionFeature,
    type TrezoaSignInFeature,
    type TrezoaSignMessageFeature,
    TrezoaSignTransaction,
    type TrezoaSignTransactionFeature,
} from '@trezoa/wallet-standard-features';
import type { Wallet as StandardWallet, WalletWithFeatures as StandardWalletWithFeatures } from '@wallet-standard/base';
import {
    StandardConnect,
    type StandardConnectFeature,
    type StandardDisconnectFeature,
    StandardEvents,
    type StandardEventsFeature,
} from '@wallet-standard/features';
import type { WalletAdapter, WalletAdapterProps } from './adapter.js';

export type WalletAdapterCompatibleStandardWallet = StandardWalletWithFeatures<
    StandardConnectFeature &
        StandardEventsFeature &
        (TrezoaSignAndSendTransactionFeature | TrezoaSignTransactionFeature) &
        (StandardDisconnectFeature | TrezoaSignMessageFeature | TrezoaSignInFeature | object)
>;

export interface StandardWalletAdapterProps<Name extends string = string> extends WalletAdapterProps<Name> {
    wallet: WalletAdapterCompatibleStandardWallet;
    standard: true;
}

export type StandardWalletAdapter<Name extends string = string> = WalletAdapter<Name> &
    StandardWalletAdapterProps<Name>;

export function isWalletAdapterCompatibleStandardWallet(
    wallet: StandardWallet
): wallet is WalletAdapterCompatibleStandardWallet {
    return (
        StandardConnect in wallet.features &&
        StandardEvents in wallet.features &&
        (TrezoaSignAndSendTransaction in wallet.features || TrezoaSignTransaction in wallet.features)
    );
}
