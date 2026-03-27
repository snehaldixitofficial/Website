import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import NeuralNetwork3D from './NeuralNetwork3D';

const titles = [
  'Co-Founder @ Spendture Pvt. Ltd.',
  'B.Tech — Computational Data Science @ VIT',
  'IIT-Patna Campus Ambassador',
  'Python & GenAI Engineer',
  'Data Science Intern @ Sequensolutions',
  'WTM Core Member @ GDGC VIT Bhopal',
  'Melophile & V.N. Bhatkhande Award Winner',
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((p) => (p + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralNetwork3D />
      <div className="absolute inset-0 gradient-bg opacity-60 z-[1]" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1
            className="glitch-text text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 tracking-tight"
            data-text="SNEHAL DIXIT"
          >
            SNEHAL DIXIT
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="h-8 mb-8"
        >
          <motion.p
            key={titleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="neon-text text-lg md:text-xl tracking-widest uppercase"
          >
            {'// '}{titles[titleIndex]}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#about"
            className="font-heading text-sm font-semibold px-8 py-3 rounded-sm bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(180_100%_50%/0.4)] transition-shadow"
          >
            Initialize Exploration
          </a>
          <a
            href="#contact"
            className="font-heading text-sm font-semibold px-8 py-3 rounded-sm border border-primary/40 text-primary hover:border-primary hover:shadow-[0_0_20px_hsl(180_100%_50%/0.2)] transition-all"
          >
            Establish Connection
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-16 font-mono text-xs text-muted-foreground space-x-6"
        >
          <span>Delhi, India</span>
          <span className="text-neon">●</span>
          <span>VIT Bhopal · B.Tech Computational Data Science</span>
          <span className="text-pink">●</span>
          <span>Co-Founder @ Spendture</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 rounded-full border border-primary/40 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
