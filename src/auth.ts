import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

const providers = [];

if (
  process.env.AUTH_GOOGLE_ID &&
  process.env.AUTH_GOOGLE_SECRET &&
  !process.env.AUTH_GOOGLE_ID.includes("placeholder")
) {
  providers.push(
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    })
  );
}

// Provedor para testes e demonstração imediata
providers.push(
  Credentials({
    id: "guest-login",
    name: "Acesso Demo Nexus VIP",
    credentials: {
      email: { label: "Email", type: "email" },
      name: { label: "Nome", type: "text" },
    },
    async authorize(credentials) {
      const email = (credentials?.email as string) || "piloto.nexus@gmail.com";
      const name = (credentials?.name as string) || "Piloto Nexus (VIP)";

      try {
        let user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              email,
              name,
              image:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
            },
          });
        }
        return user;
      } catch (err) {
        console.warn("Prisma offline fallback para demo:", err);
        return {
          id: "demo-user-vip-nexus",
          name,
          email,
          image:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        };
      }
    },
  })
);

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers,
  callbacks: {
    async session({ session, token }) {
      if (token?.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  secret:
    process.env.AUTH_SECRET ||
    "nexus-rigs-secret-super-safe-key-production-32chars",
});
