"use client";

import React from "react";
import {
  Zap,
  ShieldCheck,
  Truck,
  PhoneCall,
  Mail,
  MapPin,
  Award,
  Lock,
  Globe,
  Share2,
  Tv,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#070709] border-t border-white/10 pt-16 pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-400/20">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h5 className="font-heading font-bold text-sm text-white">Garantia 36 Meses</h5>
              <p className="text-xs text-zinc-500">Reposição expressa em domicílio</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/20">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <h5 className="font-heading font-bold text-sm text-white">Frete Blindado Segurado</h5>
              <p className="text-xs text-zinc-500">Caixas de madeira sob medida com espuma Instapak</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <h5 className="font-heading font-bold text-sm text-white">Pagamento 100% Seguro</h5>
              <p className="text-xs text-zinc-500">12% OFF no PIX ou até 12x no cartão</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <h5 className="font-heading font-bold text-sm text-white">Certificado Individual</h5>
              <p className="text-xs text-zinc-500">Relatório térmico assinado pelo engenheiro</p>
            </div>
          </div>
        </div>

        {/* Links & Brand Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px]">
                <div className="h-full w-full bg-[#09090b] rounded-[11px] flex items-center justify-center">
                  <Zap className="h-4 w-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-heading font-extrabold text-xl text-white">
                NEXUS <span className="gradient-text">RIGS</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Ateliê de alta engenharia de computadores no Brasil. Projetamos,
              calibramos e construímos máquinas que redefinem o conceito de
              performance gráfica, estabilidade térmica e arte funcional.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                aria-label="Instagram"
              >
                <Share2 className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                aria-label="Canal de Vídeos"
              >
                <Tv className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                aria-label="Portal Global"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h6 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Navegação
            </h6>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#modelos" className="hover:text-cyan-400 transition-colors">
                  Modelos Prontos
                </a>
              </li>
              <li>
                <a href="#configurador" className="hover:text-cyan-400 transition-colors">
                  Configurador Custom
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-cyan-400 transition-colors">
                  Os 4 Pilares Técnicos
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-cyan-400 transition-colors">
                  Depoimentos de Clientes
                </a>
              </li>
            </ul>
          </div>

          {/* Lines */}
          <div className="md:col-span-2 space-y-3">
            <h6 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Hardware
            </h6>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#configurador" className="hover:text-cyan-400 transition-colors">
                  NVIDIA GeForce RTX 50 Series
                </a>
              </li>
              <li>
                <a href="#configurador" className="hover:text-cyan-400 transition-colors">
                  AMD Ryzen 9000X3D
                </a>
              </li>
              <li>
                <a href="#configurador" className="hover:text-cyan-400 transition-colors">
                  Intel Core Ultra 200 Series
                </a>
              </li>
              <li>
                <a href="#configurador" className="hover:text-cyan-400 transition-colors">
                  Custom Water Loops EKWB
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Engineering Base */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h6 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Oficina & Hangar
            </h6>
            <div className="space-y-2 text-zinc-400">
              <p className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>Av. Engenheiro Luís Carlos Berrini, 1748 - São Paulo, SP</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                <span>engenharia@nexusrigs.com.br</span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>(11) 4003-8990 • Suporte WhatsApp VIP</span>
              </p>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Bancadas de Montagem Operando Normalmente
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Stack credits */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>
            © {new Date().getFullYear()} NEXUS RIGS TECNOLOGIA LTDA. CNPJ:
            48.291.802/0001-44. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>Powered by Next.js 15+</span>
            <span>•</span>
            <span>Vercel + Neon Serverless</span>
            <span>•</span>
            <span>Auth.js v5</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
