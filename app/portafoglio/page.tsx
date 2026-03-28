"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/constants";

/**
 * /portafoglio is a legacy route.
 * The custodial-first flow no longer exposes wallet selection to users.
 * Redirect silently to /partecipazione.
 */
export default function PortafoglioPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(ROUTES.partecipazione);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
