"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Flame,
  Activity,
  Zap,
  CheckCircle2,
  Gauge,
  ThermometerSnowflake,
} from "lucide-react";

export function HeroSection() {
  const [activeLedColor, setActiveLedColor] = useState<"cyan" | "purple" | "amber" | "emerald">("cyan");

  const ledStyles = {
    cyan: {
      glow: "rgba(0, 240, 255, 0.45)",
      border: "rgba(0, 240, 255, 0.6)",
      text: "text-cyan-400",
      accent: "#00F0FF",
      name: "Cyber Cyan",
    },
    purple: {
      glow: "rgba(139, 92, 246, 0.45)",
      border: "rgba(139, 92, 246, 0.6)",
      text: "text-purple-400",
      accent: "#8B5CF6",
      name: "Neon Ultraviolet",
    },
    amber: {
      glow: "rgba(245, 158, 11, 0.45)",
      border: "rgba(245, 158, 11, 0.6)",
      text: "text-amber-400",
      accent: "#F59E0B",
      name: "Solar Flare",
    },
    emerald: {
      glow: "rgba(16, 185, 129, 0.45)",
      border: "rgba(16, 185, 129, 0.6)",
      text: "text-emerald-400",
      accent: "#10B981",
      name: "Matrix Toxic",
    },
  };

  const currentLed = ledStyles[activeLedColor];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient mesh and glow */}
      <div className="absolute inset-0 bg-[#09090B] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-purple-600/15 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-cyan-600/10 blur-[120px] pointer-events-none rounded-full" />
      
      {/* Subtle tech grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold backdrop-blur-md shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              <span>Linha 2026: Suporte Completo à Série RTX 50 e Ryzen 9000</span>
            </div>

            {/* Main title */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Engenharia Extrema. <br />
              <span className="gradient-text">Performance Sem Limites.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Não vendemos apenas computadores, forjamos instrumentos de vitória.
              Cada máquina NEXUS é montada artesanalmente com{" "}
              <strong className="text-zinc-200 font-semibold">
                cable management cirúrgico invisível
              </strong>
              , refrigeração líquida com curvas térmicas manuais e submetida a{" "}
              <strong className="text-zinc-200 font-semibold">
                24 horas ininterruptas de teste de estresse
              </strong>{" "}
              antes da entrega.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#configurador"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-bold text-sm text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Personalizar Agora</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#modelos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-heading font-semibold text-sm text-zinc-300 bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all"
              >
                <Cpu className="h-4 w-4 text-purple-400" />
                <span>Ver Máquinas Prontas</span>
              </a>
            </div>

            {/* Key trust indicators */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/10 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <p className="font-heading font-bold text-lg sm:text-xl text-white flex items-center gap-1">
                  36 <span className="text-cyan-400 text-xs font-sans">MESES</span>
                </p>
                <p className="text-[11px] text-zinc-400">Garantia total com reposição expressa</p>
              </div>

              <div>
                <p className="font-heading font-bold text-lg sm:text-xl text-white flex items-center gap-1">
                  24h <span className="text-purple-400 text-xs font-sans">STRESS</span>
                </p>
                <p className="text-[11px] text-zinc-400">Testes térmicos contínuos em bancada</p>
              </div>

              <div>
                <p className="font-heading font-bold text-lg sm:text-xl text-white flex items-center gap-1">
                  100% <span className="text-emerald-400 text-xs font-sans">PLUG&PLAY</span>
                </p>
                <p className="text-[11px] text-zinc-400">BIOS calibrada, Windows e drivers prontos</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Rig Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Rig Chassis Simulation Card */}
            <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-[#16161e]/90 to-[#0c0c10]/95 p-6 backdrop-blur-2xl shadow-2xl overflow-hidden">
              {/* Dynamic RGB lighting bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 shadow-lg"
                style={{
                  backgroundColor: currentLed.accent,
                  boxShadow: `0 0 20px 4px ${currentLed.glow}`,
                }}
              />

              {/* Rig Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: currentLed.accent }}
                    />
                    <span
                      className="relative inline-flex rounded-full h-3 w-3"
                      style={{ backgroundColor: currentLed.accent }}
                    />
                  </span>
                  <span className="font-heading font-bold text-xs tracking-wider text-white uppercase">
                    Telemetria NEXUS RIG V3
                  </span>
                </div>

                {/* LED Switcher */}
                <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-full border border-white/5">
                  {(["cyan", "purple", "amber", "emerald"] as const).map((color) => (
                    <button
                      key={color}
                      onClick={() => setActiveLedColor(color)}
                      className={`h-4 w-4 rounded-full transition-transform ${
                        activeLedColor === color
                          ? "scale-125 ring-2 ring-white/50"
                          : "opacity-60 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: ledStyles[color].accent }}
                      title={`Iluminação: ${ledStyles[color].name}`}
                    />
                  ))}
                </div>
              </div>

              {/* Visual Rig Graphic / Glass Case Interior */}
              <div className="relative my-6 h-72 sm:h-80 w-full rounded-2xl bg-gradient-to-b from-black/80 via-[#0e0e14] to-black/90 border border-white/10 overflow-hidden flex flex-col justify-between p-5">
                {/* Internal LED Accent Lines */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none transition-all duration-500"
                  style={{
                    background: `radial-gradient(circle at 60% 40%, ${currentLed.glow} 0%, transparent 70%)`,
                  }}
                />

                {/* Top components simulation */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 backdrop-blur-sm">
                    <Cpu className="h-4 w-4 text-cyan-400" />
                    <div>
                      <p className="text-[10px] text-zinc-400 font-medium">PROCESSADOR</p>
                      <p className="text-xs font-heading font-bold text-white">Ryzen 7 9800X3D</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 backdrop-blur-sm">
                    <ThermometerSnowflake className="h-4 w-4 text-emerald-400" />
                    <div>
                      <p className="text-[10px] text-zinc-400 font-medium">TEMPERATURA</p>
                      <p className="text-xs font-heading font-bold text-emerald-400">54°C Sob Carga</p>
                    </div>
                  </div>
                </div>

                {/* Center: GPU Visual Block */}
                <div className="relative z-10 my-auto p-4 rounded-xl bg-gradient-to-r from-black/80 to-zinc-900/90 border border-white/15 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <Zap className="h-3.5 w-3.5 text-cyan-400" />
                        <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                          GeForce RTX™ 5080
                        </span>
                      </div>
                      <p className="font-heading font-black text-lg text-white">
                        16GB GDDR7 • Blackwell
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-zinc-400 block">PCIe Gen 5.0</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                        ATIVO
                      </span>
                    </div>
                  </div>

                  {/* Flow light animation */}
                  <div className="mt-3 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 animate-pulse"
                      style={{
                        width: "82%",
                        backgroundColor: currentLed.accent,
                      }}
                    />
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="grid grid-cols-2 gap-3 z-10">
                  <div className="px-3 py-2 rounded-lg bg-black/60 border border-white/10 backdrop-blur-sm">
                    <p className="text-[10px] text-zinc-400">MEMÓRIA RAM</p>
                    <p className="text-xs font-heading font-bold text-white">64GB DDR5 6400MHz CL30</p>
                  </div>
                  <div className="px-3 py-2 rounded-lg bg-black/60 border border-white/10 backdrop-blur-sm">
                    <p className="text-[10px] text-zinc-400">ARMAZENAMENTO</p>
                    <p className="text-xs font-heading font-bold text-white">4TB Gen5 (12.400 MB/s)</p>
                  </div>
                </div>
              </div>

              {/* Floating Benchmark Badges (Framer Motion) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 rounded-2xl border border-cyan-400/40 bg-[#121218]/95 p-3 shadow-xl backdrop-blur-xl z-20 hidden sm:flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                  <Gauge className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase font-semibold">
                    Cyberpunk 2077 4K
                  </p>
                  <p className="font-heading font-black text-sm text-cyan-300">
                    165 FPS Médio
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 rounded-2xl border border-purple-500/40 bg-[#121218]/95 p-3 shadow-xl backdrop-blur-xl z-20 hidden sm:flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase font-semibold">
                    Ruído Acústico
                  </p>
                  <p className="font-heading font-black text-sm text-purple-300">
                    22.4 dB (Inaudível)
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
