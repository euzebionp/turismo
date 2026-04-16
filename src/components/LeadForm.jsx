'use client';
import { useState } from 'react';
import { MapPin, Navigation, User, Mail, Shield, Clock } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({ origem: '', destino: '', nome: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sua requisição foi processada com sucesso no Console Integrado. Nossa equipe entrará em contato via e-mail.');
    setFormData({ origem: '', destino: '', nome: '', email: '' });
  };

  return (
    <section id="orcamento" className="py-24 bg-[#050A14] relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#C5A059] to-[#99793d] rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="w-full lg:w-5/12 p-12 md:p-16 text-[#050A14] flex flex-col justify-center relative z-10">
            <h3 className="font-cinzel text-4xl font-bold mb-6">Inicie sua Jornada VIP</h3>
            <p className="font-inter text-[#050A14]/80 text-base mb-10 font-medium leading-relaxed">
              Descreva sua rota. Nossos especialistas em logística vip formatarão uma proposta executiva premium.
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
                      type="text" name="origem" value={formData.origem} onChange={handleInputChange} required
                      className="w-full bg-[#111827] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-[#C5A059]/50 focus:ring-1 focus:ring-[#C5A059]/50 transition-all placeholder:text-slate-600"
                      placeholder="Sua Partida"
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
                      type="text" name="destino" value={formData.destino} onChange={handleInputChange} required
                      className="w-full bg-[#111827] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-[#C5A059]/50 focus:ring-1 focus:ring-[#C5A059]/50 transition-all placeholder:text-slate-600"
                      placeholder="Seu Destino"
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
                  <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} required className="w-full bg-[#111827] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none placeholder:text-slate-600" placeholder="Seu Nome Completo" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-inter text-xs font-semibold text-slate-400 uppercase tracking-widest pl-1">E-mail *</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail size={18} className="text-slate-500 group-focus-within:text-[#C5A059] transition-colors" />
                  </div>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-[#111827] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none placeholder:text-slate-600" placeholder="seu.email@corp.com" />
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
  );
}
