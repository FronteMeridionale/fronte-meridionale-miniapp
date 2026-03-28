// Member type — independent of TON Connect / WalletContext.
// All fields come from the backend registry, not from connect logic.
export type MemberStatus = 'invalid' | 'supporter' | 'elector';

export type Member = {
  member_code: string;          // from backend registry
  telegram_user_id: string;     // from useTelegramUser()
  wallet_address: string;       // from backend registry (custodial Telegram)
  total_eur_valid: number;      // from backend registry
  status: MemberStatus;         // from backend registry
  elector_since?: string;       // from backend registry (ISO 8601)
  can_vote_from?: string;       // from backend registry (ISO 8601)
};
