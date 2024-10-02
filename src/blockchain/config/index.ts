import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage, http } from 'wagmi';
import { mainnet, bscTestnet, sepolia } from 'wagmi/chains';
import { Chain } from 'wagmi/chains';

const projectId = process.env.NEXT_PUBLIC_WEB3MODAL_PROJECT_ID;
if (!projectId) throw new Error('Project ID is not defined');

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};


// const L2_RPC_URL = 'https://l2-puff-bob-jznbxtoq7h.t.conduit.xyz';
const L2_RPC_URL = 'https://testnet.rpc.gobob.xyz';
const L2_WSS_URL = 'wss://l2-puff-bob-jznbxtoq7h.t.conduit.xyz';
// const L2_BLOCK_EXPLORER = 'https://explorerl2-puff-bob-jznbxtoq7h.t.conduit.xyz';
const L2_BLOCK_EXPLORER = 'https://testnet-explorer.gobob.xyz';
const L2_CHAIN_ID = 111;
const L2_MULTICALL3_ADDRESS = '0x089b191d95417817389c8eD9075b51a38ca46DE8';
const L2_CHAIN_CONFIG = {
  id: L2_CHAIN_ID,
  name: 'BOB L2 Demo',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH'
  },
  rpcUrls: {
    public: { http: [L2_RPC_URL], webSocket: [L2_WSS_URL] },
    default: { http: [L2_RPC_URL], webSocket: [L2_WSS_URL] }
  },
  blockExplorers: {
    default: { name: 'BobScan', url: L2_BLOCK_EXPLORER }
  },
  contracts: {
    multicall3: {
      address: L2_MULTICALL3_ADDRESS
    }
  }
} as const satisfies Chain;

export const wagmiConfig = defaultWagmiConfig({
  chains: [L2_CHAIN_CONFIG, mainnet, sepolia, bscTestnet], // required
  projectId, // required
  metadata, // required
  ssr: true,
  transports: {
    [L2_CHAIN_CONFIG.id]: http(),
    // [mainnet.id]: http(),
    // [sepolia.id]: http(),
    // [bscTestnet.id]: http('https://data-seed-prebsc-1-s1.binance.org:8545'),
  },
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
});
