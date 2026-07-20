import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ArrowRight, Check, ShieldCheck, Flame, Scale, Trophy, Activity } from 'lucide-react';
import { QuizAnswers } from '../types';

interface QuizOption {
  value: number;
  label: string;
  emoji: string;
}

interface QuizQuestion {
  id: string | number;
  type?: 'select' | 'multiselect' | 'slider' | 'social-proof-carousel';
  question: string;
  description?: string;
  options?: QuizOption[];
  sliderConfig?: {
    min: number;
    max: number;
    defaultValue: number;
    unit: string;
  };
}

const QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    type: 'select',
    question: 'Qual é o seu objetivo principal?',
    options: [
      { value: 1, label: 'Perder peso', emoji: '⚖️' },
      { value: 2, label: 'Ganhar massa muscular', emoji: '💪' },
      { value: 3, label: 'Perder gordura e ganhar músculo', emoji: '🔥' },
      { value: 4, label: 'Melhorar o condicionamento físico geral', emoji: '🏃' }
    ]
  },
  {
    id: 4,
    type: 'select',
    question: 'Qual é o seu objetivo corporal?',
    options: [
      { value: 1, label: 'Magro e ágil', emoji: '🧍' },
      { value: 2, label: 'Atlético e funcional', emoji: '🏃' },
      { value: 3, label: 'Trincado e definido', emoji: '💪' },
      { value: 4, label: 'Forte e robusto', emoji: '🦾' }
    ]
  },
  {
    id: 11,
    type: 'multiselect',
    question: 'Quais são as áreas em que você deseja focar?',
    description: 'Escolha todas as opções que se aplicam.',
    options: [
      { value: 1, label: 'Peitorais', emoji: '🍒' },
      { value: 2, label: 'Braços e Ombros', emoji: '💪' },
      { value: 3, label: 'Abdômen trincado', emoji: '🔥' },
      { value: 4, label: 'Pernas explosivas', emoji: '🦵' }
    ]
  },
  {
    id: 13,
    type: 'select',
    question: 'Quantas vezes por semana você gostaria de treinar?',
    options: [
      { value: 1, label: '1 a 2 vezes por semana', emoji: '📅' },
      { value: 2, label: '3 a 4 vezes por semana', emoji: '🏋️' },
      { value: 3, label: '5 ou mais vezes por semana', emoji: '🔥' }
    ]
  },
  {
    id: 'social-proof-2',
    type: 'social-proof-carousel',
    question: 'ISSO VAI ACONTECER COM VOCÊ'
  },
  {
    id: 20,
    type: 'slider',
    question: 'QUAL É A SUA ALTURA?',
    sliderConfig: { min: 140, max: 220, defaultValue: 175, unit: 'cm' }
  },
  {
    id: 21,
    type: 'slider',
    question: 'QUAL É O SEU PESO ATUAL?',
    sliderConfig: { min: 40, max: 150, defaultValue: 75, unit: 'kg' }
  },
  {
    id: 22,
    type: 'slider',
    question: 'QUAL É O PESO QUE VOCÊ DESEJA ALCANÇAR?',
    sliderConfig: { min: 40, max: 150, defaultValue: 70, unit: 'kg' }
  }
];

// Testimonials data for the social proof step
const TESTIMONIALS = [
  {
    name: 'Carlos',
    age: 25,
    imageBefore: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=200&auto=format&fit=crop&q=60',
    imageAfter: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=200&auto=format&fit=crop&q=60',
    headline: 'De um corpo comum a uma MÁQUINA DE GUERRA',
    text: 'Este protocolo ativou o modo anabólico natural do meu corpo. 21 Dias sem academia, apenas usando o próprio corpo. Definição extrema.'
  },
  {
    name: 'Javier',
    age: 28,
    imageBefore: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=200&auto=format&fit=crop&q=60',
    imageAfter: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=200&auto=format&fit=crop&q=60',
    headline: 'De estagnado a ELITE',
    text: 'Achei que minha genética era o problema. Estava treinando pesado mas sem resultados. O Protocolo Calistenia Militar me provou o contrário!'
  },
  {
    name: 'Luís',
    age: 32,
    imageBefore: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60',
    imageAfter: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop&q=60',
    headline: 'Definição Abdominal Total',
    text: 'A disciplina e o método militar correto mudaram meu corpo em tempo recorde. Perdi 6kg de gordura pura e ganhei densidade muscular.'
  }
];

