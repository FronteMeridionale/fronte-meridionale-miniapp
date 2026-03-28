"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ButtonPrimary from "@/components/ButtonPrimary";
import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { ROUTES } from "@/lib/constants";

const paragraphs = [
  "Il Fronte Meridionale nasce per costruire un movimento politico del Mezzogiorno basato sulla partecipazione reale.",
  "Non esistono iscrizioni simboliche.",
  "La partecipazione avviene in modo trasparente e verificabile, dentro Telegram.",
  "La legittimità nasce dalla base.",
];

export default function ProjectPage() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col min-h-screen px-6 py-12 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-violet-600/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-600/15 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-8 flex-1">
        <SectionTitle title="Un progetto politico fondato sulla base" />

        <Card>
          <div className="flex flex-col gap-4">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15 * i }}
                className={`text-sm leading-relaxed ${
                  i === 1 || i === 3
                    ? "text-white font-semibold text-base"
                    : "text-white/70"
                }`}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </Card>

        {/* Chain icon row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-3 px-1"
        >
          {["📋", "🔍", "✅"].map((icon, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col items-center gap-1 rounded-xl bg-white/5 border border-white/8 py-3"
            >
              <span className="text-xl">{icon}</span>
              <span className="text-white/40 text-xs">
                {["Partecipazione", "Verificabile", "Trasparente"][i]}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="flex-1" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <ButtonPrimary onClick={() => router.push(ROUTES.partecipazione)}>
            Continua
          </ButtonPrimary>
        </motion.div>
      </div>
    </div>
  );
}
