# ⚡ NEXUS RIGS - High Performance Custom PCs

Aplicação web full-stack de última geração para a **NEXUS RIGS**, empresa especializada em engenharia e montagem de computadores personalizados e PCs de alta performance.

---

## 🛠️ Stack Tecnológica & Infraestrutura

- **Framework:** Next.js 15+ (App Router) & React 19
- **Linguagem & Tipagem:** TypeScript 5
- **Estilização & Design System:** Tailwind CSS, Glassmorphism e Lucide Icons
- **Animações:** Framer Motion (micro-interações e transições fluidas)
- **Banco de Dados:** PostgreSQL Serverless via **Neon**
- **ORM:** Prisma ORM com schema completo para Auth.js, Builds Salvas e Pedidos de Orçamento
- **Autenticação:** **Auth.js (NextAuth v5)** integrado ao **Google OAuth** + persistência no Neon (com modo demonstração VIP para testes rápidos)

---

## 🚀 Como Executar o Projeto Localmente

### 1. Clonar ou Acessar o Diretório
```bash
cd C:\Users\Aluno\.gemini\antigravity\scratch\nexus-rigs
```

### 2. Configurar as Variáveis de Ambiente
Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```
Preencha os valores:
```env
# URL de conexão do PostgreSQL Serverless do Neon
DATABASE_URL="postgresql://[user]:[password]@[endpoint].neon.tech/[dbname]?sslmode=require"

# Chave secreta de sessão do Auth.js (gere com: npx auth secret)
AUTH_SECRET="your-super-secret-key-32-chars-min"

# Credenciais do Google Cloud Console (OAuth 2.0 Client)
AUTH_GOOGLE_ID="seu-client-id.apps.googleusercontent.com"
AUTH_GOOGLE_SECRET="seu-client-secret"
```

> **Nota:** Para testar imediatamente a aplicação sem configurar credenciais do Google, o sistema inclui o botão **"Acesso Rápido Demo VIP"** no modal de autenticação.

---

## 🗄️ Sincronizando o Banco de Dados Neon (`prisma db push`)

Após criar o banco no **[Neon](https://neon.tech)** ou conectar a integração do Neon no painel da **Vercel**:

1. Copie a string de conexão fornecida pelo Neon (`DATABASE_URL`).
2. Execute o comando para aplicar o schema diretamente no Neon:
```bash
npx prisma db push
```

Isso criará automaticamente as seguintes tabelas no PostgreSQL:
- `User`, `Account`, `Session`, `VerificationToken` (Auth.js v5)
- `SavedBuild` (Builds personalizadas salvas pelos clientes)
- `QuoteRequest` (Pedidos de orçamento oficial vinculados a builds ou configurações)

Caso deseje visualizar os dados pelo navegador:
```bash
npx prisma studio
```

---

## 💻 Rodando o Servidor de Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📦 Deploy na Vercel com Banco Neon Integrado

1. Envie o repositório para o GitHub/GitLab.
2. Na Vercel, importe o projeto `nexus-rigs`.
3. Na aba **Storage**, adicione a integração **Neon** (ou configure a variável de ambiente `DATABASE_URL` manualmente).
4. Adicione `AUTH_SECRET`, `AUTH_GOOGLE_ID` e `AUTH_GOOGLE_SECRET` nas **Environment Variables**.
5. No build command ou via terminal Vercel CLI, execute `npx prisma db push` para aplicar o schema na nuvem.

---

## 🎨 Principais Recursos & Telas

1. **Navbar Flutuante:** Glassmorphism, links com rolagem suave, avatar do Google com menu dropdown e atalho para o drawer de builds.
2. **Hero Section de Alto Impacto:** Título épico, badges flutuantes em Framer Motion, simulação de gabinete com seletor de iluminação RGB interativo e telemetria de FPS/temperatura.
3. **Vitrine Bento Grid (Modelos de Assinatura):** Apresentação das máquinas *Nexus Pulse*, *Nexus Apex* e *Nexus Titan* com botão para carregar configurações direto no configurador.
4. **Configurador Interativo Conectado ao Neon:** Matriz de objetivos (Games 4K, Edição 3D, Streaming, Workstation) e níveis de investimento (Entrada, Enthusiast, Extreme) com cálculo de FPS, valor no PIX com 12% OFF e Server Actions de persistência no Neon.
5. **Drawer Lateral "Minhas Builds":** Gerenciamento em tempo real das configurações salvas no banco Neon, com exclusão segura e solicitação de orçamento.
6. **Modal de Orçamento Oficial:** Permite aos usuários solicitar cotações com envio de observações técnicas personalizadas.
7. **4 Pilares Técnicos & Avaliações:** Prova social de pro players e criadores de conteúdo e detalhes do processo de montagem e teste 24h.
