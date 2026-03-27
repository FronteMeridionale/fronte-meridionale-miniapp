export const MOCK_MEMBER = {
  member_code: "FM-8K29Q1",
  wallet: "UQDemoWallet123456789",
  status: "sostenitore" as const,
  total_contributions: "€12.50",
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
