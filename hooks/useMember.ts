"use client";

// useMember — depends ONLY on useTelegramUser(), NOT on useWalletContext().
// Member data comes from the backend registry.
// wallet_address is the custodial Telegram wallet assigned by the backend, never from connect logic.

import { useTelegramUser } from "@/hooks/useTelegramUser";
import { Member } from "@/lib/types/member";
import { MOCK_MEMBER } from "@/lib/constants";

interface UseMemberResult {
  member: Member | null;
  isLoading: boolean;
}

export function useMember(): UseMemberResult {
  const { user, isLoading } = useTelegramUser();

  if (isLoading || !user) {
    return { member: null, isLoading };
  }

  // In production this data would come from a backend registry API call.
  // wallet_address is the custodial Telegram wallet, not derived from any connect logic.
  const member: Member = {
    member_code: MOCK_MEMBER.member_code,
    telegram_user_id: String(user.id),
    wallet_address: MOCK_MEMBER.wallet,   // backend registry (custodial Telegram)
    total_eur_valid: MOCK_MEMBER.total_eur_valid,
    status: MOCK_MEMBER.status,
  };

  return { member, isLoading: false };
}
