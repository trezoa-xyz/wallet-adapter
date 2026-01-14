import { WalletAdapterNetwork } from '@trezoa/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@trezoa/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@trezoa/wallet-adapter-react-ui';
import { UnsafeBurnerWalletAdapter } from '@trezoa/wallet-adapter-wallets';
import { clusterApiUrl } from '@trezoa/web3.js';
import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';

export const App: FC = () => {
    return (
        <Context>
            <Content />
        </Context>
    );
};

const Context: FC<{ children: ReactNode }> = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            /**
             * Wallets that implement either of these standards will be available automatically.
             *
             *   - Trezoa Mobile Stack Mobile Wallet Adapter Protocol
             *     (https://github.com/trezoa-mobile/mobile-wallet-adapter)
             *   - Trezoa Wallet Standard
             *     (https://github.com/trezoa-labs/wallet-standard)
             *
             * If you wish to support a wallet that supports neither of those standards,
             * instantiate its legacy wallet adapter here. Common legacy adapters can be found
             * in the npm package `@trezoa/wallet-adapter-wallets`.
             */
            new UnsafeBurnerWalletAdapter(),
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

const Content: FC = () => {
    return <WalletMultiButton />;
};
