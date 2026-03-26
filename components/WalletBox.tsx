"use client";

import { useState } from "react";

interface WalletBoxProps {
  address: string;
  label?: string;
}

export default function WalletBox({ address, label = "Wallet" }: WalletBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const truncated =
    address.length > 20
      ? `${address.slice(0, 10)}…${address.slice(-8)}`
      : address;

  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-4">
      <p className="text-xs text-white/40 uppercase tracking-widest mb-2">
        {label}
      </p>
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-sm text-white/80 truncate">
          {truncated}
        </span>
        <button
          onClick={handleCopy}
          className="shrink-0 text-xs px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/70 transition-colors"
        >
          {copied ? "✓ Copiato" : "Copia"}
        </button>
      </div>
    </div>
  );
}
