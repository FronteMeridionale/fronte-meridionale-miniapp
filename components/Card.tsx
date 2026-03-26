"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export default function Card({ children, className = "", animate = true }: CardProps) {
  const content = (
    <div
      className={`
        rounded-2xl p-5
        bg-white/5
        border border-white/8
        backdrop-blur-sm
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]
        ${className}
      `}
    >
      {children}
    </div>
  );

  if (!animate) return content;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {content}
    </motion.div>
  );
}
