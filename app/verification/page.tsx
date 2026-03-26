"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import SectionTitle from "@/components/SectionTitle";
import Card from "@/components/Card";
import ButtonPrimary from "@/components/ButtonPrimary";
import { ROUTES } from "@/lib/constants";

const steps = [
  { label: "Transazione ricevuta", done: true },
  { label: "Conferme blockchain", done: false },
  { label: "Stato aggiornato", done: false },
];

export default function VerificationPage() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center min-h-screen px-6 py-12 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 flex-1 w-full">
        <SectionTitle
          title="Verifica in corso"
          subtitle="Transazione in verifica. Il sistema sta monitorando la blockchain."
        />

        {/* Loader */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="py-6"
        >
          <Loader />
        </motion.div>

        {/* Steps */}
        <Card className="w-full">
          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * i }}
                className="flex items-center gap-3"
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    step.done
                      ? "bg-blue-500 text-white"
                      : "bg-white/10 text-white/30"
                  }`}
                >
                  {step.done ? "✓" : i + 1}
                </div>
                <p
                  className={`text-sm ${
                    step.done ? "text-white" : "text-white/40"
                  }`}
                >
                  {step.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Card>

        <motion.div
          className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-blue-300 text-xs leading-relaxed text-center">
            Le transazioni TON richiedono solitamente 1-3 minuti per essere
            confermate. Puoi tornare in questa schermata in seguito.
          </p>
        </motion.div>

        <div className="flex-1" />

        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <ButtonPrimary onClick={() => router.push(ROUTES.dashboard)}>
            Torna alla dashboard
          </ButtonPrimary>
        </motion.div>
      </div>
    </div>
  );
}
