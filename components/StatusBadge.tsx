"use client";

const STATUS_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  supporter: {
    bg: "bg-blue-500/20 border-blue-500/30",
    text: "text-blue-300",
    dot: "bg-blue-400",
  },
  elector: {
    bg: "bg-violet-500/20 border-violet-500/30",
    text: "text-violet-300",
    dot: "bg-violet-400",
  },
  invalid: {
    bg: "bg-white/10 border-white/20",
    text: "text-white/50",
    dot: "bg-white/30",
  },
  default: {
    bg: "bg-white/10 border-white/20",
    text: "text-white/70",
    dot: "bg-white/50",
  },
};

const STATUS_LABELS: Record<string, string> = {
  supporter: "Sostenitore",
  elector: "Elettore",
  invalid: "Non registrato",
};

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const key = status.toLowerCase();
  const styles = STATUS_STYLES[key] ?? STATUS_STYLES.default;
  const label = STATUS_LABELS[key] ?? status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <span
      className={`
        inline-flex items-center gap-2 px-3 py-1.5
        rounded-full border text-sm font-medium
        ${styles.bg} ${styles.text}
      `}
    >
      <span className={`w-2 h-2 rounded-full ${styles.dot}`} />
      {label}
    </span>
  );
}
