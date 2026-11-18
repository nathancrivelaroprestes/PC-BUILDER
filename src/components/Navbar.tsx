"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import {
  Cpu,
  Layers,
  Wrench,
  Star,
  LogOut,
  ChevronDown,
  BookmarkCheck,
  Menu,
  X,
  Shield,
  Zap,
} from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";
import { SavedBuildsDrawer } from "@/components/SavedBuildsDrawer";

interface NavbarProps {
  onOpenDrawer?: () => void;
  onOpenAuthModal?: () => void;
}

export function Navbar({ onOpenDrawer, onOpenAuthModal }: NavbarProps) {
  const { data: session, status } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openAuth = () => {
    if (onOpenAuthModal) {
      onOpenAuthModal();
    } else {
      setAuthModalOpen(true);
    }
  };

  const openDrawer = () => {
    if (onOpenDrawer) {
      onOpenDrawer();
    } else {
      setDrawerOpen(true);
    }
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#09090b]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                <div className="h-full w-full bg-[#09090b] rounded-[11px] flex items-center justify-center">
                  <Zap className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold tracking-wider text-xl text-white flex items-center gap-1">
                  NEXUS <span className="gradient-text font-black">RIGS</span>
                </span>
                <span className="text-[9px] tracking-widest text-cyan-400 font-semibold uppercase -mt-1">
                  High Performance PCs
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-zinc-900/60 backdrop-blur-md px-4 py-1.5 shadow-inner">
              <a
                href="#modelos"
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-colors flex items-center gap-1.5"
              >
                <Layers className="h-3.5 w-3.5 text-cyan-400" />
                Modelos
              </a>
              <a
                href="#configurador"
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-colors flex items-center gap-1.5"
              >
                <Cpu className="h-3.5 w-3.5 text-purple-400" />
                Configurador
              </a>
              <a
                href="#diferenciais"
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-colors flex items-center gap-1.5"
              >
                <Wrench className="h-3.5 w-3.5 text-cyan-400" />
                Diferenciais
              </a>
              <a
                href="#avaliacoes"
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-full transition-colors flex items-center gap-1.5"
              >
                <Star className="h-3.5 w-3.5 text-amber-400" />
                Avaliações
              </a>
            </nav>

            {/* User Area / Auth Button */}
            <div className="hidden md:flex items-center gap-3">
              {status === "loading" ? (
                <div className="h-9 w-28 bg-white/5 animate-pulse rounded-full" />
              ) : session?.user ? (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2.5 rounded-full border border-white/10 bg-zinc-900/80 hover:bg-zinc-800/80 pl-1.5 pr-3 py-1 text-xs font-medium text-white transition-all shadow-md"
                  >
                    {session.user.image ? (
                      <Image
                        src={session.user.image}
                        alt={session.user.name || "Avatar"}
                        width={28}
                        height={28}
                        className="rounded-full border border-cyan-400/50"
                      />
                    ) : (
                      <div className="h-7 w-7 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-white text-[11px]">
                        {session.user.name?.charAt(0) || "U"}
                      </div>
                    )}
                    <span className="max-w-[110px] truncate">
                      {session.user.name?.split(" ")[0] || "Piloto"}
                    </span>
                    <ChevronDown className="h-3.5 w-3.5 text-zinc-400" />
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-white/10 bg-[#121218] p-2 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-3 py-2 border-b border-white/5 mb-1">
                        <p className="text-xs font-bold text-white truncate">
                          {session.user.name}
                        </p>
                        <p className="text-[10px] text-zinc-400 truncate">
                          {session.user.email}
                        </p>
                      </div>

                      <button
                        onClick={openDrawer}
                        className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                      >
                        <BookmarkCheck className="h-4 w-4 text-cyan-400" />
                        <span>Minhas Builds Salvas</span>
                      </button>

                      <a
                        href="#configurador"
                        onClick={() => setDropdownOpen(false)}
                        className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-zinc-300 hover:bg-white/5 transition-colors"
                      >
                        <Cpu className="h-4 w-4 text-purple-400" />
                        <span>Novo Setup Custom</span>
                      </a>

                      <div className="border-t border-white/5 my-1" />

                      <button
                        onClick={() => signOut()}
                        className="w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-red-400 hover:bg-red-500/10 transition-colors"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sair da Conta</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={openAuth}
                  className="group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-zinc-800 to-zinc-900 border border-white/15 hover:border-cyan-400/60 shadow-lg hover:shadow-cyan-500/20 transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
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
                  <span>Entrar com Google</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping ml-0.5" />
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              {session?.user && (
                <button
                  onClick={openDrawer}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400"
                >
                  <BookmarkCheck className="h-5 w-5" />
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#0d0d12]/95 backdrop-blur-xl px-4 py-5 space-y-3">
            <nav className="flex flex-col space-y-2">
              <a
                href="#modelos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-zinc-300 hover:text-white flex items-center gap-2"
              >
                <Layers className="h-4 w-4 text-cyan-400" />
                Modelos
              </a>
              <a
                href="#configurador"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-zinc-300 hover:text-white flex items-center gap-2"
              >
                <Cpu className="h-4 w-4 text-purple-400" />
                Configurador
              </a>
              <a
                href="#diferenciais"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-zinc-300 hover:text-white flex items-center gap-2"
              >
                <Wrench className="h-4 w-4 text-cyan-400" />
                Diferenciais
              </a>
              <a
                href="#avaliacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-zinc-300 hover:text-white flex items-center gap-2"
              >
                <Star className="h-4 w-4 text-amber-400" />
                Avaliações
              </a>
            </nav>

            <div className="pt-3 border-t border-white/10">
              {session?.user ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 px-3 py-1">
                    <span className="text-xs text-zinc-400">Logado como:</span>
                    <span className="text-xs font-bold text-white">
                      {session.user.name}
                    </span>
                  </div>
                  <button
                    onClick={openDrawer}
                    className="w-full flex items-center gap-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-3 py-2.5 text-xs font-semibold text-cyan-300"
                  >
                    <BookmarkCheck className="h-4 w-4" />
                    Minhas Builds Salvas
                  </button>
                  <button
                    onClick={() => signOut()}
                    className="w-full flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 px-3 py-2.5 text-xs font-semibold text-red-400"
                  >
                    <LogOut className="h-4 w-4" />
                    Sair
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAuth();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-white text-zinc-950 font-bold py-2.5 px-4 text-xs"
                >
                  <span>Entrar com Google</span>
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Internal Modals if not controlled externally */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
      <SavedBuildsDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}
