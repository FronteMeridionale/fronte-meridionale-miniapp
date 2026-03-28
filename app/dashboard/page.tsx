"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ButtonPrimary from "@/components/ButtonPrimary";
import Card from "@/components/Card";
import StatusBadge from "@/components/StatusBadge";
import SectionTitle from "@/components/SectionTitle";
import { ROUTES } from "@/lib/constants";
import { useTelegramUser } from "@/hooks/useTelegramUser";
import { useMember } from "@/hooks/useMember";

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useTelegramUser();
  const { member, nextThreshold } = useMember();

  const displayName = user?.firstName || user?.username || "Membro";
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
                  {member.member_code}
                </p>
              </div>
              <StatusBadge status={member.status} />
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
                €{member.total_eur_valid.toFixed(2)}
              </p>
            </div>

            {nextThreshold && (
              <>
                <div className="h-px bg-white/8" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">
                    Prossima soglia
                  </p>
                  <p className="text-sm text-white/70">
                    €{nextThreshold.min} → {nextThreshold.label}
                  </p>
                </div>
              </>
            )}

            {member.status === "elector" && member.can_vote_from && (
              <>
                <div className="h-px bg-white/8" />
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">
                    Diritto di voto dal
                  </p>
                  <p className="text-sm font-semibold text-violet-300">
                    {new Date(member.can_vote_from).toLocaleDateString("it-IT", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </>
            )}
          </div>
        </Card>

        {/* Participation status */}
        <Card>
          <div className="flex flex-col gap-3">
            <p className="text-xs text-white/40 uppercase tracking-widest">
              Stato partecipazione
            </p>
            <p className="text-sm font-semibold text-white">
              {member.total_eur_valid > 0
                ? "Partecipazione registrata"
                : "Nessuna partecipazione registrata"}
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
          {[
            { min: 1, label: "Sostenitore" },
            { min: 50, label: "Elettore" },
          ].map((tier) => (
            <div
              key={tier.label}
              className="flex-1 rounded-xl bg-white/5 border border-white/8 p-3 text-center"
            >
              <p className="text-lg font-bold text-white">€{tier.min}+</p>
              <p className="text-xs text-white/50 mt-1">{tier.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="flex-1" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ButtonPrimary onClick={() => router.push(ROUTES.verification)}>
            Stato della partecipazione
          </ButtonPrimary>
        </motion.div>
      </div>
    </div>
  );
}
