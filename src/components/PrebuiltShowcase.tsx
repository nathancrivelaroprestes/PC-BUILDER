"use client";

import React from "react";
import { PREBUILT_RIGS } from "@/data/configuratorData";
import { formatBRL } from "@/lib/utils";
import {
  Cpu,
  Layers,
  Zap,
  Gauge,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Flame,
  ShieldCheck,
} from "lucide-react";
import { RigPurpose, RigTier } from "@/types/build";

interface PrebuiltShowcaseProps {
  onLoadBuild: (purpose: RigPurpose, tier: RigTier) => void;
}

export function PrebuiltShowcase({ onLoadBuild }: PrebuiltShowcaseProps) {
  const handleLoad = (purpose: RigPurpose, tier: RigTier) => {
    onLoadBuild(purpose, tier);
    const element = document.getElementById("configurador");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="modelos" className="py-24 bg-[#0d0d12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold backdrop-blur-md mb-4">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            Engenharia Assinada NEXUS
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Máquinas de Assinatura <span className="gradient-text">Prontas Para o Combate</span>
          </h2>
          <p className="mt-4 text-base text-zinc-400 leading-relaxed">
            Projetadas com os componentes mais premiados da indústria global.
            Montadas em lote exclusivo, rigorosamente validadas em bancada de
            estresse térmico.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Nexus Pulse (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-[#121218]/80 backdrop-blur-xl p-7 flex flex-col justify-between hover:border-cyan-400/40 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {PREBUILT_RIGS[0].badge}
                </span>
                <span className="text-xs text-zinc-500 font-mono">GEN 2026</span>
              </div>

              <h3 className="font-heading text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                {PREBUILT_RIGS[0].name}
              </h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                {PREBUILT_RIGS[0].tagline}
              </p>

              {/* Price */}
              <div className="mt-5 pb-5 border-b border-white/10">
                <p className="text-[11px] text-zinc-500">Valor à vista no PIX</p>
                <p className="font-heading font-black text-3xl text-white">
                  {formatBRL(PREBUILT_RIGS[0].price * 0.88)}
                </p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  ou {formatBRL(PREBUILT_RIGS[0].price)} em 12x sem juros
                </p>
              </div>

              {/* Specs */}
              <div className="mt-5 space-y-3 text-xs text-zinc-300">
                <div className="flex items-start gap-2.5">
                  <Cpu className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{PREBUILT_RIGS[0].specs.cpu}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Zap className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{PREBUILT_RIGS[0].specs.gpu}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Layers className="h-4 w-4 text-zinc-400 shrink-0 mt-0.5" />
                  <span>{PREBUILT_RIGS[0].specs.ram}</span>
                </div>
              </div>

              {/* Benchmark pill */}
              <div className="mt-6 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-cyan-400" />
                  <span className="text-xs text-cyan-200">{PREBUILT_RIGS[0].fpsDisplay.title}</span>
                </div>
                <span className="font-heading font-bold text-xs text-cyan-300">
                  {PREBUILT_RIGS[0].fpsDisplay.fps}
                </span>
              </div>
            </div>

            <button
              onClick={() => handleLoad(PREBUILT_RIGS[0].purpose, PREBUILT_RIGS[0].tier)}
              className="mt-8 w-full py-3 rounded-xl bg-white/5 border border-white/15 hover:bg-cyan-500/10 hover:border-cyan-400/50 text-white font-heading font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Carregar no Configurador</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Card 2: Nexus Apex (Flagship - 8 cols Featured) */}
          <div className="lg:col-span-8 rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-[#151522] via-[#0f0f18] to-[#09090e] p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-cyan-500/10 group">
            {/* Ambient featured glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 text-white shadow-md">
                  ★ {PREBUILT_RIGS[1].badge}
                </span>
                <span className="text-xs text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Flame className="h-3.5 w-3.5" />
                  Pronta Entrega com Despacho Imediato
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-7">
                  <h3 className="font-heading text-3xl sm:text-4xl font-black text-white">
                    {PREBUILT_RIGS[1].name}
                  </h3>
                  <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                    {PREBUILT_RIGS[1].tagline}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {PREBUILT_RIGS[1].highlightFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5 p-5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
                  <p className="text-xs text-zinc-400">Valor à vista no PIX</p>
                  <p className="font-heading font-black text-3xl sm:text-4xl text-cyan-300 mt-1">
                    {formatBRL(PREBUILT_RIGS[1].price * 0.88)}
                  </p>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    ou 12x de {formatBRL(PREBUILT_RIGS[1].price / 12)}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/10 text-xs space-y-1.5 text-zinc-300">
                    <p className="font-bold text-white flex items-center gap-1">
                      <Cpu className="h-3.5 w-3.5 text-cyan-400" />
                      {PREBUILT_RIGS[1].specs.cpu}
                    </p>
                    <p className="font-bold text-purple-300 flex items-center gap-1">
                      <Zap className="h-3.5 w-3.5 text-purple-400" />
                      {PREBUILT_RIGS[1].specs.gpu}
                    </p>
                    <p className="text-zinc-400">{PREBUILT_RIGS[1].specs.ram}</p>
                    <p className="text-zinc-400">{PREBUILT_RIGS[1].specs.storage}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Gauge className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase font-semibold">
                    Benchmark Referência 4K
                  </p>
                  <p className="font-heading font-black text-base text-white">
                    {PREBUILT_RIGS[1].fpsDisplay.fps}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleLoad(PREBUILT_RIGS[1].purpose, PREBUILT_RIGS[1].tier)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-purple-600 text-white font-heading font-bold text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Carregar no Configurador</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Card 3: Nexus Titan (12 cols full width Extreme Overkill) */}
          <div className="lg:col-span-12 rounded-3xl border border-purple-500/40 bg-gradient-to-r from-[#12101e] via-[#101018] to-[#0c0c14] p-8 lg:p-10 relative overflow-hidden shadow-2xl group">
            {/* Ambient Purple / Gold Glow */}
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[110px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    ⚡ {PREBUILT_RIGS[2].badge}
                  </span>
                  <span className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Custom Liquid Loop EKWB
                  </span>
                </div>

                <h3 className="font-heading text-3xl sm:text-4xl font-black text-white">
                  {PREBUILT_RIGS[2].name}
                </h3>
                <p className="text-sm text-zinc-300 mt-2 max-w-2xl leading-relaxed">
                  {PREBUILT_RIGS[2].tagline} Hardware inatingível para mortais:
                  GeForce RTX 5090 32GB com 21.760 núcleos CUDA, refrigeração líquida
                  artesanal com tubos rígidos de acrílico cristalino e cabos trançados
                  à mão.
                </p>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] text-zinc-500 block">GPU</span>
                    <strong className="text-white text-xs">{PREBUILT_RIGS[2].specs.gpu}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] text-zinc-500 block">CPU</span>
                    <strong className="text-white text-xs">{PREBUILT_RIGS[2].specs.cpu}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] text-zinc-500 block">RAM</span>
                    <strong className="text-white text-xs">{PREBUILT_RIGS[2].specs.ram}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] text-zinc-500 block">SSD NVMe</span>
                    <strong className="text-white text-xs">{PREBUILT_RIGS[2].specs.storage}</strong>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-black/50 border border-white/10 text-center lg:text-right">
                <p className="text-xs text-zinc-400">Investimento Total</p>
                <p className="font-heading font-black text-3xl sm:text-4xl text-purple-300 mt-1">
                  {formatBRL(PREBUILT_RIGS[2].price * 0.88)}
                </p>
                <p className="text-xs text-zinc-500 mt-0.5">
                  à vista no PIX com 12% OFF
                </p>

                <button
                  onClick={() => handleLoad(PREBUILT_RIGS[2].purpose, PREBUILT_RIGS[2].tier)}
                  className="mt-6 w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-heading font-bold text-xs shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Carregar no Configurador</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
