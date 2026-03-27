"use client";

import { useWalletContext, WalletContextValue } from "@/contexts/WalletContext";

export function useWallet(): WalletContextValue {
  return useWalletContext();
}
