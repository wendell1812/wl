import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface UrgencyBarProps {
  checkoutUrl: string;
}

export default function UrgencyBar({ checkoutUrl }: UrgencyBarProps) {
  const [timeLeft, setTimeLeft] = useState(540); // 9 minutes
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show banner after 15 seconds
    const showTimeout = setTimeout(() => {
      setVisible(true);
    }, 15000);

    return () => clearTimeout(showTimeout);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-t-2 border-[#5c7a5c] shadow-[0_-4px_30px_rgba(92,122,92,0.3)]"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-0.5">
                  <span className="text-[#5c7a5c] text-lg md:text-xl animate-pulse">⚡</span>
                  <p className="text-[#5c7a5c] font-black text-sm md:text-base font-display uppercase tracking-wider">
                    VOCÊ FOI SELECIONADO PARA O RECRUTAMENTO
                  </p>
                </div>
                <p className="text-neutral-400 text-xs md:text-sm font-mono">
                  Sua vaga ficará reservada por apenas:{' '}
                  <span className="text-white font-bold font-mono">
                    {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                  </span>
                </p>
              </div>

              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto text-black px-6 md:px-10 py-3 md:py-4 text-sm md:text-base font-black rounded-lg transition-all transform hover:scale-105 active:scale-95 text-center uppercase tracking-widest"
                style={{
                  background: 'linear-gradient(90deg, #ff4d00 0%, #ff9900 50%, #ffd400 100%)',
                  boxShadow: '0 4px 20px rgba(255,110,0,0.3), 0 0 10px rgba(255,180,60,0.15)',
                  border: '1px solid rgba(255,140,0,0.2)'
                }}
              >
                👊 ACESSAR O PROTOCOLO AGORA
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
