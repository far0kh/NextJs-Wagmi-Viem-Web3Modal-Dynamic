'use client';

import React, { ReactNode } from 'react';
import { wagmiConfig } from '@/blockchain/config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { State, WagmiProvider } from 'wagmi';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

const queryClient = new QueryClient();

const projectId = process.env.NEXT_PUBLIC_WEB3MODAL_PROJECT_ID;
if (!projectId) throw new Error('Project ID is not defined');

// const config = getDefaultConfig({
//   appName: 'My RainbowKit App',
//   projectId,
//   chains: wagmiConfig.chains,
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });


export function RainbowKit({ children, initialState }: { children: ReactNode; initialState?: State }) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
