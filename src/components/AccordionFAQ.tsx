import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionFAQProps {
  question: string;
  answer: string;
}

export default function AccordionFAQ({ question, answer }: AccordionFAQProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tactical-card overflow-hidden border-zinc-800 bg-zinc-900/10 rounded-xl transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center gap-4 p-5 md:p-6 text-left cursor-pointer transition-colors duration-200 hover:bg-white/[0.02]"
      >
        <h3 className="text-sm md:text-base font-bold text-white font-display tracking-wide uppercase">
          {question}
        </h3>
        <span className="text-[#5c7a5c] flex-shrink-0">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 pb-6 md:px-6 md:pb-8 text-neutral-300 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
