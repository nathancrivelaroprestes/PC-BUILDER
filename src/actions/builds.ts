"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export interface SaveBuildInput {
  name: string;
  purpose: string;
  tier: string;
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  totalPrice: number;
}

export interface QuoteInput {
  buildId?: string;
  notes?: string;
  customDetails?: string;
}

export async function saveBuild(data: SaveBuildInput) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return {
        success: false,
        error: "UNAUTHORIZED",
        message: "Faça login com sua conta Google para salvar sua configuração.",
      };
    }

    const userId = session.user.id;

    // Garante que o usuário existe no Neon se for sessão JWT
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: {
          id: userId,
          email: session.user.email || `user_${userId}@nexusrigs.com`,
          name: session.user.name || "Piloto Nexus",
          image: session.user.image,
        },
      });
    }

    const saved = await prisma.savedBuild.create({
      data: {
        userId,
        name: data.name || "Nexus Custom Rig",
        purpose: data.purpose,
        tier: data.tier,
        cpu: data.cpu,
        gpu: data.gpu,
        ram: data.ram,
        storage: data.storage,
        totalPrice: data.totalPrice,
      },
    });

    revalidatePath("/");
    return {
      success: true,
      build: saved,
      message: `Configuração "${saved.name}" salva com sucesso no banco de dados Neon!`,
    };
  } catch (error: any) {
    console.error("Erro ao salvar build no banco Neon:", error);
    return {
      success: false,
      error: "DB_ERROR",
      message:
        error?.message ||
        "Não foi possível salvar no banco Neon. Verifique se executou `npx prisma db push`.",
    };
  }
}

export async function getUserSavedBuilds() {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return {
        success: false,
        error: "UNAUTHORIZED",
        builds: [],
      };
    }

    const userId = session.user.id;

    const builds = await prisma.savedBuild.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: {
        quotes: {
          select: { id: true, status: true, createdAt: true },
        },
      },
    });

    return {
      success: true,
      builds,
    };
  } catch (error: any) {
    console.error("Erro ao buscar builds no banco Neon:", error);
    return {
      success: false,
      error: "DB_ERROR",
      builds: [],
      message: error?.message,
    };
  }
}

export async function deleteSavedBuild(buildId: string) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return {
        success: false,
        error: "UNAUTHORIZED",
        message: "Faça login com sua conta Google para gerenciar builds.",
      };
    }

    const userId = session.user.id;

    // Verificar se a build pertence ao usuário logado
    const build = await prisma.savedBuild.findUnique({
      where: { id: buildId },
    });

    if (!build || build.userId !== userId) {
      return {
        success: false,
        error: "FORBIDDEN",
        message: "Build não encontrada ou permissão negada.",
      };
    }

    await prisma.savedBuild.delete({
      where: { id: buildId },
    });

    revalidatePath("/");
    return {
      success: true,
      message: "Configuração excluída com sucesso.",
    };
  } catch (error: any) {
    console.error("Erro ao deletar build no banco Neon:", error);
    return {
      success: false,
      error: "DB_ERROR",
      message: "Falha ao remover a build do banco Neon.",
    };
  }
}

export async function requestQuote(input: QuoteInput) {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return {
        success: false,
        error: "UNAUTHORIZED",
        message: "Faça login com o Google para solicitar um orçamento oficial.",
      };
    }

    const userId = session.user.id;

    // Garante persistência do usuário
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: {
          id: userId,
          email: session.user.email || `user_${userId}@nexusrigs.com`,
          name: session.user.name || "Piloto Nexus",
          image: session.user.image,
        },
      });
    }

    const quote = await prisma.quoteRequest.create({
      data: {
        userId,
        buildId: input.buildId || null,
        status: "EM_ANALISE",
        notes: input.notes
          ? `${input.notes}\n\n[Detalhes da Máquina: ${input.customDetails || "Conforme configuração selecionada"}]`
          : input.customDetails || "Orçamento solicitado via Configurador NEXUS.",
      },
    });

    revalidatePath("/");
    return {
      success: true,
      quote,
      message:
        "Orçamento registrado no Neon! Nosso engenheiro técnico entrará em contato em até 2 horas úteis.",
    };
  } catch (error: any) {
    console.error("Erro ao solicitar orçamento no banco Neon:", error);
    return {
      success: false,
      error: "DB_ERROR",
      message: "Erro ao registrar o pedido de orçamento no banco Neon.",
    };
  }
}
