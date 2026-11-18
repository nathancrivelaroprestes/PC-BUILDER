"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Trash2,
  Send,
  Cpu,
  HardDrive,
  Layers,
  Calendar,
  ExternalLink,
  Sparkles,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { getUserSavedBuilds, deleteSavedBuild } from "@/actions/builds";
import { formatBRL } from "@/lib/utils";

interface SavedBuildsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBuild?: (build: any) => void;
  onRequestQuoteForBuild?: (build: any) => void;
}

export function SavedBuildsDrawer({
  isOpen,
  onClose,
  onSelectBuild,
  onRequestQuoteForBuild,
}: SavedBuildsDrawerProps) {
  const [builds, setBuilds] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const fetchBuilds = async () => {
    setLoading(true);
    try {
      const res = await getUserSavedBuilds();
      if (res.success && res.builds) {
        setBuilds(res.builds);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchBuilds();
      setFeedbackMessage(null);
    }
  }, [isOpen]);

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Deseja realmente remover a build "${name}"?`)) return;

    setDeletingId(id);
    try {
      const res = await deleteSavedBuild(id);
      if (res.success) {
        setBuilds((prev) => prev.filter((b) => b.id !== id));
        setFeedbackMessage({
          type: "success",
          text: `Build "${name}" removida com sucesso do Neon.`,
        });
      } else {
        setFeedbackMessage({
          type: "error",
          text: res.message || "Erro ao excluir do Neon.",
        });
      }
    } catch {
      setFeedbackMessage({
        type: "error",
        text: "Erro inesperado ao excluir a build.",
      });
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer container */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-screen max-w-md border-l border-white/10 bg-[#0d0d11]/95 backdrop-blur-xl shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                    <h3 className="font-heading text-xl font-bold text-white tracking-wide">
                      Minhas Builds <span className="gradient-text">Salvas</span>
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Sincronizado em tempo real com Neon PostgreSQL
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Feedback Alert */}
              {feedbackMessage && (
                <div
                  className={`mx-6 mt-4 p-3 rounded-xl border flex items-center gap-2 text-xs ${
                    feedbackMessage.type === "success"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                      : "bg-red-500/10 border-red-500/30 text-red-300"
                  }`}
                >
                  {feedbackMessage.type === "success" ? (
                    <CheckCircle className="h-4 w-4 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0" />
                  )}
                  <span>{feedbackMessage.text}</span>
                </div>
              )}

              {/* Content / Build List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-20 text-zinc-500">
                    <div className="h-8 w-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mb-3" />
                    <p className="text-sm">Consultando banco Neon...</p>
                  </div>
                ) : builds.length === 0 ? (
                  <div className="text-center py-16 px-4">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-white/5 border border-white/10 text-zinc-500 mb-4">
                      <Cpu className="h-7 w-7" />
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-white">
                      Nenhuma máquina salva ainda
                    </h4>
                    <p className="text-sm text-zinc-400 mt-2 max-w-xs mx-auto">
                      Personalize sua máquina ideal no configurador e clique em
                      "Salvar Build na Minha Conta".
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                      <Sparkles className="h-4 w-4" />
                      Ir ao Configurador
                    </button>
                  </div>
                ) : (
                  builds.map((b) => (
                    <div
                      key={b.id}
                      className="group relative rounded-2xl border border-white/10 bg-[#16161c]/80 p-5 transition-all hover:border-cyan-500/40 hover:bg-[#1a1a22]"
                    >
                      {/* Top Bar of Card */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h4 className="font-heading font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                            {b.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                              {b.purpose}
                            </span>
                            <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                              {b.tier}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-heading font-bold text-lg text-emerald-400">
                            {formatBRL(b.totalPrice)}
                          </p>
                          <p className="text-[10px] text-zinc-500 flex items-center justify-end gap-1 mt-0.5">
                            <Calendar className="h-3 w-3" />
                            {new Date(b.createdAt).toLocaleDateString("pt-BR")}
                          </p>
                        </div>
                      </div>

                      {/* Specs pills */}
                      <div className="space-y-1.5 text-xs text-zinc-300 my-3 bg-black/30 rounded-xl p-3 border border-white/5">
                        <div className="flex items-center gap-2">
                          <Cpu className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{b.cpu}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Layers className="h-3.5 w-3.5 text-purple-400 shrink-0" />
                          <span className="truncate">{b.gpu}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <HardDrive className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
                          <span className="truncate">{b.ram} • {b.storage}</span>
                        </div>
                      </div>

                      {/* Quotes tag if any */}
                      {b.quotes && b.quotes.length > 0 && (
                        <div className="mb-3 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center gap-1.5">
                          <CheckCircle className="h-3.5 w-3.5" />
                          <span>Orçamento Solicitado ({b.quotes[0].status})</span>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/5">
                        <button
                          onClick={() => {
                            if (onSelectBuild) {
                              onSelectBuild(b);
                              onClose();
                            }
                          }}
                          className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors font-medium py-1 px-2 rounded-lg hover:bg-cyan-500/10"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Carregar no Configurador
                        </button>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => {
                              if (onRequestQuoteForBuild) {
                                onRequestQuoteForBuild(b);
                                onClose();
                              }
                            }}
                            className="flex items-center gap-1 text-xs text-purple-300 hover:text-purple-200 transition-colors font-medium py-1 px-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20"
                            title="Solicitar Orçamento"
                          >
                            <Send className="h-3 w-3" />
                            Orçar
                          </button>

                          <button
                            onClick={() => handleDelete(b.id, b.name)}
                            disabled={deletingId === b.id}
                            className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                            title="Excluir Build"
                          >
                            {deletingId === b.id ? (
                              <div className="h-3.5 w-3.5 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <Trash2 className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer info */}
              <div className="p-4 border-t border-white/10 bg-black/40 text-center text-xs text-zinc-500">
                Total de {builds.length} {builds.length === 1 ? "máquina salva" : "máquinas salvas"}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
