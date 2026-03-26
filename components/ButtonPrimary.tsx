"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonPrimaryProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function ButtonPrimary({
  children,
  onClick,
  disabled = false,
  fullWidth = true,
}: ButtonPrimaryProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${fullWidth ? "w-full" : ""}
        relative overflow-hidden rounded-2xl px-6 py-4
        bg-gradient-to-r from-blue-600 to-violet-600
        text-white font-semibold text-lg
        shadow-lg shadow-blue-500/25
        transition-opacity duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-blue-500/50
      `}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
}
