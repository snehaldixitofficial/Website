import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [input, setInput] = useState('');
  const [lines, setLines] = useState<string[]>([
    '> Neural link open. Ready to receive transmissions.',
    '> Type your message below.',
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLines((prev) => [...prev, `visitor@node:~$ ${input}`, '> Transmission received. Snehal will decode shortly.']);
    setInput('');
  };

  return (
    <section id="contact" className="section-padding border-t border-border/30">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="neon-text text-xs">06 //</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Command <span className="cyan-glow">Center</span>
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span className="font-mono text-xs text-muted-foreground">transmission.sh</span>
            </div>
            <div className="font-mono text-xs space-y-1 h-32 overflow-y-auto mb-4">
              {lines.map((line, i) => (
                <p key={i} className={line.startsWith('>') ? 'text-neon/70' : 'text-foreground/50'}>
                  {line}
                </p>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-border/30 pt-4">
              <span className="neon-text text-xs">→</span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent font-mono text-sm text-foreground outline-none placeholder:text-muted-foreground/30"
                placeholder="Enter transmission..."
              />
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <p className="font-serif text-lg text-foreground/70">
              Initiating contact for collaborations, research inquiries, or discussions about computational frontiers.
            </p>
            <div className="space-y-4">
              <a
                href="https://linkedin.com/in/snehaldixitofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-cyan transition-colors group"
              >
                <span className="text-cyan/40 group-hover:text-cyan">↗</span>
                LinkedIn
              </a>
              <a
                href="https://github.com/snehaldixitofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-neon transition-colors group"
              >
                <span className="text-neon/40 group-hover:text-neon">↗</span>
                GitHub
              </a>
              <button
                onClick={() => { window.location.href = 'mailto:snehaldixit237@gmail.com'; }}
                className="flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-pink transition-colors group"
              >
                <span className="text-pink/40 group-hover:text-pink">↗</span>
                snehaldixit237@gmail.com
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border/30 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © 2025 Snehal Dixit — The Living Lab. All synapses reserved.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
