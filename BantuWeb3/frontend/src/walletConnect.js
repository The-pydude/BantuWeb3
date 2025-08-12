import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import {
    configureChains,
    createConfig,
    WagmiConfig
} from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum],
    [publicProvider()]
);

const { connectors } = getDefaultWallets({
    appName: 'BantuWeb3',
    projectId: 'bab5b2fe3c04184ae54233c17da59a1f', // Get from https://cloud.walletconnect.com
    chains
});

const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
});

export function Web3Provider({ children }) {
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
}
