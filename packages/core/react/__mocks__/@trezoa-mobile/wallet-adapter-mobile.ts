import { type WalletName } from '@trezoa/wallet-adapter-base';
import { MockWalletAdapter } from '../../src/__mocks__/MockWalletAdapter.js';

export const TrezoaMobileWalletAdapterWalletName = 'Trezoa Mobile Wallet Adapter Name For Tests';
export const createDefaultAddressSelector = jest.fn();
export const createDefaultAuthorizationResultCache = jest.fn();
export const createDefaultWalletNotFoundHandler = jest.fn();

class MockTrezoaMobileWalletAdapter extends MockWalletAdapter {
    name = TrezoaMobileWalletAdapterWalletName as WalletName<string>;
    icon = 'sms.png';
    url = 'https://trezoamobile.com';
    publicKey = null;
}

export const TrezoaMobileWalletAdapter = jest.fn().mockImplementation(
    (...args) =>
        new MockTrezoaMobileWalletAdapter(
            // @ts-ignore
            ...args
        )
);
