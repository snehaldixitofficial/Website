import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  { text: '> Initializing Snehal_OS v4.0.1...', delay: 0 },
  { text: '[OK]', delay: 500, highlight: true },
  { text: '> Loading modules: [PYTHON, GENAI, DATA_SCIENCE, FINTECH]', delay: 700 },
  { text: '[OK]', delay: 1200, highlight: true },
  { text: '> Neural Link → Spendture Pvt. Ltd. Established...', delay: 1400 },
  { text: '[OK]', delay: 1900, highlight: true },
  { text: '> Compiling Innovation Engine... IIT-Patna Ambassador Active', delay: 2100 },
  { text: '> System Status: INNOVATION... [100%]', delay: 2600, big: true },
];

const ScientificBoot = ({ onComplete }: { onComplete: () => void }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    bootLines.forEach((_, i) => {
      setTimeout(() => setVisibleLines(i + 1), bootLines[i].delay);
    });
    setTimeout(() => setExiting(true), 3400);
    setTimeout(onComplete, 4000);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center gradient-bg"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-xl w-full px-6">
            <div className="glass-card p-8 font-mono text-sm space-y-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                <span className="text-xs text-muted-foreground">quantum_boot.sh</span>
              </div>
              {bootLines.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={
                    line.big
                      ? 'neon-text text-lg font-bold mt-3'
                      : line.highlight
                        ? 'neon-text'
                        : 'text-muted-foreground'
                  }
                >
                  {line.text}
                </motion.div>
              ))}
              <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, hsl(180 100% 50%), hsl(275 100% 41%), hsl(328 100% 54%))' }}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 3, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScientificBoot;
