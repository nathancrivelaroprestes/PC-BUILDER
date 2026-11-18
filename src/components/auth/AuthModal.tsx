"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Sparkles, CheckCircle2, Lock, ArrowRight } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export function AuthModal({ isOpen, onClose, message }: AuthModalProps) {
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingDemo, setLoadingDemo] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoadingGoogle(true);
      await signIn("google", { callbackUrl: window.location.href });
    } catch (err) {
      console.error(err);
      setLoadingGoogle(false);
    }
  };

  const handleDemoLogin = async () => {
    try {
      setLoadingDemo(true);
      await signIn("guest-login", {
        redirect: false,
        email: "piloto.nexus@gmail.com",
        name: "Piloto Nexus (VIP)",
      });
      onClose();
      window.location.reload();
    } catch (err) {
      console.error(err);
      setLoadingDemo(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#121216]/95 p-6 shadow-2xl shadow-cyan-500/10 z-10"
          >
            {/* Ambient glow decoration */}
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-600/20 border border-cyan-400/30 text-cyan-400 mb-3">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold tracking-tight text-white">
                Acesse o Hangar <span className="gradient-text">NEXUS</span>
              </h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                {message ||
                  "Conecte-se com sua conta Google para salvar configurações, acompanhar orçamentos e receber suporte de engenharia."}
              </p>
            </div>

            {/* Perks */}
            <div className="space-y-2 mb-6 rounded-xl bg-white/[0.02] border border-white/5 p-3 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Persistência em nuvem PostgreSQL Neon</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Acesso exclusivo ao canal direto de telemetria</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Simulação de benchmarks e orçamentos em 1-clique</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              {/* Google Button */}
              <button
                onClick={handleGoogleLogin}
                disabled={loadingGoogle}
                className="w-full flex items-center justify-center gap-3 rounded-xl bg-white text-zinc-900 font-semibold py-3 px-4 shadow-lg hover:bg-zinc-100 transition-all duration-200 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
              >
                {loadingGoogle ? (
                  <div className="h-5 w-5 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                )}
                <span>Entrar com Google OAuth</span>
              </button>

              {/* Demo Mode Button */}
              <button
                onClick={handleDemoLogin}
                disabled={loadingDemo}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-medium py-2.5 px-4 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-200 text-sm cursor-pointer"
              >
                {loadingDemo ? (
                  <div className="h-4 w-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Lock className="h-3.5 w-3.5" />
                    <span>Acesso Instantâneo Demo VIP</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-60 ml-auto" />
                  </>
                )}
              </button>
            </div>

            {/* Footer notice */}
            <div className="mt-5 flex items-center justify-center gap-1.5 text-[11px] text-zinc-500">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Autenticação segura via Auth.js v5 e Neon Database</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
