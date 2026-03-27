import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Vault', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl border-b border-border/30' : ''
      }`}
      style={scrolled ? { background: 'hsl(0 0% 0% / 0.7)' } : {}}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 h-16">
        <a href="#" className="font-heading font-bold text-lg">
          <span className="cyan-glow">S</span>
          <span className="text-foreground/60">.Dixit</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-xs text-muted-foreground hover:text-cyan transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
