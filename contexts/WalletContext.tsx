"use client";

import { createContext, useContext } from "react";

export interface WalletContextValue {
  address: string | null;
  isConnected: boolean;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

export const WalletContext = createContext<WalletContextValue>({
  address: null,
  isConnected: false,
  connect: async () => {},
  disconnect: async () => {},
});

export function useWalletContext(): WalletContextValue {
  return useContext(WalletContext);
}