interface QuizFlowProps {
  initialAgeAnswer: number;
  onComplete: (answers: QuizAnswers) => void;
}

export default function QuizFlow({ initialAgeAnswer, onComplete }: QuizFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({ 3: initialAgeAnswer });
  const [animating, setAnimating] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-cycle testimonials in social proof step
  useEffect(() => {
    if (QUESTIONS[currentStep]?.type === 'social-proof-carousel') {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  const activeQuestion = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  const handleNext = (overrideAnswers?: QuizAnswers) => {
    const finalAnswers = overrideAnswers || answers;
    if (currentStep < QUESTIONS.length - 1) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
        setAnimating(false);
      }, 300);
    } else {
      onComplete(finalAnswers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => prev - 1);
        setAnimating(false);
      }, 300);
    }
  };

  const selectOption = (value: number) => {
    const updatedAnswers = { ...answers, [activeQuestion.id]: value };
    setAnswers(updatedAnswers);
    handleNext(updatedAnswers);
  };

  const toggleMultiSelectOption = (value: number) => {
    const currentList = (answers[activeQuestion.id] as number[]) || [];
    const updatedList = currentList.includes(value)
      ? currentList.filter((item) => item !== value)
      : [...currentList, value];

    setAnswers({ ...answers, [activeQuestion.id]: updatedList });
  };

  const handleSliderChange = (val: number) => {
    setAnswers({ ...answers, [activeQuestion.id]: val });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between py-6 px-4 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#5c7a5c]/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      {/* Header with progress */}
      <div className="w-full max-w-2xl mx-auto z-10">
        <div className="mb-6 px-2">
          <div className="flex justify-between items-end mb-2">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2rem] text-[#8fb38f] font-black">
                Análise Física Tática
              </span>
              <span className="text-xl font-black text-white italic tracking-tighter uppercase font-display">
                Fase {currentStep + 1 < 10 ? `0${currentStep + 1}` : currentStep + 1}
              </span>
            </div>
            <span className="text-xs font-mono text-[#8fb38f] font-bold bg-[#5c7a5c]/20 px-2.5 py-1 rounded">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-[#5c7a5c] relative transition-all duration-500 ease-out shadow-[0_0_10px_#5c7a5c]"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/40 blur-[2px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main card */}
      <div className="flex-1 flex items-center justify-center max-w-2xl w-full mx-auto z-10 py-4">
        <AnimatePresence mode="wait">
          {!animating && (
            <motion.div
              key={activeQuestion.id}
              initial={{ opacity: 0, x: 20, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col items-center"
            >
              {/* Question Heading */}
              <h2 className="text-2xl md:text-4xl font-black text-white mb-3 text-center uppercase tracking-tight leading-tight font-display">
                {activeQuestion.question}
              </h2>

              {activeQuestion.description && (
                <p className="text-neutral-400 text-sm md:text-base mb-6 text-center max-w-md mx-auto leading-relaxed">
                  {activeQuestion.description}
                </p>
              )}

              {/* Quiz content types */}
              {activeQuestion.type === 'select' && (
                <div className="w-full space-y-3 mt-4">
                  {activeQuestion.options?.map((opt) => {
                    const isSelected = answers[activeQuestion.id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => selectOption(opt.value)}
                        className={`w-full p-4 md:p-5 rounded-xl transition-all duration-300 relative overflow-hidden group text-left border cursor-pointer ${
                          isSelected
                            ? 'bg-[#5c7a5c]/20 border-[#5c7a5c]/60 shadow-[0_0_20px_rgba(92,122,92,0.25)]'
                            : 'bg-zinc-900/40 border-white/5 hover:bg-zinc-900/70 hover:border-[#5c7a5c]/40'
                        }`}
                      >
                        <div className="flex gap-4 items-center relative z-10">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-all ${
                            isSelected ? 'bg-[#5c7a5c] text-black shadow-[0_0_10px_#5c7a5c]' : 'bg-white/5 text-neutral-400 group-hover:text-white'
                          }`}>
                            {opt.emoji}
                          </div>
                          <span className={`flex-1 text-sm md:text-base font-bold tracking-wide transition-colors ${
                            isSelected ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                          }`}>
                            {opt.label}
                          </span>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                            isSelected ? 'border-[#5c7a5c] bg-[#5c7a5c]' : 'border-neutral-700'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 text-black stroke-[4]" />}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {activeQuestion.type === 'multiselect' && (
                <div className="w-full space-y-3 mt-4">
                  {activeQuestion.options?.map((opt) => {
                    const isSelected = ((answers[activeQuestion.id] as number[]) || []).includes(opt.value);
                    return (
                      <button
                        key={opt.value}
                        onClick={() => toggleMultiSelectOption(opt.value)}
                        className={`w-full p-4 md:p-5 rounded-xl transition-all duration-300 relative overflow-hidden group text-left border cursor-pointer ${
                          isSelected
                            ? 'bg-[#5c7a5c]/20 border-[#5c7a5c]/60 shadow-[0_0_20px_rgba(92,122,92,0.25)]'
                            : 'bg-zinc-900/40 border-white/5 hover:bg-zinc-900/70 hover:border-[#5c7a5c]/40'
                        }`}
                      >
                        <div className="flex gap-4 items-center relative z-10">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-all ${
                            isSelected ? 'bg-[#5c7a5c] text-black shadow-[0_0_10px_#5c7a5c]' : 'bg-white/5 text-neutral-400 group-hover:text-white'
                          }`}>
                            {opt.emoji}
                          </div>
                          <span className={`flex-1 text-sm md:text-base font-bold tracking-wide transition-colors ${
                            isSelected ? 'text-white' : 'text-neutral-300 group-hover:text-white'
                          }`}>
                            {opt.label}
                          </span>
                          <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all ${
                            isSelected ? 'border-[#5c7a5c] bg-[#5c7a5c]' : 'border-neutral-700'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 text-black stroke-[4]" />}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                  <div className="pt-6">
                    <button
                      onClick={() => handleNext()}
                      disabled={!((answers[activeQuestion.id] as number[]) || []).length}
                      className="w-full py-4 text-sm md:text-base font-black rounded-xl uppercase tracking-[0.2em] bg-[#4c9c4c] text-white border border-[#4c9c4c]/50 shadow-[0_0_30px_rgba(76,156,76,0.6)] hover:bg-[#5da05d] hover:shadow-[0_0_50px_rgba(76,156,76,0.9)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
                    >
                      Avançar Missão <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {activeQuestion.type === 'slider' && (
                <div className="w-full space-y-8 mt-6">
                  {/* Glowing Slider Value Card */}
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative mb-8 flex items-end justify-center z-10">
                      <span className="text-7xl md:text-8xl font-black italic tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] tabular-nums">
                        {answers[activeQuestion.id] || activeQuestion.sliderConfig?.defaultValue}
                      </span>
                      <span className="text-2xl md:text-3xl font-extrabold italic text-[#8fb38f] mb-3 ml-2 drop-shadow-[0_0_10px_rgba(92,122,92,0.8)]">
                        {activeQuestion.sliderConfig?.unit}
                      </span>
                      <div className="absolute inset-0 bg-[#5c7a5c]/5 blur-3xl -z-10 rounded-full"></div>
                    </div>

                    {/* Standard highly polished HTML range slider */}
                    <div className="w-full px-4 relative">
                      <input
                        type="range"
                        min={activeQuestion.sliderConfig?.min}
                        max={activeQuestion.sliderConfig?.max}
                        value={answers[activeQuestion.id] || activeQuestion.sliderConfig?.defaultValue}
                        onChange={(e) => handleSliderChange(parseInt(e.target.value))}
                        className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#5c7a5c] border border-white/5"
                        style={{
                          background: `linear-gradient(to right, #5c7a5c 0%, #5c7a5c ${
                            (((answers[activeQuestion.id] as number) || activeQuestion.sliderConfig?.defaultValue || 0) - (activeQuestion.sliderConfig?.min || 0)) /
                            ((activeQuestion.sliderConfig?.max || 1) - (activeQuestion.sliderConfig?.min || 0)) * 100
                          }%, #27272a ${
                            (((answers[activeQuestion.id] as number) || activeQuestion.sliderConfig?.defaultValue || 0) - (activeQuestion.sliderConfig?.min || 0)) /
                            ((activeQuestion.sliderConfig?.max || 1) - (activeQuestion.sliderConfig?.min || 0)) * 100
                          }%, #27272a 100%)`
                        }}
                      />
                      <div className="flex justify-between text-neutral-500 font-mono text-[10px] mt-2">
                        <span>{activeQuestion.sliderConfig?.min} {activeQuestion.sliderConfig?.unit}</span>
                        <span>{activeQuestion.sliderConfig?.max} {activeQuestion.sliderConfig?.unit}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 px-4 md:px-12">
                    <button
                      onClick={() => handleNext()}
                      className="w-full py-4 text-sm md:text-base font-black rounded-xl uppercase tracking-[0.2em] bg-[#4c9c4c] text-white border border-[#4c9c4c]/50 shadow-[0_0_30px_rgba(76,156,76,0.6)] hover:bg-[#5da05d] hover:shadow-[0_0_50px_rgba(76,156,76,0.9)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
                    >
                      Confirmar Valor <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {activeQuestion.type === 'social-proof-carousel' && (
                <div className="w-full space-y-6 mt-4">
                  <div className="tactical-card p-1 rounded-2xl border-[#5c7a5c]/30 bg-black/50 shadow-[0_0_30px_rgba(92,122,92,0.1)] overflow-hidden">
                    <div className="bg-zinc-950/80 rounded-xl p-5 md:p-6 backdrop-blur-md relative">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#5c7a5c]/5 rounded-full blur-3xl -mr-6 -mt-6 pointer-events-none"></div>

                      <div className="flex items-center gap-2 mb-4 justify-center">
                        <span className="text-yellow-500 text-base">★★★★★</span>
                        <span className="text-neutral-500 text-[10px] font-mono tracking-widest">| RESULTADOS OPERACIONAIS</span>
                      </div>

                      {/* Display active testimonial */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeTestimonial}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.4 }}
                          className="text-center space-y-4"
                        >
                          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/5">
                            <span className="text-xs font-bold text-white uppercase tracking-wider">
                              {TESTIMONIALS[activeTestimonial].name}, {TESTIMONIALS[activeTestimonial].age} anos
                            </span>
                          </div>

                          <h3 className="text-lg md:text-xl font-black text-white leading-tight uppercase font-display">
                            "{TESTIMONIALS[activeTestimonial].headline}"
                          </h3>

                          <p className="text-sm text-neutral-300 leading-relaxed italic max-w-lg mx-auto">
                            "{TESTIMONIALS[activeTestimonial].text}"
                          </p>
                        </motion.div>
                      </AnimatePresence>

                      <div className="mt-6 flex justify-center gap-1.5">
                        {TESTIMONIALS.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveTestimonial(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              activeTestimonial === idx ? 'w-6 bg-[#5c7a5c]' : 'w-2 bg-white/20'
                            }`}
                          />
                        ))}
                      </div>

                      <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-center gap-2 text-[#8fb38f] text-[10px] md:text-xs font-mono uppercase tracking-widest">
                        <ShieldCheck className="w-4 h-4 text-[#8fb38f]" />
                        <span>MÉTODO COMPROVADO EM CAMPO • 100% SEGURO</span>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 md:px-12 pt-2">
                    <button
                      onClick={() => handleNext()}
                      className="w-full py-4 text-sm md:text-base font-black rounded-xl uppercase tracking-[0.2em] bg-[#4c9c4c] text-white border border-[#4c9c4c]/50 shadow-[0_0_30px_rgba(76,156,76,0.6)] hover:bg-[#5da05d] hover:shadow-[0_0_50px_rgba(76,156,76,0.9)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
                    >
                      Estou Pronto para Prosseguir <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer back button */}
      <div className="w-full max-w-2xl mx-auto z-10 flex justify-between items-center px-4 mt-6">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="flex items-center gap-2 text-neutral-400 hover:text-white disabled:opacity-0 transition-all group font-mono text-xs tracking-widest font-black"
        >
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#5c7a5c] transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </div>
          VOLTAR
        </button>
        <span className="text-[9px] font-mono text-neutral-600 tracking-wider">
          OPERAÇÃO CALISTENIA MILITAR // BR-2026
        </span>
      </div>
    </div>
  );
}
