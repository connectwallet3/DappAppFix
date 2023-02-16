import rainbow from "./assets/Rainbow.png";
import BitKeep from "./assets/BitKeep.png";
import MetaMask from "./assets/MetaMask.png";
import walletconnect from "./assets/walletconnect.png";
import Coinomi from "./assets/Coinomi.png";
import Infinityy from "./assets/Infinityy.png";
import solana from "./assets/solana.png";
import theta from "./assets/theta.png";
import Aptos from "./assets/Aptos.png";
import martian from "./assets/martian.png";
import Ledger from "./assets/Ledger-Live.png";
import solflare from "./assets/solflare.png";
import TokenPocket from "./assets/TokenPocket.png";
import SafePal from "./assets/SafePal.jpg";
import TrustWallet from "./assets/Trust-Wallet.jpg";
import coinbase from "./assets/coinbase.jpg";
import Argent from "./assets/Argent.jpg";
import Nash from "./assets/Nash.jpg";
import Pillar from "./assets/Pillar.jpg";
import Dcent from "./assets/Dcent.jpg";
import WallETH from "./assets/WallETH.jpg";
import Alice from "./assets/Alice.jpg";
import ZelCore from "./assets/ZelCore.jpg";
import Coin98 from "./assets/Coin98.jpg";
import Atomic from "./assets/Atomic.jpg";
import imToken from "./assets/imToken.jpg";
import Infinito from "./assets/Infinito.jpg";
import Authereum from "./assets/Authereum.jpg";
import onto from "./assets/ONTO.jpg";
import MathWallet from "./assets/MathWallet.jpg";
import Steakwallet from "./assets/Steakwallet.jpg";
import BitPay from "./assets/BitPay.jpg";
import walletio from "./assets/walletio.jpg";
import Ownbit from "./assets/Ownbit.jpg";
import Bridge from "./assets/Bridge.jpg";
import EasyPocket from "./assets/EasyPocket.jpg";
import ViaWallet from "./assets/ViaWallet.jpg";
import inch from "./assets/1inch-Wallet.jpg";
import AlphaWallet from "./assets/AlphaWallet.jpg";
import Huobi from "./assets/Huobi-Wallet.jpg";
import Eidoo from "./assets/Eidoo.jpg";
import CoolWallet from "./assets/CoolWallet.jpg";
import Mykey from "./assets/Mykey.jpg";
import Torus from "./assets/Torus.jpg";
import Tokenary from "./assets/Tokenary.jpg";
import Dok from "./assets/Dok.jpg";
import Vision from "./assets/Vision.jpg";
import Spatium from "./assets/Spatium.jpg";
import GridPlus from "./assets/GridPlus.jpg";
import Cybrvo from "./assets/Cybrvo.jpg";
import Terra from "./assets/Terra.jpg";
import SparkPoint from "./assets/SparkPoint.jpg";
import HaloDeFi from "./assets/HaloDeFi.jpg";
import TrustVault from "./assets/TrustVault.jpg";
import UnstoppableWallet from "./assets/UnstoppableWallet.jpg";
import Loopring from "./assets/Loopring.jpg";
import Gnosis from "./assets/Gnosis-Safe-Multisig.jpg";
import crypto from "./assets/Crypto.com-DeFi-Wallet.jpg";
import Pontem from "./assets/Pontem.jpg";
import petra from "./assets/petra.jpg";
import stagazer from "./assets/stagazer.jpg";
import graph from "./assets/graph.jpg";
import Phantom from "./assets/Phantom.webp";

const wallets = [
  { id: 1, image: TrustWallet, name: "Trust Wallet" },
  { id: 32, image: Atomic, name: "Atomic" },
  { id: 6, image: MetaMask, name: "MetaMask" },
  { id: 3, image: rainbow, name: "Rainbow" },
  { id: 9, image: martian, name: "Martian" },
  { id: 91, image: Pontem, name: "Pontem" },
  { id: 51, image: petra, name: "Petra" },
  { id: 2, image: coinbase, name: "Coinbase" },
  { id: 12, image: Argent, name: "Argent" },
  { id: 13, image: Gnosis, name: "Gnosis Safe Multisig" },
  { id: 14, image: crypto, name: "Crypto.com | DeFi Wallet" },
  { id: 15, image: Pillar, name: "Pillar" },
  { id: 115, image: stagazer, name: "Stagazer" },
  { id: 4, image: walletconnect, name: "WalletConnect" },
  { id: 7, image: solana, name: "Solana" },
  { id: 71, image: graph, name: "Graph Protocol" },
  { id: 8, image: Aptos, name: "Aptos" },
  { id: 83, image: SafePal, name: "SafePal" },
  { id: 81, image: theta, name: "Theta" },
  { id: 10, image: solflare, name: "Solflare" },
  { id: 11, image: Phantom, name: "Phantom" },
  { id: 16, image: imToken, name: "imToken" },
  { id: 17, image: onto, name: "ONTO" },
  { id: 18, image: TokenPocket, name: "TokenPocket" },
  { id: 19, image: MathWallet, name: "MathWallet" },
  { id: 20, image: Steakwallet, name: "Steakwallet" },
  { id: 21, image: BitPay, name: "BitPay" },
  { id: 22, image: WallETH, name: "WallETH" },
  { id: 23, image: Authereum, name: "Authereum" },
  { id: 24, image: Ledger, name: "Ledger Live" },
  { id: 25, image: AlphaWallet, name: "Alpha Wallet" },
  { id: 26, image: inch, name: "1inch Wallet" },
  { id: 27, image: Huobi, name: "Huobi Wallet" },
  { id: 28, image: Eidoo, name: "Eidoo" },
  { id: 29, image: Mykey, name: "MYKEY" },
  { id: 30, image: Loopring, name: "Loopring Wallet" },
  { id: 31, image: TrustVault, name: "TrustVault" },
  { id: 33, image: Coin98, name: "Coin98" },
  { id: 34, image: CoolWallet, name: "CoolWallet" },
  { id: 35, image: Alice, name: "Alice" },
  { id: 36, image: Dcent, name: "D'CENT Wallet" },
  { id: 37, image: ZelCore, name: "ZelCore" },
  { id: 38, image: Nash, name: "Nash" },
  { id: 39, image: Coinomi, name: "Coinomi" },
  { id: 40, image: GridPlus, name: "GridPlus" },
  { id: 41, image: Cybrvo, name: "CYBAVO Wallet" },
  { id: 42, image: Tokenary, name: "Tokenary" },
  { id: 43, image: Torus, name: "Torus" },
  { id: 44, image: Spatium, name: "Spatium" },
  { id: 45, image: Terra, name: "Terra Station" },
  { id: 46, image: Infinito, name: "Infinito" },
  { id: 47, image: walletio, name: "Wallet.io" },
  { id: 48, image: Infinityy, name: "Infinity Wallet" },
  { id: 49, image: Ownbit, name: "Ownbit" },
  { id: 50, image: EasyPocket, name: "EasyPocket" },
  { id: 51, image: Bridge, name: "Bridge Wallet" },
  { id: 52, image: SparkPoint, name: "SparkPoint" },
  { id: 53, image: ViaWallet, name: "ViaWallet" },
  { id: 54, image: BitKeep, name: "BitKeep" },
  { id: 55, image: Vision, name: "Vision" },
  { id: 56, image: UnstoppableWallet, name: "Unstoppable Wallet" },
  { id: 57, image: HaloDeFi, name: "HaloDeFi Wallet" },
  { id: 58, image: Dok, name: "Dok Wallet" },
];

export default wallets;
