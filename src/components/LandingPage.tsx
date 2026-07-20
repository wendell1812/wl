import { motion } from 'motion/react';
import img18_29 from '../assets/images/calisthenics_18_29_1784155796585.jpg';
import img30_39 from '../assets/images/calisthenics_30_39_1784155808180.jpg';
import img40_49 from '../assets/images/calisthenics_40_49_1784155817641.jpg';
import img50plus from '../assets/images/calisthenics_50plus_1784155827917.jpg';

interface AgeOption {
  value: number;
  label: string;
  gradient: string;
  desc: string;
  image: string;
}

const AGE_OPTIONS: AgeOption[] = [
  { value: 1, label: '18 - 29', gradient: 'from-emerald-600/40 to-[#0a0c0a]', desc: 'Foco em força máxima e explosão muscular', image: img18_29 },
  { value: 2, label: '30 - 39', gradient: 'from-[#5c7a5c]/40 to-[#0a0c0a]', desc: 'Otimização metabólica e definição acelerada', image: img30_39 },
  { value: 3, label: '40 - 49', gradient: 'from-amber-600/30 to-[#0a0c0a]', desc: 'Resistência operacional e fortalecimento de articulações', image: img40_49 },
  { value: 4, label: '50+', gradient: 'from-zinc-600/40 to-[#0a0c0a]', desc: 'Mobilidade tática, vitalidade e preservação muscular', image: img50plus }
];

interface LandingPageProps {
  onStart: (ageValue: number) => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative font-sans selection:bg-[#5c7a5c] selection:text-black flex flex-col items-center justify-center py-12 px-4">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#5c7a5c]/15 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(92,122,92,0.08)_100%)]"></div>
      </div>

      <div className="text-center mb-10 relative z-10 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 bg-red-950/40 rounded border border-red-500/35 backdrop-blur-sm shadow-[0_0_15px_rgba(239,68,68,0.12)]"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]"></span>
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-red-400 font-black font-mono">
            ALERTA DE CONVOCAÇÃO: ATITUDE IMEDIATA_
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#8fb38f] text-xs md:text-sm font-black uppercase tracking-wider mb-4 flex items-center justify-center gap-2"
        >
          <span>✊ FORJADO NO FOGO</span>
          <span className="text-zinc-700">|</span>
          <span>🛡️ MÉTODO COMPROVADO</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight leading-tight uppercase font-display max-w-2xl mx-auto"
        >
          <span className="block text-white/90">PARE DE SE OLHAR NO ESPELHO E VER SEMPRE O</span>
          <span className="text-red-500 block md:inline relative inline-block mx-1 drop-shadow-[0_0_20px_rgba(239,68,68,0.45)]">
            MESMO FÍSICO CANSADO
          </span>{' '}
          <span className="block md:inline text-white">E SEM VITALIDADE</span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="h-1 bg-gradient-to-r from-transparent via-[#5c7a5c] to-transparent mx-auto my-5"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-sm md:text-base text-neutral-300 max-w-xl mx-auto mb-8 leading-relaxed font-medium"
        >
          Chega de estagnação. Resgate o respeito diante do espelho, vista sua farda de combate diária e transforme flacidez em puro músculo denso em 21 dias com o lendário Protocolo de Calistenia Militar.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-sm md:text-base font-bold text-white/95 uppercase tracking-wider bg-zinc-950/60 py-2 px-4 rounded border border-white/5 inline-block"
        >
          Selecione sua idade para começar:
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10 px-2"
      >
        {AGE_OPTIONS.map((opt, index) => (
          <button
            key={opt.value}
            onClick={() => onStart(opt.value)}
            className="group relative w-full h-[220px] sm:h-[260px] bg-zinc-900/30 backdrop-blur-sm border border-[#5c7a5c]/25 hover:border-[#5c7a5c] transition-all duration-300 ease-out overflow-hidden flex flex-col justify-end text-left shadow-[0_0_15px_rgba(92,122,92,0.05)] hover:shadow-[0_0_25px_rgba(92,122,92,0.3)] rounded-xl cursor-pointer"
          >
            {/* Background Image, Gradient & Pattern */}
            <div className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-105">
              <img
                src={opt.image}
                alt={`Grupo de idade ${opt.label}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-[0.35] group-hover:grayscale-0 group-hover:brightness-[0.55] transition-all duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${opt.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-300 z-10`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(92,122,92,0.12)_100%)] z-10 pointer-events-none"></div>
            </div>

            {/* Content overlay */}
            <div className="relative z-20 w-full p-5 border-t border-[#5c7a5c]/20 bg-black/55 backdrop-blur-md group-hover:bg-[#5c7a5c]/95 transition-all duration-300">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono uppercase text-[#8fb38f] group-hover:text-zinc-950 font-bold tracking-widest">
                  Fase de Recrutamento
                </span>
                <span className="text-xl font-extrabold text-white group-hover:text-black drop-shadow-md">
                  Idade: {opt.label}
                </span>
                <p className="text-[10px] leading-tight text-neutral-400 group-hover:text-zinc-900 font-medium transition-colors mt-1">
                  {opt.desc}
                </p>
              </div>

              {/* Indicator Dot */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2.5 h-2.5 bg-black rounded-full animate-ping"></div>
              </div>
            </div>
          </button>
        ))}
      </motion.div>
    </div>
  );
}
