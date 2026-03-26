"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center mb-8"
    >
      <h1 className="text-2xl font-bold text-white leading-tight tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
