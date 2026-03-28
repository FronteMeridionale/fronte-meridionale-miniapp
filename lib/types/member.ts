export type MemberStatus = 'invalid' | 'supporter' | 'elector';

export type ParticipationStatus = 'idle' | 'pending' | 'registered';

export type Member = {
  member_code: string;
  telegram_user_id: string;
  wallet_address: string; // custodial Telegram (invisible infrastructure)
  total_eur_valid: number;
  status: MemberStatus;
  elector_since?: string;
  can_vote_from?: string;
};

export type AppState = {
  member: Member;
  memberStatus: 'new' | 'pending' | 'active';
  participationStatus: ParticipationStatus;
};
