"use client";

import { createContext, useContext } from "react";
import { TelegramUser } from "@/lib/telegram";

interface TelegramUserContextValue {
  user: TelegramUser | null;
  isLoading: boolean;
  isTelegram: boolean;
}

export const TelegramUserContext = createContext<TelegramUserContextValue>({
  user: null,
  isLoading: true,
  isTelegram: false,
});

export function useTelegramUserContext(): TelegramUserContextValue {
  return useContext(TelegramUserContext);
}
