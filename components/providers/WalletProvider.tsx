"use client";

// LEGACY: wallet infrastructure only, not in the main UX flow.
// This provider keeps TON Connect SDK available for potential backend/custodial use,
// but must NOT be imported by routing or UI files in the main member flow.

import { ReactNode, useCallback } from "react";
import {
  TonConnectUIProvider,
  useTonAddress,
  useTonConnectUI,
} from "@tonconnect/ui-react";
import { WalletContext } from "@/contexts/WalletContext";

const MANIFEST_URL =
  typeof window !== "undefined"
    ? `${window.location.origin}/tonconnect-manifest.json`
    : "https://fronte-meridionale.app/tonconnect-manifest.json";

function WalletContextBridge({ children }: { children: ReactNode }) {
  const rawAddress = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();

  const connect = useCallback(async () => {
    try {
      await tonConnectUI.openModal();
    } catch {
      // Silently ignore if modal cannot open
    }
  }, [tonConnectUI]);

  const disconnect = useCallback(async () => {
    try {
      await tonConnectUI.disconnect();
    } catch {
      // Silently ignore if disconnect fails
    }
  }, [tonConnectUI]);

  return (
    <WalletContext.Provider
      value={{
        address: rawAddress || null,
        isConnected: !!rawAddress,
        connect,
        disconnect,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export default function WalletProvider({ children }: { children: ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl={MANIFEST_URL}>
      <WalletContextBridge>{children}</WalletContextBridge>
    </TonConnectUIProvider>
  );
}
