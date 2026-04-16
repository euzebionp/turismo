import Image from 'next/image';
import { ChevronRight, Shield, Clock, Trophy, Users, Wifi, Usb, MapPin, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function Hero({ cityName }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#050A14]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A14] via-[#050A14]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-[#050A14]/40 z-10" />
        <Image 
          src="/frota.png" 
          alt="Ônibus de luxo Nova Turismo" 
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-pulse-slow opacity-70 mix-blend-luminosity contrast-125 saturate-50"
        />
      </div>
      <div className="container mx-auto px-6 relative z-20 text-center md:text-left">
        <div className="max-w-3xl animate-[fade-in-up_1s_ease-out]">
          <span className="text-[#C5A059] font-inter uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-6 block drop-shadow-md">Premium Corporate Transportation</span>
          <h2 className="text-5xl md:text-7xl font-cinzel font-bold leading-tight mb-8">
            A Excelência em <br className="hidden md:block"/><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-yellow-100">{cityName ? cityName : 'Movimento'}</span>
          </h2>
          <p className="font-inter text-slate-300 text-base md:text-xl mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light">
            Fretamento corporativo e turismo de alto padrão. Elevamos a sofisticação do transporte rodoviário para que cada trajeto se torne uma experiência memorável.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <Link href="/#orcamento" className="bg-gradient-to-r from-[#C5A059] to-[#a38040] text-[#050A14] px-8 py-4 rounded font-inter font-bold text-sm tracking-wide hover:from-white hover:to-slate-200 hover:text-[#050A14] transition-all duration-500 font-bold shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 group">
              Reservar Experiência
              <ChevronRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
            </Link>
            <Link href="/#frota" className="bg-white/5 hover:bg-white/10 text-white backdrop-blur-md px-8 py-4 rounded font-inter font-bold text-sm tracking-wide border border-white/20 transition-all duration-500 flex items-center justify-center transform hover:-translate-y-1">
              Conhecer a Frota
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const cards = [
    { icon: Shield, title: "Segurança Máxima", desc: "Veículos com telemetria avançada e motoristas defensivos." },
    { icon: Clock, title: "Pontualidade Ímpar", desc: "Gestão logística precisa e rotas inteligentes." },
    { icon: Trophy, title: "Luxo Premiado", desc: "Acabamentos internos de luxo com conforto acústico absoluto." },
    { icon: Users, title: "Serviço Concierge", desc: "Suporte corporativo vip exclusivo ativo 24/7." }
  ];
  return (
    <section id="diferenciais" className="py-32 bg-[#050A14] relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="font-cinzel text-4xl md:text-5xl font-bold mb-6">O Padrão <span className="text-[#C5A059]">Nova</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((item, i) => (
            <div key={i} className="group bg-white/[0.03] backdrop-blur-lg border border-white/10 p-10 rounded-2xl hover:bg-white/[0.08] hover:border-[#C5A059]/40 transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 w-full h-full bg-[#C5A059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"></div>
              <div className="w-16 h-16 bg-[#050A14] rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#C5A059]/50 transition-colors relative z-10 overflow-hidden">
                <item.icon size={28} className="text-[#C5A059] relative z-20 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h4 className="font-cinzel text-xl font-bold mb-4 text-slate-100 relative z-10">{item.title}</h4>
              <p className="font-inter text-slate-400 text-sm leading-relaxed font-light relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Fleet() {
  return (
    <section id="frota" className="py-32 bg-[#020409]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="md:w-2/3">
            <span className="text-[#C5A059] font-inter uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Tecnologia Automotiva</span>
            <h3 className="font-cinzel text-4xl md:text-5xl font-bold leading-tight">Nossa Frota <span className="text-[#C5A059] italic">Elite</span></h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group shadow-2xl bg-[#050A14]">
            <Image src="/frota.png" alt="Marcopolo G8" fill className="object-cover brightness-50 group-hover:brightness-90 contrast-110 saturate-50 group-hover:saturate-100 group-hover:scale-105 transition-all duration-[1.5s]" sizes="(max-width: 768px) 100vw, 66vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020409] via-[#020409]/50 to-transparent flex flex-col justify-end p-10 md:p-14 z-10">
              <div className="bg-[#C5A059]/20 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full inline-flex w-max mb-6">Design Aerodinâmico</div>
              <h4 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">Linha G8 1800 Double Decker</h4>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0e1726] to-[#050A14] border border-white/5 p-10 flex flex-col justify-center shadow-xl">
             <h4 className="font-cinzel text-2xl font-bold text-white mb-3">Poltronas Leito-Cama</h4>
             <p className="font-inter text-slate-400 text-sm font-light">Reclinação 180 graus, material antialérgico.</p>
          </div>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#111827] to-[#000] border border-white/5 p-10 flex flex-col justify-end shadow-xl">
             <div className="flex gap-4 mb-4"><Wifi className="text-[#C5A059]"/><Usb className="text-white"/></div>
             <h4 className="font-cinzel text-2xl font-bold text-white mb-3">Conectividade Fixa</h4>
             <p className="font-inter text-slate-400 text-sm font-light">Starlink embarcada e portas USB-C 110v.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#020408] pt-24 pb-10 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between flex-wrap gap-8">
           <div className="max-w-sm">
             <Image src="/logo.png" alt="Nova Turismo" width={150} height={64} className="h-16 w-auto mix-blend-screen opacity-80" />
             <p className="font-inter text-slate-400 text-sm mt-4">Referência nacional em logística VIP executiva.</p>
           </div>
           <div>
             <h4 className="font-cinzel font-bold text-white uppercase mb-4">Operações</h4>
             <p className="text-slate-400 text-sm font-light">São Paulo, Campinas<br/>concierge@novaturismo.com.br</p>
           </div>
        </div>
      </div>
      <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="fixed bottom-8 right-8 w-16 h-16 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:-translate-y-2 z-50 transition-all duration-300">
        <MessageCircle size={32} />
      </a>
    </footer>
  );
}
