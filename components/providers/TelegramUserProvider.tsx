"use client";

import { useEffect, useState } from "react";
import { TelegramUserContext } from "@/contexts/TelegramUserContext";
import {
  isTelegramWebApp,
  parseTelegramUser,
  getMockUser,
  TelegramUser,
} from "@/lib/telegram";

export default function TelegramUserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTelegram, setIsTelegram] = useState(false);

  useEffect(() => {
    try {
      const inTelegram = isTelegramWebApp();
      setIsTelegram(inTelegram);

      if (inTelegram) {
        const telegramUser = parseTelegramUser();
        setUser(telegramUser ?? getMockUser());
      } else {
        setUser(getMockUser());
      }
    } catch {
      setUser(getMockUser());
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <TelegramUserContext.Provider value={{ user, isLoading, isTelegram }}>
      {children}
    </TelegramUserContext.Provider>
  );
}
