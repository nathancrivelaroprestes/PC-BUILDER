"use client";

import React from "react";
import Image from "next/image";
import {
  Wrench,
  Activity,
  ShieldCheck,
  Zap,
  Star,
  Quote,
  CheckCircle2,
  Sparkles,
  Award,
} from "lucide-react";

const PILLARS = [
  {
    icon: Wrench,
    title: "Cable Management Cirúrgico & Invisível",
    description:
      "Cada centímetro de cabo é roteado com pentes de fixação em alumínio anodizado e sleeves paracord premium sob medida. O fluxo de ar interno permanece 100% livre e a estética interior é limpa como uma obra de arte.",
    stat: "100% Custom",
    tag: "Estética & Fluxo",
  },
  {
    icon: Activity,
    title: "Bancada de Estresse Térmico de 24 Horas",
    description:
      "Nenhuma máquina sai do hangar NEXUS sem passar por 24 horas contínuas de carga máxima combinada em FurMark, Cinebench R23, Prime95 e MemTest86. Zero thermal throttling e estabilidade garantida.",
    stat: "24h Ininterruptas",
    tag: "Confiabilidade",
  },
  {
    icon: Zap,
    title: "Calibração de Undervolt & Curva de Fans",
    description:
      "Ajustamos manualmente o Curve Optimizer dos processadores Ryzen e a curva de voltagem/frequência das GPUs RTX. O resultado: até 12% mais frames consumindo menos energia e operando abaixo de 24 dB.",
    stat: "-15°C Média",
    tag: "Acústica & Eficiência",
  },
  {
    icon: ShieldCheck,
    title: "Garantia Elite 36 Meses com Coleta Domiciliar",
    description:
      "Se qualquer componente apresentar instabilidade, você conta com suporte direto do engenheiro responsável pela sua montagem e coleta expressa em domicílio sem burocracias ou terceirizações.",
    stat: "3 Anos de Cobertura",
    tag: "Pós-Venda VIP",
  },
];

const REVIEWS = [
  {
    name: "Guilherme 'Ghost' Silveira",
    role: "Criador de Conteúdo & Pro Player",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    rig: "Nexus Apex (RTX 5080 + Ryzen 9800X3D)",
    text: "Mudei de uma montadora comum para a NEXUS e a diferença é absurda. Jogo Warzone em 4K nativo a 200+ FPS enquanto transmito em AV1 para duas plataformas simultâneas. O PC sequer faz barulho. O cable management parece render 3D.",
  },
  {
    name: "Dra. Mariana Fontes",
    role: "Diretora de Arquitetura & CGI na Nexus Studio",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    rig: "Nexus Titan Workstation (RTX 5090 + 96GB DDR5)",
    text: "Trabalhamos com renders pesadíssimos de Unreal Engine 5 e Lumion. Nossos prazos de entrega caíram pela metade. O suporte de engenharia configurou a máquina exatamente para nossos softwares no mesmo dia.",
  },
  {
    name: "Rodrigo 'Kuro' Albuquerque",
    role: "Entusiasta de Hardware & Simulação",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    rig: "Nexus Pulse Custom Loop",
    text: "O cuidado com os detalhes térmicos me surpreendeu. O relatório de calibração que veio com a caixa comprovou as 24h de estresse em Furmark. É o melhor pós-venda de hardware do Brasil com folga.",
  },
];

export function FeaturesAndReviews() {
  return (
    <>
      {/* Technical Pillars Section */}
      <section id="diferenciais" className="py-24 bg-[#09090b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold backdrop-blur-md mb-4">
              <Award className="h-3.5 w-3.5 text-cyan-400" />
              Padrão de Qualidade Aeroespacial
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Os 4 Pilares da <span className="gradient-text">Engenharia NEXUS</span>
            </h2>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Enquanto o mercado adota linhas de montagem rápidas e descuidadas, nós
              tratamos cada computador como uma obra de engenharia de precisão única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-white/10 bg-[#121218]/70 hover:bg-[#161620] backdrop-blur-md p-8 transition-all duration-300 hover:border-cyan-400/40 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                        {p.tag}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-zinc-500">Métrica Validada</span>
                    <span className="font-heading font-black text-sm text-cyan-400">
                      {p.stat}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews & Social Proof Section */}
      <section id="avaliacoes" className="py-24 bg-[#0d0d12] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-400/30 bg-purple-500/10 text-purple-300 text-xs font-semibold backdrop-blur-md mb-4">
              <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
              Comunidade de Pilotos & Criadores
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Aprovado por Quem Vive de <span className="gradient-text">Performance</span>
            </h2>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Mais de 1.400 máquinas montadas e entregues em todo o território nacional
              com índice de satisfação comprovado de 99.4%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((r, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-white/10 bg-[#121218]/60 p-7 flex flex-col justify-between hover:border-purple-400/30 transition-all duration-300 relative group"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-sm text-zinc-300 leading-relaxed italic">
                    "{r.text}"
                  </p>

                  {/* Rig tag */}
                  <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] text-cyan-300 font-medium">
                    <CheckCircle2 className="h-3 w-3 text-cyan-400" />
                    <span>{r.rig}</span>
                  </div>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
                  <Image
                    src={r.avatar}
                    alt={r.name}
                    width={44}
                    height={44}
                    className="rounded-full border border-white/10 object-cover"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-white">
                      {r.name}
                    </h4>
                    <p className="text-xs text-zinc-400">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
