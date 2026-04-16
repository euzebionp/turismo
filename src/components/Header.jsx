'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-[#050A14]/90 backdrop-blur-lg border-b-[0.5px] border-white/10 shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Nova Turismo" width={150} height={64} className="h-12 md:h-16 w-auto object-contain mix-blend-screen opacity-95 drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-inter text-sm font-medium tracking-wide">
          <Link href="/#frota" className="hover:text-[#C5A059] transition-colors duration-300">A Frota</Link>
          <Link href="/#diferenciais" className="hover:text-[#C5A059] transition-colors duration-300">Diferenciais</Link>
          <Link href="/servicos/fretamento-corporativo" className="hover:text-[#C5A059] transition-colors duration-300">Serviços</Link>
          <Link href="/#orcamento" className="bg-[#C5A059] text-[#050A14] px-7 py-3 rounded hover:bg-white transition-all duration-300 font-bold tracking-wide shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:-translate-y-1">Orçamento Online</Link>
        </nav>
        <button className="md:hidden text-white hover:text-[#C5A059] transition-colors cursor-pointer" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#050A14]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <nav className="flex flex-col px-6 gap-6 font-inter text-center">
          <Link href="/#frota" className="block text-lg hover:text-[#C5A059]" onClick={() => setMobileMenuOpen(false)}>A Frota</Link>
          <Link href="/#diferenciais" className="block text-lg hover:text-[#C5A059]" onClick={() => setMobileMenuOpen(false)}>Diferenciais</Link>
          <Link href="/servicos/fretamento-corporativo" className="block text-lg hover:text-[#C5A059]" onClick={() => setMobileMenuOpen(false)}>Serviços</Link>
          <Link href="/#orcamento" className="block mt-4 bg-[#C5A059] text-[#050A14] px-6 py-4 rounded-lg font-bold" onClick={() => setMobileMenuOpen(false)}>Orçamento Online</Link>
        </nav>
      </div>
    </header>
  );
}
