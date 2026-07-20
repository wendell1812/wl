import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

const BRAZILIAN_NAMES = [
  'Carlos', 'João', 'Lucas', 'Mateus', 'Gabriel', 'Guilherme', 'Thiago', 'Pedro',
  'Felipe', 'Marcos', 'Bruno', 'André', 'Rodrigo', 'Rafael', 'Diego', 'Gustavo',
  'Daniel', 'Arthur', 'Leonardo', 'Vitor', 'Vinícius', 'Samuel', 'Eduardo'
];

export default function NotificationWidget() {
  const [visible, setVisible] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState({ name: '', time: 1 });

  useEffect(() => {
    const triggerNotification = () => {
      const randomName = BRAZILIAN_NAMES[Math.floor(Math.random() * BRAZILIAN_NAMES.length)];
      const randomTime = Math.floor(Math.random() * 5) + 1;
      setCurrentBuyer({ name: randomName, time: randomTime });
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    // First popup in 8 seconds, then every 30 seconds
    const initialTimeout = setTimeout(triggerNotification, 8000);
    const interval = setInterval(triggerNotification, 35000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 50, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-24 right-4 md:bottom-28 md:right-6 z-40 max-w-[320px] w-full"
        >
          <div className="tactical-card p-4 rounded-xl border-emerald-500/30 bg-black/85 backdrop-blur-md flex items-center gap-4 shadow-xl">
            <div className="bg-emerald-500/20 p-2.5 rounded-full text-emerald-400">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-white text-xs md:text-sm font-bold">
                {currentBuyer.name}
              </p>
              <p className="text-neutral-400 text-[10px] md:text-xs">
                adquiriu o protocolo há {currentBuyer.time} min
              </p>
            </div>
            <span className="text-[10px] font-mono text-emerald-500 tracking-wider">
              ONLINE
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
