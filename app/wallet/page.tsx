"use client";

// DECLASSIFIED: /wallet (TON Connect wallet picker) is no longer part of the main UX flow.
// Silently redirect to /partecipazione so any existing links remain harmless.

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/constants";

export default function WalletPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(ROUTES.partecipazione);
  }, [router]);

  return null;
}

