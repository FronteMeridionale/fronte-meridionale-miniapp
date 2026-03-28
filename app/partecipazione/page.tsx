"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ButtonPrimary from "@/components/ButtonPrimary";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { ROUTES, TIERS } from "@/lib/constants";

export default function PartecipazionePage() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col min-h-screen px-6 py-12 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-600/15 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-8 flex-1">
        <SectionTitle
          title="Partecipa al Fronte Meridionale"
          subtitle="Ogni contributo viene registrato nel registro ufficiale dei membri."
        />

        <Card>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm text-white/70 leading-relaxed"
          >
            La partecipazione al Fronte Meridionale è reale, verificabile e
            trasparente. Il tuo contributo determina il tuo status nel registro
            dei membri.
          </motion.p>
        </Card>

        {/* Soglie */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-3"
        >
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + 0.1 * i }}
              className="flex-1 rounded-xl bg-white/5 border border-white/8 p-4 text-center"
            >
              <p className="text-2xl font-bold text-white">€{tier.min}+</p>
              <p className="text-xs text-white/50 mt-1">{tier.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Info list */}
        <div className="flex flex-col gap-3">
          {[
            "Il tuo status viene aggiornato automaticamente",
            "Il diritto di voto matura dopo 6 mesi da Sostenitore",
            "Tutto avviene dentro Telegram, senza passaggi tecnici",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + 0.1 * i }}
              className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/8 px-4 py-3"
            >
              <span className="text-green-400 font-bold shrink-0">✓</span>
              <p className="text-sm text-white/80 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex-1" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ButtonPrimary onClick={() => router.push(ROUTES.dashboard)}>
            Partecipa
          </ButtonPrimary>
        </motion.div>
      </div>
    </div>
  );
}
