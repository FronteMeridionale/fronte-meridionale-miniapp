"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ButtonPrimary from "@/components/ButtonPrimary";
import { ROUTES } from "@/lib/constants";

export default function IntroPage() {
  const router = useRouter();

  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen px-6 py-16 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-violet-600/20 blur-3xl" />
      </div>

      {/* Top spacer */}
      <div />

      {/* Center content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center gap-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Logo / Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30 mb-2"
        >
          <span className="text-4xl">🏛️</span>
        </motion.div>

        <h1 className="text-4xl font-extrabold text-white tracking-tight leading-tight">
          Fronte
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Meridionale
          </span>
        </h1>

        <p className="text-white/60 text-base leading-relaxed max-w-xs">
          La partecipazione politica diventa reale, verificabile e trasparente.
        </p>
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        className="relative z-10 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <ButtonPrimary onClick={() => router.push(ROUTES.project)}>
          Entra
        </ButtonPrimary>
        <p className="text-center text-white/30 text-xs mt-4">
          Nessuna iscrizione simbolica. Solo partecipazione reale.
        </p>
      </motion.div>
    </div>
  );
}
