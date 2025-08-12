import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { WagmiProvider, http, createConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

// ✅ Import default chains
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
} from "wagmi/chains";

// ✅ Define XLayer Mainnet and Testnet manually
const xlayer = {
  id: 196,
  name: "XLayer",
  nativeCurrency: {
    name: "OKB",
    symbol: "OKB",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.xlayer.tech"],
    },
  },
  blockExplorers: {
    default: { name: "XLayerScan", url: "https://www.okx.com/explorer/xlayer" },
  },
};

const xlayerTestnet = {
  id: 195,
  name: "XLayer Testnet",
  nativeCurrency: {
    name: "OKB Test",
    symbol: "OKB",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://testrpc.xlayer.tech"],
    },
  },
  blockExplorers: {
    default: {
      name: "OKLink Testnet",
      url: "https://www.oklink.com/xlayer-test",
    },
  },
  testnet: true,
};

// ✅ Setup QueryClient for React Query
const queryClient = new QueryClient();

// ✅ Define Wagmi Config
const config = getDefaultConfig({
  appName: "BantuWeb3",
  projectId: "bab5b2fe3c04184ae54233c17da59a1f", // 🔁 Replace with your actual WalletConnect project ID
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
    xlayer,
    xlayerTestnet,
  ],
  transports: {
    [mainnet.id]: http("https://rpc.ankr.com/eth"),
    [polygon.id]: http("https://polygon-rpc.com"),
    [optimism.id]: http("https://mainnet.optimism.io"),
    [arbitrum.id]: http("https://arb1.arbitrum.io/rpc"),
    [base.id]: http("https://mainnet.base.org"),
    [sepolia.id]: http("https://rpc.sepolia.org"),
    [xlayer.id]: http("https://rpc.xlayer.tech"),
    [xlayerTestnet.id]: http("https://testrpc.xlayer.tech"),
  },
});

// ✅ Render App
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
