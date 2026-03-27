"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ButtonPrimary from "@/components/ButtonPrimary";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { ROUTES } from "@/lib/constants";

const features = [
  "Non serve installare nulla",
  "Tutto avviene dentro Telegram",
  "La partecipazione sarà registrata in modo verificabile",
];

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
        <SectionTitle title="Partecipa al Fronte Meridionale" />

        <Card>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm text-white/70 leading-relaxed"
          >
            La partecipazione al Fronte Meridionale avviene in modo trasparente
            attraverso il portafoglio già presente in Telegram.
          </motion.p>
        </Card>

        {/* Feature list */}
        <div className="flex flex-col gap-3">
          {features.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + 0.1 * i }}
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
          <ButtonPrimary onClick={() => router.push(ROUTES.portafoglio)}>
            Continua
          </ButtonPrimary>
        </motion.div>
      </div>
    </div>
  );
}
