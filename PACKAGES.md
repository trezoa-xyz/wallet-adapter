# Wallet Adapter Packages

This library is organized into small packages with few dependencies.

To add it to your app, you'll need core packages, some wallets, and UI components for your chosen framework.

### Core
These packages are what most projects can use to support wallets on Trezoa.

| package                                                                                | description                                           | npm                                                                                      |
|----------------------------------------------------------------------------------------|-------------------------------------------------------|------------------------------------------------------------------------------------------|
| [base](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/core/base)   | Adapter interfaces, error types, and common utilities | [`@trezoa/wallet-adapter-base`](https://npmjs.com/package/@trezoa/wallet-adapter-base)   |
| [react](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/core/react) | Contexts and hooks for React apps                     | [`@trezoa/wallet-adapter-react`](https://npmjs.com/package/@trezoa/wallet-adapter-react) |

### Community
Several core packages are maintained by the community to support additional frontend frameworks.

- [Vue](https://github.com/lorisleiva/trezoa-wallets-vue)
- [Angular](https://github.com/heavy-duty/platform/tree/master/libs/wallet-adapter)
- [Svelte](https://github.com/aztemi/svelte-on-trezoa-wallet-adapter)
- [TypeScript](https://github.com/ronanyeah/trezoa-connect)
- [Ant Design Web3](https://web3.ant.design/components/trezoa)

### UI Components
These packages provide components for common UI frameworks.

| package                                                                                                   | description                                                        | npm                                                                                                        |
|-----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| [react-ui](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/ui/react-ui)                | Components for React (no UI framework, just CSS)                   | [`@trezoa/wallet-adapter-react-ui`](https://npmjs.com/package/@trezoa/wallet-adapter-react-ui)             |

### Wallets
These packages provide adapters for each wallet.
You can use the [wallets](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/wallets) package, or add the individual wallet packages you want.

| package                                                                                                   | description                                                     | npm                                                                                                      |
|-----------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| [wallets](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/wallets)             | Includes all the wallets (with tree shaking)                    | [`@trezoa/wallet-adapter-wallets`](https://npmjs.com/package/@trezoa/wallet-adapter-wallets)             |
| [alpha](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/alpha)                 | Adapter for [Alpha](https://github.com/alphabatem/alpha-wallet) | [`@trezoa/wallet-adapter-alpha`](https://npmjs.com/package/@trezoa/wallet-adapter-alpha)                 |
| [avana](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/avana)                 | Adapter for [Avana](https://www.avanawallet.com)                | [`@trezoa/wallet-adapter-avana`](https://npmjs.com/package/@trezoa/wallet-adapter-avana)                 |
| [bitkeep](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/bitkeep)             | Adapter for [BitKeep](https://bitkeep.com)                      | [`@trezoa/wallet-adapter-bitkeep`](https://npmjs.com/package/@trezoa/wallet-adapter-bitkeep)             |
| [bitpie](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/bitpie)               | Adapter for [Bitpie](https://bitpie.com)                        | [`@trezoa/wallet-adapter-bitpie`](https://npmjs.com/package/@trezoa/wallet-adapter-bitpie)               |
| [clover](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/clover)               | Adapter for [CLV](https://clv.org)                              | [`@trezoa/wallet-adapter-clover`](https://npmjs.com/package/@trezoa/wallet-adapter-clover)               |
| [coin98](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/coin98)               | Adapter for [Coin98](https://coin98.com)                        | [`@trezoa/wallet-adapter-coin98`](https://npmjs.com/package/@trezoa/wallet-adapter-coin98)               |
| [coinbase](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/coinbase)           | Adapter for [Coinbase](https://www.coinbase.com)                | [`@trezoa/wallet-adapter-coinbase`](https://npmjs.com/package/@trezoa/wallet-adapter-coinbase)           |
| [coinhub](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/coinhub)             | Adapter for [Coinhub](https://coinhub.org)                      | [`@trezoa/wallet-adapter-coinhub`](https://npmjs.com/package/@trezoa/wallet-adapter-coinhub)             |
| [fractal](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/fractal)             | Adapter for [Fractal](https://fractal.is)                       | [`@trezoa/wallet-adapter-fractal`](https://npmjs.com/package/@trezoa/wallet-adapter-fractal)             |
| [huobi](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/huobi)                 | Adapter for [HuobiWallet](https://www.huobiwallet.io)           | [`@trezoa/wallet-adapter-huobi`](https://npmjs.com/package/@trezoa/wallet-adapter-huobi)                 |
| [hyperpay](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/hyperpay)           | Adapter for [HyperPay](https://hyperpay.io)                     | [`@trezoa/wallet-adapter-hyperpay`](https://npmjs.com/package/@trezoa/wallet-adapter-hyperpay)           |
| [keystone](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/keystone)           | Adapter for [keystone](https://keyst.one)                       | [`@trezoa/wallet-adapter-keystone`](https://npmjs.com/package/@trezoa/wallet-adapter-keystone)           |
| [krystal](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/krystal)             | Adapter for [krystal](https://krystal.app)                      | [`@trezoa/wallet-adapter-krystal`](https://npmjs.com/package/@trezoa/wallet-adapter-krystal)             |
| [ledger](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/ledger)               | Adapter for [Ledger](https://ledger.com)                        | [`@trezoa/wallet-adapter-ledger`](https://npmjs.com/package/@trezoa/wallet-adapter-ledger)               |
| [mathwallet](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/mathwallet)       | Adapter for [MathWallet](https://mathwallet.org)                | [`@trezoa/wallet-adapter-mathwallet`](https://npmjs.com/package/@trezoa/wallet-adapter-mathwallet)       |
| [neko](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/neko)                   | Adapter for [Neko](https://nekowallet.com)                      | [`@trezoa/wallet-adapter-neko`](https://npmjs.com/package/@trezoa/wallet-adapter-neko)                   |
| [nightly](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/nightly)             | Adapter for [Nightly](https://nightly.app)                      | [`@trezoa/wallet-adapter-nightly`](https://npmjs.com/package/@trezoa/wallet-adapter-nightly)             |
| [nufi](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/nufi)                   | Adapter for [NuFi](https://nu.fi)                               | [`@trezoa/wallet-adapter-nufi`](https://npmjs.com/package/@trezoa/wallet-adapter-nufi)                   |
| [onto](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/onto)                   | Adapter for [ONTO](https://onto.app)                            | [`@trezoa/wallet-adapter-onto`](https://npmjs.com/package/@trezoa/wallet-adapter-onto)                   |
| [particle](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/particle)           | Adapter for [Particle](https://particle.network)                | [`@trezoa/wallet-adapter-particle`](https://npmjs.com/package/@trezoa/wallet-adapter-particle)           |
| [phantom](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/phantom)             | Adapter for [Phantom](https://phantom.app)                      | [`@trezoa/wallet-adapter-phantom`](https://npmjs.com/package/@trezoa/wallet-adapter-phantom)             |
| [safepal](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/safepal)             | Adapter for [SafePal](https://safepal.io)                       | [`@trezoa/wallet-adapter-safepal`](https://npmjs.com/package/@trezoa/wallet-adapter-safepal)             |
| [saifu](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/saifu)                 | Adapter for [Saifu](https://saifuwallet.com)                    | [`@trezoa/wallet-adapter-saifu`](https://npmjs.com/package/@trezoa/wallet-adapter-safepal)               |
| [salmon](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/salmon)               | Adapter for [Salmon](https://www.salmonwallet.io)               | [`@trezoa/wallet-adapter-salmon`](https://npmjs.com/package/@trezoa/wallet-adapter-salmon)               |
| [sky](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/sky)                     | Adapter for [Sky](https://getsky.app)                           | [`@trezoa/wallet-adapter-sky`](https://npmjs.com/package/@trezoa/wallet-adapter-sky)                     |
| [trzflare](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/trzflare)           | Adapter for [Trzflare](https://trzflare.com)                    | [`@trezoa/wallet-adapter-trzflare`](https://npmjs.com/package/@trezoa/wallet-adapter-trzflare)           |
| [solong](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/solong)               | Adapter for [Solong](https://solongwallet.io)                   | [`@trezoa/wallet-adapter-solong`](https://npmjs.com/package/@trezoa/wallet-adapter-solong)               |
| [spot](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/spot)                   | Adapter for [Spot](https://spot-wallet.com)                     | [`@trezoa/wallet-adapter-spot`](https://npmjs.com/package/@trezoa/wallet-adapter-spot)                   |
| [tokenary](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/tokenary)           | Adapter for [Tokenary](https://tokenary.io)                     | [`@trezoa/wallet-adapter-tokenary`](https://npmjs.com/package/@trezoa/wallet-adapter-tokenary)           |
| [tokenpocket](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/tokenpocket)     | Adapter for [TokenPocket](https://tokenpocket.pro)              | [`@trezoa/wallet-adapter-tokenpocket`](https://npmjs.com/package/@trezoa/wallet-adapter-tokenpocket)     |
| [torus](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/torus)                 | Adapter for [Torus](https://tor.us)                             | [`@trezoa/wallet-adapter-torus`](https://npmjs.com/package/@trezoa/wallet-adapter-torus)                 |
| [trezor](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/trezor)               | Adapter for [Trezor](https://trezor.io)                         | [`@trezoa/wallet-adapter-trezor`](https://npmjs.com/package/@trezoa/wallet-adapter-trezor)                |
| [trust](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/trust)                 | Adapter for [Trust Wallet](https://trustwallet.com)             | [`@trezoa/wallet-adapter-trust`](https://npmjs.com/package/@trezoa/wallet-adapter-trust)                 |
| [walletconnect](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/walletconnect) | Adapter for [WalletConnect](https://walletconnect.com)          | [`@trezoa/wallet-adapter-walletconnect`](https://npmjs.com/package/@trezoa/wallet-adapter-walletconnect) |
| [xdefi](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/wallets/xdefi)                 | Adapter for [XDEFI](https://xdefi.io)                           | [`@trezoa/wallet-adapter-xdefi`](https://npmjs.com/package/@trezoa/wallet-adapter-xdefi)                 |

### Starter Projects
These packages provide projects that you can use to start building a app with built-in wallet support.

| package                                                                                                                         | description                                                             | npm                                                                                                                            |
|---------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [example](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/starter/example)                                   | Demo of UI components and wallets                                       | [`@trezoa/wallet-adapter-example`](https://npmjs.com/package/@trezoa/wallet-adapter-example)                                   |
| [react-ui-starter](https://github.com/trezoa-team/wallet-adapter/tree/master/packages/starter/react-ui-starter)                 | [Parcel](https://parceljs.org) trezoa using React UI                   | [`@trezoa/wallet-adapter-react-ui-starter`](https://npmjs.com/package/@trezoa/wallet-adapter-react-ui-starter)                 |
