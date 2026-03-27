export interface TelegramUser {
  id: number;
  username?: string;
  firstName: string;
  lastName?: string;
  photoUrl?: string;
  languageCode?: string;
}

const MOCK_USER: TelegramUser = {
  id: -1,
  username: "demo_user",
  firstName: "Demo",
  lastName: "User",
};

type TelegramWindowGlobal = {
  Telegram?: {
    WebApp?: {
      initData: string;
    };
  };
};

function getTelegramGlobal(): TelegramWindowGlobal {
  if (typeof window === "undefined") return {};
  return window as unknown as TelegramWindowGlobal;
}

export function isTelegramWebApp(): boolean {
  return !!getTelegramGlobal().Telegram?.WebApp?.initData;
}

export function getTelegramInitData(): string {
  return getTelegramGlobal().Telegram?.WebApp?.initData ?? "";
}

export function parseTelegramUser(): TelegramUser | null {
  const initData = getTelegramInitData();
  if (!initData) return null;

  try {
    const params = new URLSearchParams(initData);
    const userJson = params.get("user");
    if (!userJson) return null;

    const raw = JSON.parse(userJson);
    return {
      id: raw.id,
      username: raw.username,
      firstName: raw.first_name,
      lastName: raw.last_name,
      photoUrl: raw.photo_url,
      languageCode: raw.language_code,
    };
  } catch {
    return null;
  }
}

export function getMockUser(): TelegramUser {
  return MOCK_USER;
}
