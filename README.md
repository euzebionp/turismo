# 🚌 Nova Turismo Premium UI

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

Aplicação corporativa de ultra-luxo para a **Nova Turismo**. Recentemente elevada para a stack completa **Next.js 14**, a arquitetura foi desenhada não apenas para exibir a excelência da frota Marcopolo G8, mas para **dominar o tráfego de SEO Local** com Server-Side Rendering (SSR) dinâmico e arquitetura SEO-First.

## 🏆 Pilares de Engenharia e SEO

### 1. Sistema de Silos de Conteúdo
Construído para captura de rotas *Long-Tail Keywords* de serviços e praças logísticas do Google (Ex: `/cidades/sao-paulo`, `/servicos/fretamento-onibus`). Cada rota gera seus H1s parametrizados em Server-Side sem refetching de layout.

### 2. Core Web Vitals Superior
Implementação massiva do container `<Image />` nativo do Next. Otimizações de rotina:
- Conversão binária transparente de imagens para `WebP`.
- `Lazy loading` sob demanda impulsionando as réguas FCP/LCP da performance Google.
- Preload nativo da fonte **Google Fonts** (`next/font`) diminuindo latências TTFB.

### 3. Aesthetics & Tracking
Interface banhada ao poderoso *Glassmorphism*. Identidade baseada no Deep Navy/Luxury Gold injetada via **Tailwind CSS**. A estrutura raiz já contém tags HTML JSON-LD (*LocalBusiness Schema.org*) para destaque local da marca nos rich snippets (Resultados Aprimorados) do Buscador.

---

## 🚀 Como Iniciar o Desenvolvimento

Nesta V2 em arquitetura robusta Next.js:

1. **Faça o tracking seguro da rede:**
```bash
npm install
```

2. **Suba o Node Server:**
```bash
npm run dev
```

Abra em seu navegador: [http://localhost:3000](http://localhost:3000). O ecossistema fará compile automático via Fast Refresh.

## 📂 Visão Modular (App Router)
O monólito clássico foi pulverizado para respeitar arquiteturas Client/Server do Next:
```
turismo-next/
│
├── public/                 # Vetores, Assets estáticos puros
│   ├── frota.png           
│   └── logo.png            
│
├── src/
│   ├── app/                # Roteamento Inteligente Server-Side
│   │   ├── cidades/        # [slug] Content Silo Geográfico
│   │   ├── servicos/       # [slug] Content Silo Atuação
│   │   ├── globals.css     # Diretrizes Tailwind unificadas
│   │   ├── layout.jsx      # Metadados Head, Schemas SEO e Fontes Globais
│   │   └── page.jsx        # Landing Core Assembly
│   │
│   └── components/         # Microfrontend
│       ├── Blocks.jsx      # Fragmentos Gigantes Renderizados no Servidor (.server)
│       ├── Header.jsx      # UI Layer de Navegação (.client)
│       └── LeadForm.jsx    # Captação de Conversão Reactiva (.client)
│
├── next.config.js          # Webpack/Compiler pipeline config
├── tailwind.config.js      # CSS Tokens Definitions
└── package.json            
```

## ☁️ Deployment Produtivo (Zero-Config)
Por estar sob forte guarda do framework original, basta conectar este projeto na dashboard da [Vercel](https://vercel.com/new). A nuvem compreenderá a arquitetura SSR e cuidará isoladamente e de modo atômico das distribuições da rede Edge para o cliente. Não é requerida nenhuma adaptação forçada no repo!
