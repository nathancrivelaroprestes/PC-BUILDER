"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  PhoneCall,
  Clock,
} from "lucide-react";
import { requestQuote } from "@/actions/builds";
import { formatBRL } from "@/lib/utils";
import confetti from "canvas-confetti";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  buildData: {
    id?: string;
    name: string;
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
    totalPrice: number;
  } | null;
}

export function QuoteModal({ isOpen, onClose, buildData }: QuoteModalProps) {
  const [notes, setNotes] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!buildData) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const customDetails = `Máquina: ${buildData.name} | CPU: ${buildData.cpu} | GPU: ${buildData.gpu} | RAM: ${buildData.ram} | Armazenamento: ${buildData.storage} | Valor Referência: ${formatBRL(buildData.totalPrice)} | WhatsApp/Contato: ${phone || "Não informado"}`;

      const res = await requestQuote({
        buildId: buildData.id,
        notes: notes.trim(),
        customDetails,
      });

      if (res.success) {
        setSuccess(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#00F0FF", "#8B5CF6", "#FAFAFA"],
        });
      } else {
        setErrorMessage(
          res.message || "Erro ao registrar o pedido de orçamento no banco Neon."
        );
      }
    } catch {
      setErrorMessage("Erro inesperado. Tente novamente em instantes.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setNotes("");
    setPhone("");
    setErrorMessage("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && buildData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#121218]/95 p-6 md:p-8 shadow-2xl z-10"
          >
            {/* Glow effects */}
            <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-purple-600/15 blur-3xl pointer-events-none" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {success ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mb-4 animate-bounce">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Orçamento Enviado com Sucesso!
                </h3>
                <p className="mt-2 text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                  Sua solicitação foi registrada no banco de dados Neon da NEXUS
                  RIGS. Nossos engenheiros de bancada já estão analisando a
                  disponibilidade das peças e calibração térmica.
                </p>

                <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left text-xs space-y-2 text-zinc-400">
                  <div className="flex items-center gap-2 text-zinc-200 font-medium">
                    <Clock className="h-4 w-4 text-cyan-400" />
                    <span>Tempo médio de resposta: menos de 2 horas úteis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-purple-400" />
                    <span>Validade da cotação: 5 dias corridos garantidos</span>
                  </div>
                </div>

                <button
                  onClick={handleClose}
                  className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Concluir e Voltar
                </button>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
                    <Sparkles className="h-3.5 w-3.5" />
                    Orçamento Oficial Sob Medida
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Solicitar Proposta para{" "}
                    <span className="gradient-text">{buildData.name}</span>
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Receba proposta com detalhes de prazos, frete seguro blindado
                    e opções de parcelamento.
                  </p>
                </div>

                {/* Build Summary Box */}
                <div className="mb-6 p-4 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-zinc-400">Valor Estimado Base:</span>
                    <span className="font-heading font-bold text-base text-cyan-400">
                      {formatBRL(buildData.totalPrice)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Cpu className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
                    <span className="truncate">{buildData.cpu}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Layers className="h-3.5 w-3.5 text-zinc-500 shrink-0" />
                    <span className="truncate">{buildData.gpu}</span>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5 flex items-center gap-1.5">
                      <PhoneCall className="h-3.5 w-3.5 text-cyan-400" />
                      WhatsApp / Telefone para Contato Rápido
                    </label>
                    <input
                      type="text"
                      placeholder="(11) 99999-9999"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Personalizações Específicas & Preferências (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ex: Cor dos cabos sleeved (preto/ciano), gravação a laser com meu nick na lateral de vidro, preferência por entrega via transportadora expressa..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-4 shadow-lg shadow-cyan-500/20 hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Enviar Solicitação ao Engenheiro NEXUS</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
