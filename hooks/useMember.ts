"use client";

import { useTelegramUser } from "@/hooks/useTelegramUser";
import { Member, MemberStatus, ParticipationStatus } from "@/lib/types/member";

const MOCK_MEMBER_BASE: Omit<Member, 'telegram_user_id'> = {
  member_code: "FM-8K29Q1",
  wallet_address: "UQDemoWallet123456789",
  total_eur_valid: 12.50,
  status: "supporter",
};

function deriveMemberStatus(member: Member): 'new' | 'pending' | 'active' {
  if (member.total_eur_valid <= 0) return 'new';
  if (member.status === 'invalid') return 'pending';
  return 'active';
}

function deriveParticipationStatus(member: Member): ParticipationStatus {
  if (member.total_eur_valid <= 0) return 'idle';
  if (member.status === 'invalid') return 'pending';
  return 'registered';
}

function computeNextThreshold(member: Member): number | null {
  if (member.total_eur_valid < 1) return 1;
  if (member.total_eur_valid < 50) return 50;
  return null;
}

function checkVoteEligibility(member: Member): boolean {
  return member.status === 'elector' && member.total_eur_valid >= 50;
}

export function useMember() {
  const { user } = useTelegramUser();

  // Wallet custodial is invisible infrastructure — NO WalletContext dependency
  const member: Member = {
    ...MOCK_MEMBER_BASE,
    telegram_user_id: user?.id ? String(user.id) : "",
  };

  return {
    member,
    memberStatus: deriveMemberStatus(member),
    participationStatus: deriveParticipationStatus(member),
    nextThreshold: computeNextThreshold(member),
    isEligibleToVote: checkVoteEligibility(member),
  };
}
