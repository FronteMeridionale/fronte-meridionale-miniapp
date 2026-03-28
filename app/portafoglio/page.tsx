"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/constants";

export default function PortafoglioPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(ROUTES.partecipazione);
  }, [router]);

  return null;
}
