import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Eye, Fingerprint, Calendar, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';

interface TaskState {
  id: number;
  text: string;
  icon: any;
  status: 'pending' | 'active' | 'completed';
}

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [tasks, setTasks] = useState<TaskState[]>([
    { id: 1, text: 'ANALISANDO PERFIL TÁTICO', icon: Eye, status: 'active' },
    { id: 2, text: 'GERANDO PROTOCOLO MILITAR', icon: Fingerprint, status: 'pending' },
    { id: 3, text: 'PREPARANDO SUA MISSÃO DE 21 DIAS', icon: Calendar, status: 'pending' },
    { id: 4, text: 'FINALIZANDO SEU RECRUTAMENTO', icon: ShieldCheck, status: 'pending' }
  ]);

  useEffect(() => {
    // Increment progress smoothly over 6 seconds
    const duration = 6000;
    const intervalTime = 50;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          // Complete final task and finish loading
          setTasks((current) =>
            current.map((t) => ({ ...t, status: 'completed' }))
          );
          setTimeout(() => {
            onComplete();
          }, 800);
          return 100;
        }

        // Handle task status updates based on progress thresholds
        setTasks((current) =>
          current.map((task) => {
            if (next >= 75) {
              if (task.id === 4) return { ...task, status: 'active' };
              return { ...task, status: 'completed' };
            }
            if (next >= 50) {
              if (task.id === 3) return { ...task, status: 'active' };
              if (task.id < 3) return { ...task, status: 'completed' };
            }
            if (next >= 25) {
              if (task.id === 2) return { ...task, status: 'active' };
              if (task.id < 2) return { ...task, status: 'completed' };
            }
            return task;
          })
        );

        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#5c7a5c]/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-xl w-full p-1"
      >
        <div className="bg-black/85 backdrop-blur-xl border border-[#5c7a5c]/20 rounded-2xl p-6 md:p-10 shadow-[0_0_50px_rgba(92,122,92,0.1)] overflow-hidden relative">
          <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(92,122,92,0.03)_50%,transparent_100%)] bg-[length:100%_4px] opacity-50 pointer-events-none animate-scan"></div>

          <div className="text-center mb-10 relative">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-[#5c7a5c]/10 border border-[#5c7a5c]/20">
              <div className="w-1.5 h-1.5 rounded-full bg-[#5c7a5c] shadow-[0_0_8px_#5c7a5c] animate-pulse"></div>
              <span className="text-[10px] font-mono text-[#8fb38f] tracking-widest uppercase font-bold">
                PROTOCOLO DE RECRUTAMENTO // 2026
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight uppercase font-display">
              PROCESSANDO RECRUTAMENTO
            </h1>
            <p className="text-xs md:text-sm text-neutral-400 font-mono tracking-wide">
              Verificando compatibilidade operacional...
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-10 relative">
            <div className="flex justify-between items-end mb-2 px-1">
              <span className="text-[10px] text-[#5c7a5c] font-mono uppercase tracking-widest font-black flex items-center gap-1">
                <Loader2 className="w-3.5 h-3.5 animate-spin" /> STATUS: {progress < 100 ? 'PROCESSANDO' : 'CONCLUÍDO'}
              </span>
              <span className="text-xs text-[#5c7a5c] font-mono font-black">
                {Math.min(Math.floor(progress), 100)}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/5 border border-white/5 overflow-hidden">
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-[#5c7a5c] shadow-[0_0_15px_#5c7a5c] transition-all duration-75 relative"
              >
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/40 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Task Stages List */}
          <div className="space-y-3 relative z-10">
            {tasks.map((task) => {
              const Icon = task.icon;
              const isActive = task.status === 'active';
              const isCompleted = task.status === 'completed';

              return (
                <div
                  key={task.id}
                  className={`flex items-center gap-4 p-3.5 rounded-xl border transition-all duration-300 ${
                    isCompleted
                      ? 'border-[#5c7a5c]/30 bg-[#5c7a5c]/10 shadow-[0_0_10px_rgba(92,122,92,0.05)]'
                      : isActive
                      ? 'border-[#5c7a5c] bg-[#5c7a5c]/5 shadow-[0_0_20px_rgba(92,122,92,0.12)]'
                      : 'border-transparent bg-white/[0.02] opacity-35'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      isCompleted || isActive ? 'text-[#8fb38f]' : 'text-white/20'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
                    )}
                  </div>

                  <div className="flex-1">
                    <p
                      className={`text-xs md:text-sm font-bold tracking-wide uppercase transition-all font-display ${
                        isActive || isCompleted ? 'text-white font-extrabold' : 'text-white/30 font-medium'
                      }`}
                    >
                      {task.text}
                    </p>
                    {isActive && (
                      <p className="text-[10px] text-[#8fb38f] font-mono mt-0.5 animate-pulse">
                        &gt; Executando sequência...
                      </p>
                    )}
                  </div>

                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-[#5c7a5c] animate-ping"></div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center border-t border-white/5 pt-4">
            <p className="text-[9px] text-white/20 font-mono uppercase tracking-[0.2em]">
              SISTEMA CRIPTOGRAFADO DE ALTA SEGURANÇA // ACESSO LIMITADO
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
