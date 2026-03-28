import { Member } from "@/lib/types/member";

export const MOCK_MEMBER: Member = {
  member_code: "FM-8K29Q1",
  telegram_user_id: "",
  wallet_address: "UQDemoWallet123456789",
  status: "supporter",
  total_eur_valid: 12.5,
};

export const TREASURY_WALLET =
  "UQBbSnuUUKB4gKwKAdFJd8JglUoY40dfLCWFr4kr0geOGKm5";

export const TIERS = [
  { min: 1, label: "Sostenitore" },
  { min: 50, label: "Elettore" },
] as const;

export const ROUTES = {
  intro: "/",
  project: "/project",
  partecipazione: "/partecipazione",
  portafoglio: "/portafoglio",
  wallet: "/wallet",
  dashboard: "/dashboard",
  verification: "/verification",
} as const;
