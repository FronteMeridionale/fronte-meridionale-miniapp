"use client";

import { useTelegramUser } from "@/hooks/useTelegramUser";
import { useWalletContext } from "@/contexts/WalletContext";
import { MOCK_MEMBER, TIERS } from "@/lib/constants";
import { Member, MemberStatus } from "@/lib/types/member";

interface UseMemberResult {
  member: Member;
  memberStatus: MemberStatus;
  participationStatus: "unregistered" | "pending" | "registered";
  nextThreshold: { min: number; label: string } | null;
  isLoading: boolean;
}

export function useMember(): UseMemberResult {
  const { user, isLoading } = useTelegramUser();
  const { address: walletAddress } = useWalletContext();

  const member: Member = {
    ...MOCK_MEMBER,
    telegram_user_id: user?.id ? String(user.id) : MOCK_MEMBER.telegram_user_id,
    wallet_address: walletAddress ?? MOCK_MEMBER.wallet_address,
  };

  const memberStatus: MemberStatus = member.status;

  const nextTier = TIERS.find((t) => t.min > member.total_eur_valid) ?? null;
  const nextThreshold = nextTier ? { min: nextTier.min, label: nextTier.label } : null;

  // In a live integration, 'pending' would be set when a participation event
  // has been submitted but not yet confirmed by the registry.
  const participationStatus: "unregistered" | "pending" | "registered" =
    member.total_eur_valid > 0 ? "registered" : "unregistered";

  return {
    member,
    memberStatus,
    participationStatus,
    nextThreshold,
    isLoading,
  };
}
