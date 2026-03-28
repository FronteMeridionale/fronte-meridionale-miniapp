"use client";

import { motion } from "framer-motion";
import Card from "@/components/Card";
import StatusBadge from "@/components/StatusBadge";
import SectionTitle from "@/components/SectionTitle";
import { TIERS } from "@/lib/constants";
import { useMember } from "@/hooks/useMember";
import { useTelegramUser } from "@/hooks/useTelegramUser";

export default function DashboardPage() {
  const { member, isLoading } = useMember();
  const { user } = useTelegramUser();

  const displayName = user?.firstName || user?.username || "Utente";
  const displayId = user?.id && user.id > 0 ? `ID: ${user.id}` : null;

  return (
    <div className="relative flex flex-col min-h-screen px-6 py-12 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-violet-600/15 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col gap-6 flex-1">
        <SectionTitle
          title="Il tuo profilo"
          subtitle={`Ciao, ${displayName}! Membro verificato del Fronte Meridionale`}
        />

        {/* Member info card */}
        <Card>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-white/40 uppercase tracking-widest mb-1">
                  Codice membro
                </p>
                <p className="font-mono text-xl font-bold text-white">
                  {isLoading ? "…" : member?.member_code ?? "—"}
                </p>
              </div>
              {member && <StatusBadge status={member.status} />}
            </div>

            <div className="h-px bg-white/8" />

            {(user?.username || displayId) && (
              <>
                <div>
                  {user?.username && (
                    <>
                      <p className="text-xs text-white/40 uppercase tracking-widest mb-1">
                        Username Telegram
                      </p>
                      <p className="font-mono text-sm text-blue-300">
                        @{user.username}
                      </p>
                    </>
                  )}
                  {displayId && (
                    <p className="text-xs text-white/30 mt-1">{displayId}</p>
                  )}
                </div>
                <div className="h-px bg-white/8" />
              </>
            )}

            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">
                Contributi totali
              </p>
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                {isLoading ? "…" : member ? `€${member.total_eur_valid.toFixed(2)}` : "€0.00"}
              </p>
            </div>
          </div>
        </Card>

        {/* Participation status */}
        <Card>
          <div className="flex flex-col gap-3">
            <p className="text-xs text-white/40 uppercase tracking-widest">
              Stato partecipazione
            </p>
            <p className="text-sm font-semibold text-white">
              {isLoading ? "Caricamento…" : member ? "Registrazione completata" : "Non ancora registrato"}
            </p>
          </div>
        </Card>

        {/* Tiers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-3"
        >
          {TIERS.map((tier) => (
            <div
              key={tier.label}
              className="flex-1 rounded-xl bg-white/5 border border-white/8 p-3 text-center"
            >
              <p className="text-lg font-bold text-white">€{tier.min}+</p>
              <p className="text-xs text-white/50 mt-1">{tier.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

