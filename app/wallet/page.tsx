"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ButtonPrimary from "@/components/ButtonPrimary";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { useWallet } from "@/hooks/useWallet";
import { formatAddress } from "@/lib/ton";
import { ROUTES } from "@/lib/constants";

export default function WalletPage() {
  const router = useRouter();
  const { address, isConnected, connect, disconnect } = useWallet();

  const handleAction = async () => {
    if (isConnected) {
      await disconnect();
    } else {
      await connect();
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen px-6 py-12 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-violet-600/15 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-6 flex-1">
        <SectionTitle
          title="Wallet TON"
          subtitle="Collega il tuo wallet per partecipare al Fronte Meridionale"
        />

        {/* Status card */}
        <Card>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-white/40 uppercase tracking-widest">
                Stato connessione
              </p>
              <motion.span
                key={String(isConnected)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  isConnected
                    ? "bg-green-500/15 text-green-400 border border-green-500/20"
                    : "bg-white/5 text-white/40 border border-white/10"
                }`}
              >
                {isConnected ? "Connesso" : "Non connesso"}
              </motion.span>
            </div>

            {isConnected && address && (
              <>
                <div className="h-px bg-white/8" />
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-2">
                    Indirizzo wallet
                  </p>
                  <p className="font-mono text-sm text-white/80 break-all">
                    {formatAddress(address)}
                  </p>
                </motion.div>
              </>
            )}
          </div>
        </Card>

        {/* Info card */}
        {!isConnected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4"
          >
            <p className="text-blue-300 text-xs leading-relaxed text-center">
              Collega il tuo wallet TON per registrare la tua partecipazione
              sulla blockchain in modo pubblico e verificabile.
            </p>
          </motion.div>
        )}

        <div className="flex-1" />

        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ButtonPrimary onClick={handleAction}>
              {isConnected ? "Disconnetti wallet" : "Collega wallet"}
            </ButtonPrimary>
          </motion.div>

          {isConnected && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <ButtonPrimary onClick={() => router.push(ROUTES.dashboard)}>
                Vai alla dashboard →
              </ButtonPrimary>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
