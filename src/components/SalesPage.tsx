import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, X, ShieldCheck, Dumbbell, Star, ChevronDown, Award, Calendar, Heart, Shield, Sparkles, Smartphone, Users, Zap, Video } from 'lucide-react';
import AccordionFAQ from './AccordionFAQ';
import UrgencyBar from './UrgencyBar';
import NotificationWidget from './NotificationWidget';

interface SalesPageProps {
  onRestart: () => void;
  hideFace?: boolean;
}

export default function SalesPage({ onRestart, hideFace = false }: SalesPageProps) {
  const checkoutUrl = 'https://pay.cakto.com.br/zufcxcw_983740';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f110f] text-[#e0e2e0] overflow-hidden font-sans relative selection:bg-[#5c7a5c] selection:text-black">
      {/* Background noise grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* Floating Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-color-dodge">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[90%] h-[50%] bg-[#5c7a5c]/20 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-[#5c7a5c]/10 blur-[100px] rounded-full"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 px-4 z-10 max-w-5xl mx-auto text-center">
        {/* secret document tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-950/40 border border-red-500/35 rounded mb-6 text-red-400 text-xs font-mono tracking-widest font-black uppercase shadow-[0_0_15px_rgba(239,68,68,0.12)]">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]"></span>
          &gt; ALERTA DE CONVOCAÇÃO: ATITUDE IMEDIATA_
        </div>

        {/* Credentials Badges */}
        <div className="flex justify-center gap-3 md:gap-6 mb-8 flex-wrap">
          <div className="bg-[#5c7a5c]/10 border border-[#5c7a5c]/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
            <span className="text-[#8fb38f] text-xs md:text-sm font-black tracking-wider uppercase">✊ FORJADO NO FOGO</span>
          </div>
          <div className="bg-[#5c7a5c]/10 border border-[#5c7a5c]/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
            <span className="text-[#8fb38f] text-xs md:text-sm font-black tracking-wider uppercase">🛡️ MÉTODO COMPROVADO</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight uppercase font-display max-w-4xl mx-auto">
          PARE DE SE OLHAR NO ESPELHO E VER SEMPRE O <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.45)]">MESMO FÍSICO CANSADO</span> <br />
          <span className="text-white">E SEM VITALIDADE</span>
        </h1>

        <p className="text-base md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
          Chega de estagnação. Resgate o respeito diante do espelho, vista sua farda de combate diária e transforme flacidez em puro músculo denso em 21 dias com o lendário <strong className="text-[#8fb38f] underline decoration-[#5c7a5c]">Protocolo de Calistenia Militar</strong>.
        </p>

        <div className="bg-[#1a4d1a]/20 border border-[#5c7a5c]/30 rounded-xl p-4 max-w-2xl mx-auto mb-10 backdrop-blur-sm">
          <p className="text-[#8fb38f] text-sm md:text-base font-bold italic tracking-wide">
            "Este protocolo não é sobre 'ficar exausto'. É sobre se tornar forte, focado e operacional."
          </p>
        </div>
      </section>

      {/* CORE OFFER SECTION */}
      <section className="py-8 px-4 z-10 max-w-3xl mx-auto relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-[#1a4d1a] text-white font-black text-xs md:text-sm px-6 py-2 rounded-md tracking-widest border-2 border-black shadow-[0_0_20px_rgba(92,122,92,0.6)] uppercase flex items-center gap-2 whitespace-nowrap font-display">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            ACESSO AUTORIZADO
          </div>
        </div>

        <div className="bg-[#050505] border-2 border-[#5c7a5c]/45 rounded-3xl p-1.5 relative overflow-hidden group shadow-[0_0_50px_rgba(92,122,92,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#5c7a5c]/10 via-transparent to-[#5c7a5c]/5 opacity-30 group-hover:opacity-50 transition-opacity duration-1000"></div>
          
          <div className="bg-[#0a0a0a] rounded-2xl p-6 md:p-10 relative overflow-hidden border border-white/5">
            {/* Grid watermark */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(92, 122, 92, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(92, 122, 92, 0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

            <div className="text-center mb-8 relative z-10">
              <div className="inline-block border border-[#5c7a5c]/40 bg-[#5c7a5c]/10 px-3.5 py-1 rounded-md mb-4">
                <span className="text-[#8fb38f] text-[10px] font-mono tracking-[0.25em] font-black uppercase">
                  ARQUIVO CLASSIFICADO #8821
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 italic font-display uppercase tracking-tight">
                PROTOCOLO COMPLETO
              </h3>
              <p className="text-xs text-neutral-400 font-mono tracking-widest uppercase">
                CALISTENIA MILITAR DE 21 DIAS
              </p>

              {/* Price Panel */}
              <div className="relative bg-zinc-950/70 border border-white/10 rounded-2xl p-6 md:p-8 mt-6 backdrop-blur-sm max-w-sm mx-auto shadow-inner">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#5c7a5c]/60"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#5c7a5c]/60"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#5c7a5c]/60"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#5c7a5c]/60"></div>

                <div className="flex flex-col items-center justify-center">
                  <span className="text-neutral-500 text-xs line-through decoration-red-500 decoration-2 font-mono mb-1">
                    De R$ 197,00
                  </span>
                  <div className="flex items-end justify-center gap-1.5 mb-1">
                    <span className="text-neutral-400 text-sm font-bold mb-1.5">Apenas</span>
                    <span className="text-5xl md:text-6xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] font-display">
                      R$ 9
                    </span>
                    <span className="text-lg font-extrabold text-white mb-1.5">,90</span>
                    <span className="text-xs text-[#8fb38f] font-bold bg-[#5c7a5c]/20 px-2 py-0.5 rounded ml-1 mb-1.5">
                      VITALÍCIO
                    </span>
                  </div>
                  <p className="text-neutral-400 text-[10px] font-mono mt-1">
                    Pagamento único, sem mensalidades táticas adicionais.
                  </p>
                </div>
              </div>
            </div>

            {/* Core features bullets */}
            <div className="space-y-4 mb-10 max-w-md mx-auto relative z-10">
              {[
                { text: 'Plano de Treino Tático de 21 Dias', icon: '⚡' },
                { text: 'Vídeos Demonstrativos Completos', icon: '🎥' },
                { text: 'Sistema de Gamificação e Conquistas', icon: '🎮' },
                { text: 'Suporte Prioritário da Tropa', icon: '📡' },
                { text: 'Garantia Incondicional de 7 Dias', icon: '🛡️' }
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3.5 group/item">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-base group-hover/item:border-[#5c7a5c]/50 group-hover/item:bg-[#5c7a5c]/10 transition-all duration-300">
                    {feat.icon}
                  </div>
                  <span className="text-neutral-200 text-base md:text-lg font-semibold group-hover/item:text-white transition-colors">
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Buy Button */}
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full group/btn relative overflow-hidden rounded-xl bg-[#1a4d1a] py-4.5 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_25px_rgba(26,77,26,0.5)] hover:shadow-[0_0_40px_rgba(26,77,26,0.8)] border-2 border-white/20 text-center cursor-pointer"
            >
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-white font-black text-lg md:text-xl tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] font-display">
                  INICIAR MISSÃO AGORA
                </span>
                <ArrowRight className="w-5 h-5 text-white stroke-[3px] group-hover/btn:translate-x-1.5 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </a>

            {/* Footer Trust badging */}
            <div className="mt-8 flex items-center justify-between text-[9px] md:text-[10px] text-neutral-500 font-mono border-t border-white/5 pt-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>COMPRA 100% SEGURA</span>
              </div>
              <div className="flex items-center gap-1">
                <span>CONEXÃO CRIPTOGRAFADA SSL</span>
              </div>
              <span>ID OPERACIONAL: 99-21-X</span>
            </div>
          </div>
        </div>
      </section>

      {/* VS COMPARISON SECTION */}
      <section className="py-16 px-4 z-10 max-w-4xl mx-auto relative">
        <h3 className="text-center text-2xl md:text-3xl font-black text-white mb-10 uppercase tracking-widest font-display">
          <span className="text-[#5c7a5c] mr-2">VS</span> ANÁLISE TÁTICA
        </h3>

        <div className="space-y-4">
          {[
            { civil: '😵‍💫 Treinar sem rumo ou progresso', militar: '🎯 Treinos guiados com foco operacional' },
            { civil: '😔 Treinar isolado e sem motivação', militar: '🪖 Comunidade exclusiva de Recrutas "Tropa"' },
            { civil: '📉 Sem evolução ou estagnação rápida', militar: '📈 Protocolo adaptado ao seu biotipo' },
            { civil: '🐌 Resultados lentos que desanimam', militar: '⚡ Físico trincado em apenas 21 dias' },
            { civil: '💸 Mensalidades caras em academias', militar: '🏠 Praticidade total para treinar em casa' }
          ].map((item, idx) => (
            <div key={idx} className="grid grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 items-center">
              {/* Civil Side */}
              <div className="bg-red-950/15 border border-red-900/20 p-4 rounded-l-xl text-right relative overflow-hidden group">
                <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors duration-300"></div>
                <span className="text-red-500 text-[10px] font-black tracking-widest uppercase block mb-1">CIVIL</span>
                <span className="text-neutral-300 text-xs md:text-sm font-medium leading-relaxed">{item.civil}</span>
              </div>

              {/* VS Divider */}
              <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-neutral-500 text-xs font-bold font-mono shadow-md z-10 flex-shrink-0">
                VS
              </div>

              {/* Military Side */}
              <div className="bg-[#5c7a5c]/10 border border-[#5c7a5c]/30 p-4 rounded-r-xl text-left relative overflow-hidden group shadow-[0_0_15px_rgba(92,122,92,0.05)]">
                <div className="absolute inset-0 bg-[#5c7a5c]/5 group-hover:bg-[#5c7a5c]/10 transition-colors duration-300"></div>
                <span className="text-[#8fb38f] text-[10px] font-black tracking-widest uppercase block mb-1">MILITAR</span>
                <span className="text-white text-xs md:text-sm font-bold leading-relaxed">{item.militar}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROOF & TRANSFORMATIONS SECTION */}
      <section className="py-16 px-4 z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-black text-white mb-3 font-display uppercase tracking-tight">
          RESULTADOS <span className="text-[#5c7a5c]">COMPROVADOS</span>
        </h2>
        <p className="text-sm md:text-base text-neutral-400 max-w-lg mx-auto mb-10">
          Veja a evolução real de quem seguiu o Protocolo Calistenia Militar à risca
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: 'AGENTE 01', days: '18 DIAS', color: 'from-[#5c7a5c]/20 to-zinc-950', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop&q=80' },
            { label: 'AGENTE 02', days: '21 DIAS', color: 'from-[#5c7a5c]/20 to-zinc-950', image: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?w=400&auto=format&fit=crop&q=80' },
            { label: 'AGENTE 03', days: '33 DIAS', color: 'from-[#5c7a5c]/20 to-zinc-950', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&auto=format&fit=crop&q=80' },
            { label: 'AGENTE 04', days: '45 DIAS', color: 'from-[#5c7a5c]/20 to-zinc-950', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&auto=format&fit=crop&q=80' }
          ].map((agent, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm transition-all duration-500 hover:border-[#5c7a5c]/50 hover:shadow-[0_0_20px_rgba(92,122,92,0.25)]"
            >
              <div className="absolute inset-0 z-20 pointer-events-none border border-white/5 m-1 rounded-lg"></div>
              
              <div className="aspect-[3/4] relative overflow-hidden bg-zinc-950 flex flex-col justify-center items-center p-4">
                {/* Background Athlete Image */}
                <img 
                  src={agent.image} 
                  alt={agent.label} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 z-0"
                />
                
                {/* Gradient and grid overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${agent.color} opacity-90 z-0`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>
                
                {/* Tactical target overlay (acts as focus indicator) */}
                <div className="w-16 h-16 rounded-full border border-dashed border-[#5c7a5c]/45 flex items-center justify-center animate-spin z-10 opacity-70 group-hover:scale-110 transition-transform duration-500" style={{ animationDuration: '20s' }}>
                  <div className="w-10 h-10 rounded-full border border-dashed border-[#5c7a5c]/35"></div>
                </div>

                <div className="absolute bottom-4 left-0 right-0 text-center z-30 px-2">
                  <div className="text-xs text-white font-mono tracking-widest font-black uppercase mb-1 drop-shadow-md">
                    {agent.label}
                  </div>
                  <div className="inline-block bg-[#1a4d1a]/90 backdrop-blur-sm border border-[#5c7a5c]/60 px-3 py-1 rounded text-xs font-black text-white tracking-widest shadow-lg">
                    {agent.days}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-neutral-500 text-[10px] md:text-xs mt-6 font-mono tracking-widest uppercase">
          // CLASSIFICADO: OS RESULTADOS INDIVIDUAIS PODEM VARIAR DE ACORDO COM A GENÉTICA E INTENSIDADE //
        </p>
      </section>

      {/* CURRENT REALITY VS BRUTAL TRUTH SECTION */}
      <section className="py-16 px-4 z-10 max-w-3xl mx-auto relative">
        <div className="bg-[#0a0c0a] border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="p-8 md:p-10 relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-950/40 border border-red-500/20 p-2.5 rounded-xl text-red-500">
                <X className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-wide uppercase font-display">
                REALIDADE ATUAL
              </h3>
            </div>

            <ul className="space-y-5">
              {[
                'Você treina pesado, mas o seu físico continua com visual flácido e estagnado?',
                'Já tentou diversas rotinas e dietas restritivas e o seu corpo simplesmente não responde?',
                'Está cansado de se esforçar no supino e agachamento sem ver resultados reais de definição?'
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></span>
                  <p className="text-neutral-300 text-base leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-px bg-white/5 mx-8"></div>

          <div className="p-8 md:p-10 relative z-10 bg-white/[0.015]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-500/10 border border-[#5c7a5c]/40 p-2.5 rounded-xl text-emerald-400">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white tracking-wide uppercase font-display">
                A VERDADE BRUTAL
              </h3>
            </div>

            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p className="text-neutral-300 font-medium">
                A maioria das fichas de academia tradicionais é planejada para que você passe{' '}
                <span className="text-red-400 font-bold">horas gastando energia sem foco</span>.
              </p>
              <p className="text-white font-extrabold flex flex-wrap items-center gap-1">
                O Protocolo Calistenia Militar foi desenhado para{' '}
                <span className="bg-[#1a4d1a] text-white px-2.5 py-0.5 rounded border border-[#5c7a5c]/30 font-black tracking-wider uppercase">
                  FORJAR
                </span>{' '}
                um corpo definido e resistente no menor tempo possível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APP MOCKUP SECTION */}
      <section className="py-16 relative z-10 bg-[#5c7a5c]/3">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#5c7a5c]/10 border border-[#5c7a5c]/30 px-3.5 py-1 rounded-full mb-6">
            <Smartphone className="w-4 h-4 text-[#8fb38f]" />
            <span className="text-[#8fb38f] text-[10px] md:text-xs font-mono font-black tracking-widest uppercase">
              CENTRO DE COMANDO PESSOAL
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase font-display">
            SUA MISSÃO NO SEU <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5c7a5c] to-white drop-shadow-[0_0_15px_rgba(92,122,92,0.3)]">BOLSO</span>
          </h2>
          <p className="text-neutral-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-12">
            Acesso imediato e interface 100% responsiva para você treinar a qualquer hora, de qualquer lugar, acompanhando sua evolução de perto.
          </p>

          {/* Graphical Mockup Representation */}
          <div className="relative max-w-md mx-auto mb-10 px-4">
            <div className="absolute inset-0 bg-[#5c7a5c]/10 blur-[100px] rounded-full z-0"></div>
            
            {/* Visual Phone Frame */}
            <div className="relative z-10 bg-zinc-950 border-4 border-zinc-800 rounded-[2.5rem] p-3 shadow-2xl max-w-xs mx-auto">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-28 bg-zinc-800 rounded-b-xl"></div>
              
              <div className="bg-[#0a0c0a] rounded-[2rem] p-4 text-left overflow-hidden border border-white/5 aspect-[9/18]">
                {/* App Header */}
                <div className="flex justify-between items-center mb-6 pt-3">
                  <span className="text-[#8fb38f] font-mono text-[9px] font-black">OP. CALISTENIA MILITAR</span>
                  <span className="text-neutral-500 text-[9px] font-mono">V21.4</span>
                </div>

                {/* Dashboard stats */}
                <div className="bg-zinc-900/80 rounded-xl p-3 border border-white/5 mb-4">
                  <span className="text-neutral-500 text-[8px] font-mono">MISSÃO DIÁRIA</span>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-white font-extrabold text-sm font-display">FASE 01 - DIA 01</span>
                    <span className="text-[#8fb38f] text-[10px] font-mono font-bold">ATIVA</span>
                  </div>
                </div>

                {/* Exercise preview */}
                <div className="space-y-2 mb-6">
                  <span className="text-neutral-500 text-[8px] font-mono">CRONOGRAMA DE HOJE</span>
                  <div className="bg-zinc-900/40 p-2.5 rounded-lg border border-[#5c7a5c]/15 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#5c7a5c]"></div>
                    <span className="text-xs text-white font-bold">1. Flexões Operacionais - 4x15</span>
                  </div>
                  <div className="bg-zinc-900/40 p-2.5 rounded-lg border border-[#5c7a5c]/15 flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#5c7a5c]"></div>
                    <span className="text-xs text-white font-bold">2. Agachamento com Salto - 4x12</span>
                  </div>
                </div>

                {/* Bottom button */}
                <div className="w-full bg-[#1a4d1a] py-2.5 rounded-lg text-center font-black text-[10px] text-white tracking-widest uppercase border border-white/10 mt-auto">
                  INICIAR MISSÃO DO DIA
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 text-left">
            {[
              { title: '+100 Exercícios', desc: 'Variações exclusivas com progressão tática.', icon: Dumbbell },
              { title: 'Vídeos Demonstrativos', desc: 'Explicações em HD com postura correta.', icon: Video },
              { title: 'Acesso Vitalício', desc: 'Compre uma única vez e use para sempre.', icon: Calendar },
              { title: 'Comunidade VIP', desc: 'Troque experiências diretamente com outros recrutas.', icon: Users }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-zinc-900/40 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
                  <Icon className="w-6 h-6 text-[#8fb38f] mb-2" />
                  <h4 className="text-white text-sm font-bold font-display uppercase tracking-wide mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BONUSES SECTION */}
      <section className="py-16 px-4 z-10 max-w-4xl mx-auto relative">
        <h2 className="text-2xl md:text-4xl font-black text-center text-white mb-10 uppercase tracking-tight font-display">
          EXCLUSIVO: BÔNUS <span className="text-[#5c7a5c]">DE RECOMPENSA</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: 'Guia de Recuperação Muscular',
              desc: 'Recupere-se como um verdadeiro atleta de elite! Técnicas fundamentais de alongamento, alívio de dor e prevenção de lesões operacionais.',
              value: 'R$ 47,00',
              emoji: '🧘'
            },
            {
              title: 'Café de Combate Termogênico',
              desc: 'A receita termogênica secreta para queimar gordura aceleradamente e focar no treino de calistenia, sem suplementos caros.',
              value: 'R$ 97,00',
              emoji: '☕'
            },
            {
              title: 'Next-Level Avançado',
              desc: 'Passou dos 21 dias? Avance para rotinas de extrema intensidade física de forma totalmente programada.',
              value: 'R$ 147,00',
              emoji: '🚀'
            },
            {
              title: 'Mapa de Progresso Tático',
              desc: 'A planilha diária de mapeamento para você medir sua definição, perda de gordura e peso de forma simples e visual.',
              value: 'R$ 47,00',
              emoji: '🗺️'
            }
          ].map((bonus, idx) => (
            <div key={idx} className="tactical-card p-6 md:p-8 rounded-xl border-[#5c7a5c]/25 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-[#5c7a5c]/20 rounded-xl flex items-center justify-center text-3xl mb-4 border border-[#5c7a5c]/30 shadow-inner">
                  {bonus.emoji}
                </div>
                <h3 className="text-lg md:text-xl font-black text-white mb-2 font-display uppercase tracking-wide">
                  {bonus.title}
                </h3>
                <p className="text-neutral-300 text-xs md:text-sm leading-relaxed mb-6">
                  {bonus.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-neutral-500 line-through text-xs font-mono">
                  {bonus.value}
                </span>
                <span className="text-[#8fb38f] font-black text-sm md:text-base uppercase tracking-widest bg-[#1a4d1a]/30 px-3 py-1 rounded border border-[#5c7a5c]/30">
                  GRÁTIS HOJE
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#8fb38f] text-base md:text-xl font-bold font-display uppercase tracking-wide">
            🎁 Economia total de <span className="underline decoration-[#5c7a5c]">R$ 338,00</span> em bônus exclusivos inclusos sem custo adicional!
          </p>
        </div>

        {/* CTA Button 2 */}
        <div className="mt-12 flex justify-center">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md text-black font-black py-4.5 rounded-xl transition-all transform hover:scale-105 active:scale-95 text-center uppercase tracking-widest text-sm md:text-base shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #ff4d00 0%, #ff9900 50%, #ffd400 100%)',
              boxShadow: '0 6px 20px rgba(255,120,0,0.25), 0 0 10px rgba(255,200,80,0.1)',
              border: '1px solid rgba(255,140,0,0.2)'
            }}
          >
            🔥 GARANTA SEUS BÔNUS AGORA
          </a>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-16 px-4 z-10 max-w-4xl mx-auto relative">
        <h2 className="text-2xl md:text-4xl font-black text-center text-white mb-2 font-display uppercase tracking-tight">
          RESULTADOS QUE NOS <span className="text-[#5c7a5c]">ORGULHAM</span>
        </h2>
        <p className="text-center text-neutral-400 mb-10 text-sm md:text-base">
          Opiniões reais de quem seguiu o protocolo militar de calistenia
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              name: 'Paulo',
              age: '39 anos',
              title: '"Valeu muito a pena tentar!"',
              text: 'Sempre treinei com pesos na academia tradicional, mas um amigo me falou sobre o Protocolo Militar e resolvi testar em casa. Estou impressionado com a praticidade! Agora treino no meu tempo e sinto uma força e densidade que nunca tive.',
              initial: 'P'
            },
            {
              name: 'Rodrigo',
              age: '41 anos',
              title: '"Incrível e sem lesões!"',
              text: 'Já havia tentado diversos treinos de musculação, mas a calistenia militar foi a única atividade física que me ajudou a emagrecer sem causar dores nas articulações ou joelhos. Perdi 8kg em apenas 4 semanas de rotina! Super recomendo.',
              initial: 'R'
            }
          ].map((review, idx) => (
            <div key={idx} className="tactical-card p-6 md:p-8 rounded-xl border-[#5c7a5c]/25">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#5c7a5c]/20 border border-[#5c7a5c]/40 flex items-center justify-center text-white font-extrabold text-base">
                  {review.initial}
                </div>
                <div>
                  <h4 className="text-white text-base font-bold font-display uppercase">
                    {review.name}
                  </h4>
                  <p className="text-neutral-500 text-xs font-mono uppercase tracking-wider">
                    {review.age}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-[#8fb38f] font-bold text-sm md:text-base mb-1.5">
                  {review.title}
                </p>
                <p className="text-neutral-300 text-xs md:text-sm leading-relaxed italic">
                  {review.text}
                </p>
              </div>

              <div className="flex gap-0.5 text-[#8fb38f]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-4 z-10 max-w-3xl mx-auto relative mb-24">
        <h2 className="text-2xl md:text-4xl font-black text-center text-white mb-10 font-display uppercase tracking-tight">
          PERGUNTAS <span className="text-[#5c7a5c]">FREQUENTES</span>
        </h2>

        <div className="space-y-4">
          <AccordionFAQ
            question="Preciso de algum tipo de equipamento?"
            answer="Não. O Protocolo Calistenia Militar foi desenvolvido especificamente para utilizar apenas o peso do seu próprio corpo. Você pode realizar todas as rotinas em casa, no parque, em hotéis ou onde achar mais conveniente."
          />
          <AccordionFAQ
            question="O protocolo é adequado para iniciantes?"
            answer="Sim! O cronograma inclui progressões detalhadas. Você começará da base de acordo com sua idade e condicionamento atual, e avançará gradativamente conforme o seu corpo for ganhando força e resistência muscular."
          />
          <AccordionFAQ
            question="Quanto tempo dura cada sessão de treino?"
            answer="Os treinos foram pensados para serem eficientes e táticos. Cada sessão dura entre 20 e 40 minutos diários, encaixando-se perfeitamente mesmo na rotina mais ocupada."
          />
          <AccordionFAQ
            question="Como funciona a garantia de satisfação?"
            answer="Oferecemos uma garantia incondicional de 7 dias, resguardada por lei. Se você testar o protocolo e achar que não é para você, basta solicitar o reembolso e devolveremos 100% do valor pago imediatamente, sem burocracias."
          />
        </div>
      </section>

      {/* Dynamic widgets and bar */}
      <UrgencyBar checkoutUrl={checkoutUrl} />
      <NotificationWidget />
    </div>
  );
}
