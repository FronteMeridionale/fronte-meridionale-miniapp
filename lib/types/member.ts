export type MemberStatus = 'invalid' | 'supporter' | 'elector';

export type Member = {
  member_code: string;
  telegram_user_id: string;
  wallet_address: string;
  total_eur_valid: number;
  status: MemberStatus;
  elector_since?: string;
  can_vote_from?: string;
};
