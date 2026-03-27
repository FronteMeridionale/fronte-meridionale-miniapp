"use client";

import { useTelegramUserContext } from "@/contexts/TelegramUserContext";
import { TelegramUser } from "@/lib/telegram";

interface UseTelegramUserResult {
  user: TelegramUser | null;
  isLoading: boolean;
  isTelegram: boolean;
}

export function useTelegramUser(): UseTelegramUserResult {
  return useTelegramUserContext();
}
