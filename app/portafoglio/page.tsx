"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ButtonPrimary from "@/components/ButtonPrimary";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { useWallet } from "@/hooks/useWallet";
import { ROUTES } from "@/lib/constants";

export default function PortafoglioPage() {
  const router = useRouter();
  const { isConnected, connect } = useWallet();

  const handleContinua = async () => {
    if (isConnected) {
      router.push(ROUTES.dashboard);
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
          title="Usa il tuo portafoglio Telegram"
          subtitle="Per partecipare userai il portafoglio già disponibile in Telegram."
        />

        {/* Info card */}
        <Card>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-white/70 leading-relaxed">
              Ti servirà solo per confermare la tua partecipazione in modo
              trasparente.
            </p>
            <div className="h-px bg-white/8" />
            <p className="text-xs text-white/50 leading-relaxed">
              Non è necessario alcun acquisto. Il portafoglio viene usato
              esclusivamente per registrare la tua adesione.
            </p>
          </div>
        </Card>

        {/* Connection status */}
        {isConnected && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-green-500/10 border border-green-500/20 p-4"
          >
            <p className="text-green-400 text-sm text-center font-medium">
              ✓ Portafoglio Telegram collegato
            </p>
          </motion.div>
        )}

        {/* Instructional box shown before connecting */}
        {!isConnected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4"
          >
            <p className="text-blue-300 text-sm leading-relaxed text-center font-medium">
              Scegli il portafoglio Telegram per continuare
            </p>
            <p className="text-blue-200/60 text-xs leading-relaxed text-center mt-2">
              Cerca &ldquo;Wallet in Telegram&rdquo; o &ldquo;Telegram Wallet&rdquo; nella lista.
            </p>
          </motion.div>
        )}

        <div className="flex-1" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ButtonPrimary onClick={handleContinua}>
            {isConnected ? "Vai alla dashboard →" : "Continua"}
          </ButtonPrimary>
        </motion.div>
      </div>
    </div>
  );
}
