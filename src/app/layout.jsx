import { Cinzel, Inter } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata = {
  title: 'Nova Turismo | Fretamento Corporativo e Turismo de Luxo',
  description: 'Referência nacional em locação de ônibus de alto padrão. Fretamento corporativo e turismo de luxo com exclusividade Marcopolo G8.',
  keywords: 'Fretamento de ônibus, turismo de luxo, Marcopolo G8, locação de micro-onibus',
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Nova Turismo Premium",
    "image": "https://turismo-khaki.vercel.app/logo.png",
    "url": "https://turismo-khaki.vercel.app",
    "telephone": "+5511999999999",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Presidente Juscelino Kubitschek",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "description": "Referência em locação de ônibus corporativo de luxo."
  };

  return (
    <html lang="pt-BR" className={`scroll-smooth ${cinzel.variable} ${inter.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="font-inter antialiased bg-[#050A14] text-slate-100 selection:bg-[#C5A059] selection:text-[#050A14] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
