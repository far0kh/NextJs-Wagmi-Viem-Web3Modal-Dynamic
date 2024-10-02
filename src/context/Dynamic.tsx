'use client';

import React, { ReactNode } from 'react';
import { wagmiConfig } from '@/blockchain/config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { State, WagmiProvider } from 'wagmi';

const queryClient = new QueryClient();

import {
  DynamicContextProvider,
  EthereumWalletConnectors,
  BitcoinWalletConnectors,
  DynamicWagmiConnector,
} from "@/lib/dynamic";

export function DynamicContext({ children, initialState }: { children: ReactNode; initialState?: State }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIROMENT_ID!,
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <WagmiProvider config={wagmiConfig} initialState={initialState}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
