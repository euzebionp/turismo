# 🚌 Nova Turismo Premium UI

![Vercel Deployment](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

Um projeto *Single Page Application* de ultra-luxo voltado para a **Nova Turismo**, empresa especialista em fretamento corporativo e turismo rodoviário de alto padrão utilizando a sofisticada linha Marcopolo G8.

## 🎨 Token de Design (Aesthetics)
A interface adota conceitos de ponta em webdesign como o poderoso *Glassmorphism*, transições e microinterações polidas em hover state.

- **Backgrounds**: Deep Navy (`#050A14` & `#020409`)
- **Action / Destaques**: Luxury Gold (`#C5A059`)
- **Tipografia Escrita**: Fontes Google Modernas (*Cinzel* para exclusividade em cabeçalhos e *Inter* para o corpo de legibilidade técnica).

## 🚀 Setup & Execução Local

Pelo fato do projeto ser erguido através de uma stack de compressão enxuta e moderna envolvendo React + Vite, a execução é extremamente rápida:

1. **Instale as as dependências:**
```bash
npm install
```

2. **Rode o Servidor de Desenvolvimento:**
```bash
npm run dev
```

Abra em seu navegador: [http://localhost:5173](http://localhost:5173). O Vite aplicará as atualizações automáticas via Hot-Module-Replacement na edição.

## 📂 Estrutura Relevante
A estrutura segue uma abstração de *Single File Mandate* na aplicação central de layout com configuração nativa englobada em volta.
```
turismo/
│
├── public/                 # Imagens da Logo Customizada e Ônibus
│   ├── frota.png           # Foto base do Onibus Marcopolo G8 com Blend treatment
│   └── logo.png            # PNG da logotipo
│
├── main.jsx                # Entry-Point originário da DOM e CSS.
├── nova.jsx                # SPA Principal (Toda a lógica e marcação e design do App)
├── index.css               # Setup das diretrizes padrões Tailwind
│
├── vercel.json             # Configuração para Host de SPA + Rewrites da Vercel
├── tailwind.config.js      # Setup e mapeamento de rotas do CSS engine
├── postcss.config.js       # Auto-Prefixer e parser 
└── package.json            # Dependências + Vite CLI
```

## ☁️ Deployment
Este escopo já possui o controle e o mapeamento de Deploy em nuvem (arquitetura SPA com rewrites no arquivo `vercel.json`).

Basta plugar este repositório no seu painel [Vercel](https://vercel.com/new). Automáticamente as ferramentas vão detectar o framework de Vite para subir o bundling nativamente para ambiente de produção sem que seja necessária nenhuma configuração manual.
