"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad2,
  Layers,
  Video,
  Cpu,
  CheckCircle2,
  BookmarkPlus,
  Send,
  Zap,
  HardDrive,
  Fan,
  Box,
  Flame,
  Gauge,
  Sparkles,
  ArrowRight,
  TrendingUp,
  CreditCard,
  QrCode,
  ShieldCheck,
  Edit3,
} from "lucide-react";
import {
  CONFIGURATOR_MATRIX,
  PURPOSE_LABELS,
  TIER_LABELS,
} from "@/data/configuratorData";
import { RigPurpose, RigTier } from "@/types/build";
import { formatBRL } from "@/lib/utils";
import { saveBuild } from "@/actions/builds";
import confetti from "canvas-confetti";

interface ConfiguratorProps {
  onOpenAuthModal: (msg?: string) => void;
  onOpenQuoteModal: (buildData: any) => void;
  onOpenDrawer: () => void;
  selectedPurpose?: RigPurpose;
  selectedTier?: RigTier;
}

export function Configurator({
  onOpenAuthModal,
  onOpenQuoteModal,
  onOpenDrawer,
  selectedPurpose = "GAMES_4K",
  selectedTier = "ENTHUSIAST",
}: ConfiguratorProps) {
  const { data: session } = useSession();

  const [purpose, setPurpose] = useState<RigPurpose>(selectedPurpose);
  const [tier, setTier] = useState<RigTier>(selectedTier);
  const [customName, setCustomName] = useState("Nexus Custom Rig");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState<string | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const currentSpecs = CONFIGURATOR_MATRIX[purpose][tier];
  const currentPurposeInfo = PURPOSE_LABELS[purpose];
  const currentTierInfo = TIER_LABELS[tier];

  // Cálculo de desconto à vista e parcelamento
  const pixPrice = currentSpecs.totalPrice * 0.88; // 12% OFF no PIX
  const installmentPrice = currentSpecs.totalPrice / 12;

  const handleSaveBuild = async () => {
    if (!session?.user) {
      onOpenAuthModal(
        "Faça login com sua conta Google para salvar sua configuração no banco Neon."
      );
      return;
    }

    setIsSaving(true);
    setSaveSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await saveBuild({
        name: customName.trim() || `Nexus ${currentTierInfo.title}`,
        purpose: currentPurposeInfo.title,
        tier: currentTierInfo.title,
        cpu: currentSpecs.cpu,
        gpu: currentSpecs.gpu,
        ram: currentSpecs.ram,
        storage: currentSpecs.storage,
        totalPrice: currentSpecs.totalPrice,
      });

      if (res.success) {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#00F0FF", "#8B5CF6", "#10B981"],
        });
        setSaveSuccessMessage(
          `Configuração salva com sucesso no banco Neon! Você pode visualizá-la no painel "Minhas Builds".`
        );
      } else {
        setErrorMessage(res.message || "Erro ao salvar no banco Neon.");
      }
    } catch {
      setErrorMessage("Erro inesperado ao salvar. Tente novamente.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleRequestQuote = () => {
    if (!session?.user) {
      onOpenAuthModal(
        "Faça login com sua conta Google antes de solicitar um orçamento oficial."
      );
      return;
    }

    onOpenQuoteModal({
      name: customName || `Nexus ${currentTierInfo.title}`,
      cpu: currentSpecs.cpu,
      gpu: currentSpecs.gpu,
      ram: currentSpecs.ram,
      storage: currentSpecs.storage,
      totalPrice: currentSpecs.totalPrice,
    });
  };

  const getPurposeIcon = (p: RigPurpose) => {
    switch (p) {
      case "GAMES_4K":
        return <Gamepad2 className="h-5 w-5" />;
      case "EDICAO_3D":
        return <Layers className="h-5 w-5" />;
      case "STREAMING_PRO":
        return <Video className="h-5 w-5" />;
      case "WORKSTATION":
        return <Cpu className="h-5 w-5" />;
    }
  };

  return (
    <section id="configurador" className="relative py-24 bg-[#09090b] border-t border-white/5">
      {/* Background glow lines */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold backdrop-blur-md mb-4">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            Configurador de Próxima Geração Conectado ao Neon
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Forje Sua Máquina <span className="gradient-text">Sob Medida</span>
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            Selecione seu objetivo principal e o nível de investimento desejado.
            Nossos algoritmos equilibram os componentes para eliminar qualquer
            gargalo de performance (zero bottleneck).
          </p>
        </div>

        {/* Step 1: Escolha do Objetivo */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-400 font-heading font-bold text-xs border border-cyan-400/30">
              1
            </span>
            <h3 className="font-heading font-bold text-lg text-white">
              Qual é o seu objetivo principal?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(Object.keys(PURPOSE_LABELS) as RigPurpose[]).map((key) => {
              const item = PURPOSE_LABELS[key];
              const isSelected = purpose === key;
              return (
                <button
                  key={key}
                  onClick={() => setPurpose(key)}
                  className={`group relative text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-cyan-400/80 bg-gradient-to-b from-cyan-950/30 to-[#121218] shadow-lg shadow-cyan-500/10 scale-[1.01]"
                      : "border-white/10 bg-[#121216]/70 hover:border-white/20 hover:bg-[#16161c]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        isSelected
                          ? "bg-cyan-400 text-black shadow-md shadow-cyan-400/50"
                          : "bg-white/5 text-zinc-400 group-hover:text-white"
                      }`}
                    >
                      {getPurposeIcon(key)}
                    </div>
                    {isSelected && (
                      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    )}
                  </div>
                  <h4
                    className={`font-heading font-bold text-base transition-colors ${
                      isSelected ? "text-cyan-300" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    {item.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Nível de Investimento (Tier) */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-500/20 text-purple-400 font-heading font-bold text-xs border border-purple-400/30">
              2
            </span>
            <h3 className="font-heading font-bold text-lg text-white">
              Selecione o nível de performance e orçamento:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {(Object.keys(TIER_LABELS) as RigTier[]).map((key) => {
              const item = TIER_LABELS[key];
              const isSelected = tier === key;
              const tierSpec = CONFIGURATOR_MATRIX[purpose][key];

              return (
                <button
                  key={key}
                  onClick={() => setTier(key)}
                  className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-purple-500/80 bg-gradient-to-b from-purple-950/30 to-[#121218] shadow-xl shadow-purple-500/15 scale-[1.02]"
                      : "border-white/10 bg-[#121216]/70 hover:border-white/20 hover:bg-[#16161c]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                          : "bg-white/5 text-zinc-400"
                      }`}
                    >
                      {item.badge}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="h-5 w-5 text-purple-400" />
                    )}
                  </div>

                  <h4
                    className={`font-heading font-extrabold text-xl ${
                      isSelected ? "text-purple-300" : "text-white"
                    }`}
                  >
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/5 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 block">
                        A partir de
                      </span>
                      <span className="font-heading font-black text-xl text-white">
                        {formatBRL(tierSpec.totalPrice)}
                      </span>
                    </div>
                    <span className="text-xs text-cyan-400 font-semibold group-hover:underline">
                      Ver Especificações &rarr;
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Hardware Breakdown & Real-Time Telemetry Screen */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#13131a] to-[#0c0c10] p-6 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400" />

          {/* Header of Configuration Card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3">
                {isEditingName ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={customName}
                      onChange={(e) => setCustomName(e.target.value)}
                      onBlur={() => setIsEditingName(false)}
                      autoFocus
                      className="rounded-lg bg-black/60 border border-cyan-400/60 px-3 py-1 font-heading text-xl font-bold text-white focus:outline-none"
                    />
                    <button
                      onClick={() => setIsEditingName(false)}
                      className="text-xs text-cyan-400 hover:underline"
                    >
                      OK
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 group/edit">
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                      {customName}
                    </h3>
                    <button
                      onClick={() => setIsEditingName(true)}
                      className="p-1 rounded-md text-zinc-500 hover:text-cyan-400 transition-colors"
                      title="Editar apelido da build"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                  </div>
                )}
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  {currentTierInfo.badge}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1 flex items-center gap-2">
                <span>Perfil: {currentPurposeInfo.title}</span>
                <span>•</span>
                <span className="text-emerald-400">Garantia 36 Meses Ativa</span>
              </p>
            </div>

            {/* Price block */}
            <div className="text-left md:text-right">
              <div className="flex items-baseline md:justify-end gap-2">
                <span className="font-heading font-black text-3xl sm:text-4xl text-white">
                  {formatBRL(currentSpecs.totalPrice)}
                </span>
              </div>
              <div className="flex flex-wrap items-center md:justify-end gap-2 mt-1">
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <QrCode className="h-3.5 w-3.5" />
                  {formatBRL(pixPrice)} no PIX (12% OFF)
                </span>
                <span className="text-xs text-zinc-500">ou 12x de {formatBRL(installmentPrice)} sem juros</span>
              </div>
            </div>
          </div>

          {/* Feedback messages */}
          {saveSuccessMessage && (
            <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span>{saveSuccessMessage}</span>
              </div>
              <button
                onClick={onOpenDrawer}
                className="underline font-semibold hover:text-emerald-200 ml-4 shrink-0"
              >
                Abrir Minhas Builds
              </button>
            </div>
          )}

          {errorMessage && (
            <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
              <Flame className="h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Hardware Components Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* CPU */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <Cpu className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                    Processador Central
                  </span>
                  <span className="text-[10px] text-cyan-400 font-semibold">TDP Otimizado</span>
                </div>
                <h5 className="font-heading font-bold text-white text-sm sm:text-base mt-0.5">
                  {currentSpecs.cpu}
                </h5>
              </div>
            </div>

            {/* GPU */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-400/30 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                    Placa de Vídeo (GPU)
                  </span>
                  <span className="text-[10px] text-purple-400 font-semibold">DLSS 3.5 / 4.0 Ready</span>
                </div>
                <h5 className="font-heading font-bold text-white text-sm sm:text-base mt-0.5">
                  {currentSpecs.gpu}
                </h5>
              </div>
            </div>

            {/* RAM */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 text-zinc-300 border border-white/10 shrink-0">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                  Memória RAM de Alta Velocidade
                </span>
                <h5 className="font-heading font-bold text-white text-sm sm:text-base mt-0.5">
                  {currentSpecs.ram}
                </h5>
              </div>
            </div>

            {/* Storage */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 text-zinc-300 border border-white/10 shrink-0">
                <HardDrive className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                  Armazenamento Primário NVMe
                </span>
                <h5 className="font-heading font-bold text-white text-sm sm:text-base mt-0.5">
                  {currentSpecs.storage}
                </h5>
              </div>
            </div>

            {/* Motherboard & Cooling */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 text-zinc-300 border border-white/10 shrink-0">
                <Fan className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                  Placa-mãe & Resfriamento
                </span>
                <h5 className="font-heading font-bold text-white text-sm sm:text-base mt-0.5">
                  {currentSpecs.cooling}
                </h5>
                <p className="text-xs text-zinc-400 mt-0.5">{currentSpecs.motherboard}</p>
              </div>
            </div>

            {/* Case & PSU */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/5 text-zinc-300 border border-white/10 shrink-0">
                <Box className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                  Gabinete & Fonte de Alimentação
                </span>
                <h5 className="font-heading font-bold text-white text-sm sm:text-base mt-0.5">
                  {currentSpecs.case}
                </h5>
                <p className="text-xs text-zinc-400 mt-0.5">{currentSpecs.psu}</p>
              </div>
            </div>
          </div>

          {/* Performance Estimate & FPS Meter */}
          <div className="mt-8 p-6 rounded-2xl bg-black/40 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Gauge className="h-5 w-5 text-cyan-400" />
                <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wide">
                  Telemetria Estimada de Performance
                </h4>
              </div>
              <span className="text-xs text-zinc-400">Baseado em testes reais de bancada</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {currentSpecs.estimatedFps.map((bench, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-zinc-400 truncate">{bench.game}</p>
                  <p className="font-heading font-black text-xl text-cyan-300 mt-1">
                    {bench.fps} <span className="text-xs font-normal text-zinc-500">{typeof bench.fps === 'number' && bench.fps > 20 ? 'FPS' : 'Pts'}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons: Save to Neon DB & Request Quote */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-4">
            <button
              onClick={handleSaveBuild}
              disabled={isSaving}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-cyan-400/50 text-white font-heading font-semibold text-sm transition-all active:scale-[0.98] cursor-pointer"
            >
              {isSaving ? (
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <BookmarkPlus className="h-4 w-4 text-cyan-400" />
                  <span>Salvar Build na Minha Conta</span>
                </>
              )}
            </button>

            <button
              onClick={handleRequestQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-purple-600 text-white font-heading font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:opacity-95 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>Solicitar Orçamento Oficial</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
