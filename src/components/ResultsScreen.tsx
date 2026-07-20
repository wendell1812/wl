import { motion } from 'motion/react';
import { Award, ShieldAlert, Video, ArrowRight, Zap, Target, Brain, Dumbbell, Activity } from 'lucide-react';
import { QuizAnswers } from '../types';

interface ResultsScreenProps {
  answers: QuizAnswers;
  onContinue: () => void;
}

export default function ResultsScreen({ answers, onContinue }: ResultsScreenProps) {
  // Compute some tactical stats based on answers
  const currentWeight = answers[21] as number || 75;
  const desiredWeight = answers[22] as number || 70;
  const weightDiff = Math.abs(currentWeight - desiredWeight);
  const actionText = currentWeight > desiredWeight ? 'reduzir' : 'ganhar';

  // Attribute meters
  const attributes = [
    { name: 'FORÇA EXPLOSIVA', current: 45, projected: 92, icon: Zap, color: 'text-amber-500' },
    { name: 'RESISTÊNCIA TÁTICA', current: 30, projected: 88, icon: Activity, color: 'text-emerald-500' },
    { name: 'DEFINIÇÃO MUSCULAR', current: 40, projected: 85, icon: Dumbbell, color: 'text-blue-500' },
    { name: 'MENTALIDADE DE COMBATE', current: 50, projected: 98, icon: Brain, color: 'text-purple-500' }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-10 overflow-hidden bg-[#0a0a0a]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#5c7a5c]/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(92,122,92,0.08)_100%)]"></div>
      </div>

      <div className="w-full max-w-4xl relative z-20">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#5c7a5c]/10 border border-[#5c7a5c]/30 mb-6 relative group"
          >
            <div className="absolute inset-0 rounded-full bg-[#5c7a5c]/25 animate-ping opacity-25"></div>
            <Award className="w-12 h-12 text-[#8fb38f]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase font-display"
          >
            RECRUTA <span className="text-[#5c7a5c]">APROVADO!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-neutral-300 font-medium max-w-md mx-auto leading-relaxed"
          >
            O seu perfil atende com excelência aos requisitos para ingressar no{' '}
            <span className="text-white font-extrabold">Protocolo de Forças Especiais</span>.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8">
          {/* Genetic Potential Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="tactical-card p-1 rounded-2xl border-[#5c7a5c]/20 bg-black/40 relative overflow-hidden group"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#5c7a5c] to-transparent shadow-[0_0_15px_#5c7a5c] animate-pulse"></div>
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-5 text-[10px] font-mono text-[#8fb38f] tracking-widest font-black uppercase">
                  <span>SUJEITO: RECRUTA SELECIONADO</span>
                  <span>ID: #9921-A</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Before Frame */}
                  <div className="relative rounded-lg overflow-hidden border border-white/5 bg-zinc-950 aspect-[3/4] group">
                    <img 
                      src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&auto=format&fit=crop&q=80" 
                      alt="Estado Atual" 
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                    <div className="absolute top-2 left-2 bg-black/85 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono font-bold text-white/80 border border-white/15 z-20">
                      ESTADO ATUAL
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center z-20">
                      <span className="text-sm font-black text-neutral-400 font-display tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">BIOTIPO</span>
                      <span className="text-xs font-mono text-red-400 font-bold mt-1 uppercase tracking-wider bg-red-950/60 border border-red-500/30 px-2.5 py-0.5 rounded shadow-sm">
                        ESTAGNADO
                      </span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-black/80 py-1.5 text-center z-20 border-t border-white/5">
                      <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-display">
                        Fase 0
                      </span>
                    </div>
                  </div>

                  {/* After Frame */}
                  <div className="relative rounded-lg overflow-hidden border border-[#5c7a5c]/60 bg-zinc-950 aspect-[3/4] shadow-[0_0_20px_rgba(92,122,92,0.35)] group">
                    <img 
                      src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80" 
                      alt="Evolução Projetada" 
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10"></div>
                    <div className="absolute top-2 right-2 bg-[#5c7a5c] px-2 py-0.5 rounded text-[10px] font-mono font-black text-black z-20 shadow-lg animate-pulse">
                      DADOS PROJETADOS
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center z-20">
                      <span className="text-sm font-black text-[#8fb38f] font-display tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">POTENCIAL</span>
                      <span className="text-xs font-mono text-emerald-400 font-black mt-1 uppercase tracking-wider bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded shadow-sm">
                        DEFINIDO
                      </span>
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-[#5c7a5c]/95 py-1.5 text-center z-20">
                      <span className="text-[10px] font-black text-black uppercase tracking-widest font-display">
                        Fase Final
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-zinc-950/80 rounded-xl border border-white/5 font-mono text-[10px] md:text-xs text-neutral-400 leading-relaxed space-y-2">
                  <p className="text-white font-black border-b border-white/10 pb-2 mb-2 uppercase tracking-widest flex items-center gap-1.5">
                    <span className="text-emerald-500">■</span> DIAGNÓSTICO DE INGRESSO
                  </p>
                  <p>&gt; BIOTIPO REATIVO: <span className="text-emerald-400 font-bold">ALTO POTENCIAL DE DEFINIÇÃO</span></p>
                  <p>&gt; META OPERACIONAL: <span className="text-white font-bold">{actionText.toUpperCase()} {weightDiff} KG</span></p>
                  <p>&gt; VELOCIDADE DE HIPERTROFIA: <span className="text-emerald-400 font-bold">RÁPIDA</span></p>
                  <p>&gt; INDICAÇÃO DE PROTOCOLO: <span className="text-emerald-400 font-bold">CALISTENIA MILITAR DE 21 DIAS</span></p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Attributes and Progress Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="tactical-card p-6 md:p-8 rounded-2xl border-white/5 bg-black/40 flex flex-col justify-center"
          >
            <div className="text-[#8fb38f] font-mono text-xs tracking-[0.2em] mb-6 font-black uppercase flex items-center gap-2">
              <Zap className="w-4 h-5 text-[#8fb38f]" /> EVOLUÇÃO PROJETADA DE ATRIBUTOS
            </div>

            <div className="space-y-6">
              {attributes.map((attr, idx) => {
                const Icon = attr.icon;
                return (
                  <div key={idx}>
                    <div className="flex justify-between text-xs md:text-sm font-bold text-white mb-2 items-center font-display tracking-wide">
                      <span className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${attr.color}`} />
                        {attr.name}
                      </span>
                      <div className="flex gap-3 font-mono text-[10px] font-bold">
                        <span className="text-neutral-500">ATUAL: {attr.current}%</span>
                        <span className="text-[#8fb38f]">ALVO: {attr.projected}%</span>
                      </div>
                    </div>

                    <div className="h-4 bg-white/5 rounded-md overflow-hidden relative flex gap-0.5 p-0.5 border border-white/5">
                      <div className="absolute inset-0 flex gap-0.5 px-1 py-0.5 pointer-events-none">
                        {Array.from({ length: 15 }).map((_, i) => (
                          <div key={i} className="flex-1 h-full bg-white/[0.02]" />
                        ))}
                      </div>

                      {/* Current level meter */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${attr.current}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-neutral-600 rounded-sm relative z-10"
                      />

                      {/* Projected level meter */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${attr.projected - attr.current}%` }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-[#5c7a5c] rounded-sm relative z-10 shadow-[0_0_10px_#5c7a5c]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-[10px] font-mono text-neutral-500 mt-6 leading-tight uppercase tracking-wider text-center">
              *OS ATRIBUTOS PROJETADOS BASEIAM-SE NO COMPROMETIMENTO TOTAL COM O PROTOCOLO DE 21 DIAS.
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <button
            onClick={onContinue}
            className="w-full md:w-auto text-black font-black px-12 md:px-20 py-4 md:py-5 text-base md:text-xl rounded-xl transition-all transform hover:scale-[1.03] active:scale-95 text-center uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,100,0,0.3)] cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, #ff4d00 0%, #ff9900 50%, #ffd400 100%)',
              border: '1px solid rgba(255,140,0,0.3)'
            }}
          >
            DESBLOQUEAR MEU PROTOCOLO
          </button>
          <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">
            Acesso Restrito • Personalizado • Garantido por Lei
          </span>
        </motion.div>
      </div>
    </div>
  );
}
