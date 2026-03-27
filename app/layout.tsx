import type { Metadata } from "next";
import "./globals.css";
import TelegramUserProvider from "@/components/providers/TelegramUserProvider";

export const metadata: Metadata = {
  title: "Fronte Meridionale",
  description: "La partecipazione politica diventa reale, verificabile e trasparente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-[#0B0B0F] min-h-screen antialiased">
        <TelegramUserProvider>
          <main className="min-h-screen max-w-md mx-auto relative">
            {children}
          </main>
        </TelegramUserProvider>
      </body>
    </html>
  );
}
