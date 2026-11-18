"use client";

import React, { useState } from "react";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PrebuiltShowcase } from "@/components/PrebuiltShowcase";
import { Configurator } from "@/components/Configurator";
import { FeaturesAndReviews } from "@/components/FeaturesAndReviews";
import { Footer } from "@/components/Footer";
import { AuthModal } from "@/components/auth/AuthModal";
import { SavedBuildsDrawer } from "@/components/SavedBuildsDrawer";
import { QuoteModal } from "@/components/QuoteModal";
import { RigPurpose, RigTier } from "@/types/build";

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMessage, setAuthMessage] = useState<string | undefined>();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteBuildData, setQuoteBuildData] = useState<any>(null);

  // Estados compartilhados do configurador
  const [currentPurpose, setCurrentPurpose] = useState<RigPurpose>("GAMES_4K");
  const [currentTier, setCurrentTier] = useState<RigTier>("ENTHUSIAST");

  const handleOpenAuth = (msg?: string) => {
    setAuthMessage(msg);
    setAuthModalOpen(true);
  };

  const handleOpenQuote = (buildData: any) => {
    setQuoteBuildData(buildData);
    setQuoteModalOpen(true);
  };

  const handleLoadPrebuilt = (purpose: RigPurpose, tier: RigTier) => {
    setCurrentPurpose(purpose);
    setCurrentTier(tier);
  };

  const handleSelectBuildFromDrawer = (build: any) => {
    // Mapeamento de propósito para a chave da matriz se compatível
    if (build.purpose.includes("Games") || build.purpose.includes("GAMES")) {
      setCurrentPurpose("GAMES_4K");
    } else if (build.purpose.includes("Edição") || build.purpose.includes("EDICAO")) {
      setCurrentPurpose("EDICAO_3D");
    } else if (build.purpose.includes("Stream") || build.purpose.includes("STREAM")) {
      setCurrentPurpose("STREAMING_PRO");
    } else {
      setCurrentPurpose("WORKSTATION");
    }

    if (build.tier.includes("Entrada") || build.tier.includes("Core")) {
      setCurrentTier("ENTRADA");
    } else if (build.tier.includes("Extreme") || build.tier.includes("Titan")) {
      setCurrentTier("EXTREME");
    } else {
      setCurrentTier("ENTHUSIAST");
    }

    const configuratorEl = document.getElementById("configurador");
    if (configuratorEl) {
      configuratorEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SessionProvider>
      <div className="relative min-h-screen bg-[#09090b] text-[#FAFAFA] flex flex-col selection:bg-cyan-500/30 selection:text-cyan-400">
        {/* Floating Navbar */}
        <Navbar
          onOpenDrawer={() => setDrawerOpen(true)}
          onOpenAuthModal={() => handleOpenAuth()}
        />

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection />

          {/* Prebuilt Signatures Bento Grid */}
          <PrebuiltShowcase onLoadBuild={handleLoadPrebuilt} />

          {/* Interactive Configurator connected to Neon Database */}
          <Configurator
            onOpenAuthModal={handleOpenAuth}
            onOpenQuoteModal={handleOpenQuote}
            onOpenDrawer={() => setDrawerOpen(true)}
            selectedPurpose={currentPurpose}
            selectedTier={currentTier}
          />

          {/* 4 Technical Pillars & Social Proof Reviews */}
          <FeaturesAndReviews />
        </main>

        {/* Complete Footer */}
        <Footer />

        {/* Modals & Slide-over Drawer */}
        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          message={authMessage}
        />

        <SavedBuildsDrawer
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onSelectBuild={handleSelectBuildFromDrawer}
          onRequestQuoteForBuild={handleOpenQuote}
        />

        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          buildData={quoteBuildData}
        />
      </div>
    </SessionProvider>
  );
}
