import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXUS RIGS | Engenharia Extrema. Performance Sem Limites.",
  description:
    "Montagem de computadores personalizados e PCs de alta performance de última geração. Cable management invisível, water cooling custom e testes de estresse 24h.",
  keywords: [
    "PC Gamer",
    "Nexus Rigs",
    "Custom PC",
    "RTX 5090",
    "Workstation",
    "High Performance",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#09090B] text-[#FAFAFA] font-sans antialiased selection:bg-[#00F0FF]/30 selection:text-[#00F0FF] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
