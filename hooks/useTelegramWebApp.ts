"use client";

import { useEffect, useState } from "react";
import { WebApp as WebAppType } from "@twa-dev/types";

export function useTelegramWebApp(): WebAppType | null {
  const [webApp, setWebApp] = useState<WebAppType | null>(null);

  useEffect(() => {
    try {
      const tg = (window as unknown as { Telegram?: { WebApp?: WebAppType } })
        .Telegram;
      if (tg?.WebApp) {
        tg.WebApp.ready();
        setWebApp(tg.WebApp);
      }
    } catch {
      // Not in Telegram — silently ignore
    }
  }, []);

  return webApp;
}
