import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Clock, Trophy, Users, Wifi, Usb, ChevronRight, MessageCircle, MapPin, Navigation, Mail, User } from 'lucide-react';

export default function NovaTurismo() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ origem: '', destino: '', nome: '', email: '' });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Orçamento solicitado com sucesso! Nossa equipe concierge entrará em contato.');
    setFormData({ origem: '', destino: '', nome: '', email: '' });
  };

  return (
    <div className="min-h-screen bg-[#050A14] text-slate-100 font-sans selection:bg-[#C5A059] selection:text-[#050A14] overflow-x-hidden">
      {/* Importação Mágica das Fontes para o Protótipo de Arquivo Único */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        .font-cinzel { font-family: 'Cinzel', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}} />

      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-4 bg-[#050A14]/90 backdrop-blur-lg border-b-[0.5px] border-white/10 shadow-lg' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Nova Turismo" className="h-12 md:h-16 object-contain mix-blend-screen opacity-95 drop-shadow-[0_0_15px_rgba(197,160,89,0.3)]" />
          </div>
          
          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-8 font-inter text-sm font-medium tracking-wide">
            <a href="#frota" className="hover:text-[#C5A059] transition-colors duration-300">A Frota</a>
            <a href="#diferenciais" className="hover:text-[#C5A059] transition-colors duration-300">Diferenciais</a>
            <a href="#servicos" className="hover:text-[#C5A059] transition-colors duration-300">Serviços</a>
            <a href="#orcamento" className="bg-[#C5A059] text-[#050A14] px-7 py-3 rounded hover:bg-white transition-all duration-300 font-bold tracking-wide shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:-translate-y-1">
              Orçamento Online
            </a>
          </nav>

          {/* Botão Menu Mobile */}
          <button 
            className="md:hidden text-white hover:text-[#C5A059] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-[#050A14]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500 overflow-hidden ${mobileMenuOpen ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
          <nav className="flex flex-col px-6 gap-6 font-inter text-center">
            <a href="#frota" className="block text-lg hover:text-[#C5A059] transition-colors" onClick={() => setMobileMenuOpen(false)}>A Frota</a>
            <a href="#diferenciais" className="block text-lg hover:text-[#C5A059] transition-colors" onClick={() => setMobileMenuOpen(false)}>Diferenciais</a>
            <a href="#servicos" className="block text-lg hover:text-[#C5A059] transition-colors" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
            <a href="#orcamento" className="block mt-4 bg-[#C5A059] text-[#050A14] px-6 py-4 rounded-lg font-bold shadow-lg shadow-[#C5A059]/20" onClick={() => setMobileMenuOpen(false)}>
              Orçamento Online
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Imersivo */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#050A14] via-[#050A14]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-[#050A14]/40 z-10" />
          <img 
            src="/frota.png" 
            alt="Ônibus de luxo Nova Turismo" 
            className="w-full h-full object-cover object-center animate-[pulse_30s_ease-in-out_infinite] scale-110 opacity-70 mix-blend-luminosity contrast-125 saturate-50"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center md:text-left">
          <div className="max-w-3xl animate-[fade-in-up_1s_ease-out]">
            <span className="text-[#C5A059] font-inter uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-6 block drop-shadow-md">
              Premium Corporate Transportation
            </span>
            <h2 className="text-5xl md:text-7xl font-cinzel font-bold leading-tight mb-8">
              A Excelência em <br className="hidden md:block"/>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-yellow-100">Movimento</span>
            </h2>
            <p className="font-inter text-slate-300 text-base md:text-xl mb-12 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light">
              Fretamento corporativo e turismo de alto padrão. Elevamos a sofisticação do transporte rodoviário para que cada trajeto se torne uma experiência memorável.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <a href="#orcamento" className="bg-gradient-to-r from-[#C5A059] to-[#a38040] text-[#050A14] px-8 py-4 rounded font-inter font-bold text-sm tracking-wide hover:from-white hover:to-slate-200 hover:text-[#050A14] transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center gap-3 group shadow-xl shadow-[#C5A059]/20">
                Reservar Experiência
                <ChevronRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
              <a href="#frota" className="bg-white/5 hover:bg-white/10 text-white backdrop-blur-md px-8 py-4 rounded font-inter font-bold text-sm tracking-wide border border-white/20 transition-all duration-500 flex items-center justify-center transform hover:-translate-y-1">
                Conhecer a Frota
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais (Cards com Glassmorphism) */}
      <section id="diferenciais" className="py-32 bg-[#050A14] relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="font-cinzel text-4xl md:text-5xl font-bold mb-6">O Padrão <span className="text-[#C5A059]">Nova</span></h3>
            <p className="font-inter text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Nossos pilares de excelência garantem que sua viagem corporativa seja sinônimo de produtividade e segurança impecável.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Segurança Máxima", desc: "Veículos com telemetria avançada, manutenção preditiva e motoristas defensivos certificados." },
              { icon: Clock, title: "Pontualidade Ímpar", desc: "Gestão logística precisa e rotas inteligentes para respeito absoluto ao seu cronograma." },
              { icon: Trophy, title: "Luxo Premiado", desc: "Design interior refinado com acabamentos de primeira linha para máximo conforto acústico e tátil." },
              { icon: Users, title: "Serviço Concierge", desc: "Atendimento vip 24/7 e tripulação altamente preparada para satisfazer exigências executivas." }
            ].map((item, i) => (
              <div key={i} className="group bg-white/[0.03] backdrop-blur-lg border border-white/10 p-10 rounded-2xl hover:bg-white/[0.08] hover:border-[#C5A059]/40 transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden">
                {/* Glow Effect on Hover */}
                <div className="absolute top-0 right-0 p-8 w-full h-full bg-[#C5A059]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"></div>
                
                <div className="w-16 h-16 bg-[#050A14] rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#C5A059]/50 transition-colors relative overflow-hidden z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/30 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <item.icon size={28} className="text-[#C5A059] relative z-20 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h4 className="font-cinzel text-xl font-bold mb-4 text-slate-100 relative z-10">{item.title}</h4>
                <p className="font-inter text-slate-400 text-sm leading-relaxed font-light relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase da Frota (Bento Grid) */}
      <section id="frota" className="py-32 bg-[#020409]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="md:w-2/3">
              <span className="text-[#C5A059] font-inter uppercase tracking-[0.2em] text-xs font-bold mb-4 block">Tecnologia Automotiva</span>
              <h3 className="font-cinzel text-4xl md:text-5xl font-bold leading-tight">Nossa Frota <span className="text-[#C5A059] italic">Elite</span></h3>
            </div>
            <p className="font-inter text-slate-400 max-w-md text-base md:text-right font-light leading-relaxed md:w-1/3">
              Operamos quase exclusivamente com a linha <strong className="text-white font-medium">Marcopolo G8</strong>, o ápice mundial em engenharia de carrocerias.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Bento Principal - Marcopolo G8 */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group shadow-2xl">
              <img 
                src="/frota.png" 
                alt="Nova Turismo - Marcopolo G8" 
                className="w-full h-full object-cover brightness-50 group-hover:brightness-90 contrast-110 saturate-50 group-hover:saturate-100 group-hover:scale-105 transition-all duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020409] via-[#020409]/50 to-transparent flex flex-col justify-end p-10 md:p-14 z-10">
                <div className="bg-[#C5A059]/20 backdrop-blur-md border border-[#C5A059]/40 text-[#C5A059] text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full inline-flex w-max mb-6">
                  Design Aerodinâmico
                </div>
                <h4 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-4">Linha G8 1800 Double Decker</h4>
                <p className="font-inter text-slate-300 max-w-xl text-sm md:text-base font-light leading-relaxed drop-shadow-md">
                  A oitava geração foi concebida para redefinir o conceito de fluidez. Isolamento acústico aprimorado, suspensão inteligente e climatização independente garantem a viagem mais silenciosa do mercado.
                </p>
              </div>
            </div>

            {/* Bento Adicional 1 - Poltronas */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0e1726] to-[#050A14] border border-white/5 group p-10 flex flex-col justify-center items-start shadow-xl">
              <div className="absolute -right-6 -bottom-6 text-white/[0.02] group-hover:text-[#C5A059]/[0.05] transition-colors pointer-events-none">
                <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                </svg>
              </div>
              <div className="w-14 h-14 bg-black/40 rounded-full flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </div>
              <h4 className="font-cinzel text-2xl font-bold text-white mb-3">Poltronas Leito-Cama</h4>
              <p className="font-inter text-slate-400 text-sm leading-relaxed font-light">
                Reclinação completa de 180 graus com cortinas de privacidade dupla e material antialérgico de alta densidade.
              </p>
            </div>

            {/* Bento Adicional 2 - Conectividade */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#111827] to-[#000] border border-white/5 group p-10 flex flex-col justify-end items-start shadow-xl">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay z-0"></div>
              <div className="flex gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 bg-[#C5A059]/10 rounded-full flex items-center justify-center border border-[#C5A059]/20 backdrop-blur-sm">
                  <Wifi size={20} className="text-[#C5A059]" />
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-sm">
                  <Usb size={20} className="text-white/70" />
                </div>
              </div>
              <h4 className="font-cinzel text-2xl font-bold text-white mb-3 relative z-10">Conectividade Fixa</h4>
              <p className="font-inter text-slate-400 text-sm leading-relaxed font-light relative z-10">
                Internet banda larga intermodal (Starlink), tomadas 110v e USB-C nos assentos. Seu escritório on-the-road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section id="servicos" className="py-32 bg-[#050A14] relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <span className="text-[#C5A059] font-inter uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Especialidades</span>
            <h3 className="font-cinzel text-4xl md:text-5xl font-bold text-white">Portfólio de <span className="text-[#C5A059] italic">Serviços</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: "Fretamento Corporativo", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop", desc: "Transporte regular e pontual de talentos." },
              { title: "Eventos Executivos", img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop", desc: "Logística terrestre vip para convenções." },
              { title: "Turismo de Experiência", img: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop", desc: "Viagens exclusivas com parceiros seletos." },
              { title: "Receptivo Aeroportuário", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop", desc: "Traslados eficientes de Guarulhos e Viracopos." }
            ].map((srv, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[16/10] md:aspect-[21/9] cursor-pointer shadow-xl">
                <img 
                  src={srv.img} 
                  alt={srv.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-[#050A14]/30 to-transparent group-hover:from-[#050A14]/90 transition-all duration-500 flex flex-col justify-end p-10">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="font-cinzel text-3xl font-bold text-white mb-2">{srv.title}</h4>
                    <div className="w-12 h-1 bg-[#C5A059] mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <p className="font-inter text-slate-300 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{srv.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversão (Lead Gen) */}
      <section id="orcamento" className="py-24 bg-[#050A14] relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#C5A059] to-[#99793d] rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
            
            {/* Decorações do Container */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-white opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Context Area */}
            <div className="w-full lg:w-5/12 p-12 md:p-16 text-[#050A14] flex flex-col justify-center relative z-10">
              <h3 className="font-cinzel text-4xl font-bold mb-6">Inicie sua Jornada</h3>
              <p className="font-inter text-[#050A14]/80 text-base mb-10 font-medium leading-relaxed">
                Descreva sua rota. Nossos especialistas em logística vip formatarão uma proposta executiva detalhada em até <strong className="font-bold">30 minutos</strong>.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#050A14]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Shield className="text-[#050A14]" size={24} />
                  </div>
                  <div>
                    <h5 className="font-cinzel font-bold text-lg leading-none mb-1">Sigilo Executivo</h5>
                    <p className="font-inter text-xs text-[#050A14]/70 font-semibold uppercase tracking-wider">Dados resguardados</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-[#050A14]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="text-[#050A14]" size={24} />
                  </div>
                  <div>
                    <h5 className="font-cinzel font-bold text-lg leading-none mb-1">Agilidade Premium</h5>
                    <p className="font-inter text-xs text-[#050A14]/70 font-semibold uppercase tracking-wider">Atendimento Imediato</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Area (O Formulario mantém-se obscuro e elegante) */}
            <div className="w-full lg:w-7/12 p-12 md:p-16 bg-[#0a101d] text-white my-2 lg:my-6 mr-2 lg:mr-6 rounded-[1.5rem] shadow-[-10px_0_30px_rgba(0,0,0,0.3)]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-inter text-xs font-semibold text-slate-400 uppercase tracking-widest pl-1">Origem *</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MapPin size={18} className="text-slate-500 group-focus-within:text-[#C5A059] transition-colors" />
                      </div>
                      <input 
                        type="text" 
                        name="origem"
                        value={formData.origem}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#111827] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-[#C5A059]/50 focus:ring-1 focus:ring-[#C5A059]/50 transition-all placeholder:text-slate-600"
                        placeholder="Cidade de partida"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-inter text-xs font-semibold text-slate-400 uppercase tracking-widest pl-1">Destino *</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Navigation size={18} className="text-slate-500 group-focus-within:text-[#C5A059] transition-colors" />
                      </div>
                      <input 
                        type="text" 
                        name="destino"
                        value={formData.destino}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#111827] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-[#C5A059]/50 focus:ring-1 focus:ring-[#C5A059]/50 transition-all placeholder:text-slate-600"
                        placeholder="Para onde iremos?"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-inter text-xs font-semibold text-slate-400 uppercase tracking-widest pl-1">Identificação *</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User size={18} className="text-slate-500 group-focus-within:text-[#C5A059] transition-colors" />
                    </div>
                    <input 
                      type="text" 
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#111827] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-[#C5A059]/50 focus:ring-1 focus:ring-[#C5A059]/50 transition-all placeholder:text-slate-600"
                      placeholder="Seu Nome Completo ou Empresa"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-inter text-xs font-semibold text-slate-400 uppercase tracking-widest pl-1">Contato Executivo *</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={18} className="text-slate-500 group-focus-within:text-[#C5A059] transition-colors" />
                    </div>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-[#111827] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-[#C5A059]/50 focus:ring-1 focus:ring-[#C5A059]/50 transition-all placeholder:text-slate-600"
                      placeholder="seu.email@corporativo.com"
                    />
                  </div>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-[#C5A059] to-[#8C6D32] text-[#050A14] py-4 rounded-xl font-bold font-inter text-sm tracking-widest uppercase mt-6 hover:brightness-110 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                  Solicitar Proposta
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimalista Elite */}
      <footer className="bg-[#020408] pt-24 pb-10 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/logo.png" alt="Nova Turismo" className="h-16 object-contain mix-blend-screen opacity-80 grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <p className="font-inter text-slate-400 text-sm max-w-md mb-8 font-light leading-relaxed">
                Referência nacional em locação de ônibus de alto padrão. Fretamento corporativo e turismo direcionado a líderes que não abrem mão do absoluto conformo e precisão logística.
              </p>
            </div>
            
            <div>
              <h4 className="font-cinzel text-lg font-bold mb-6 text-white uppercase tracking-widest text-sm">Operações</h4>
              <ul className="space-y-4 font-inter text-sm text-slate-400 font-light">
                <li className="flex items-start gap-3 hover:text-[#C5A059] transition-colors cursor-pointer">
                  <MapPin size={18} className="text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Av. Presidente Juscelino Kubitschek <br className="hidden md:block"/> São Paulo - SP, Brasil</span>
                </li>
                <li className="flex items-center gap-3 hover:text-[#C5A059] transition-colors cursor-pointer">
                  <Mail size={18} className="text-[#C5A059]" />
                  <span>concierge@novaturismo.com.br</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-cinzel text-lg font-bold mb-6 text-white uppercase tracking-widest text-sm">Legal</h4>
              <div className="bg-[#050A14] border border-white/5 p-5 rounded-xl inline-block shadow-inner">
                <span className="text-[10px] text-slate-500 font-inter font-bold tracking-widest block mb-2 uppercase">Licença Federal</span>
                <div className="flex items-center gap-2 text-white font-mono text-sm">
                  <Shield size={14} className="text-[#C5A059]" />
                  ANTT № 00.1234/56
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-inter text-slate-600 text-xs tracking-wider">
              © {new Date().getFullYear()} NOVA TURISMO. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6 text-xs font-inter uppercase tracking-widest text-slate-600 font-semibold">
              <a href="#" className="hover:text-[#C5A059] transition-colors">Termos</a>
              <a href="#" className="hover:text-[#C5A059] transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Flutuante WhatsApp (Design Premium) */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(37,211,102,0.4)] transition-all duration-300 z-50 group border-2 border-transparent hover:border-white/20"
      >
        <MessageCircle size={32} />
        {/* Tooltip Hover */}
        <div className="absolute right-[120%] top-1/2 -translate-y-1/2 px-5 py-3 bg-[#050A14] text-white text-sm font-inter font-semibold rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10 flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]"></span>
          </span>
          Chat Concierge
        </div>
      </a>
    </div>
  );
}