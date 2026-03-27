import { useState } from 'react';
import { motion } from 'framer-motion';

const brainRegions = [
  {
    id: 'frontal',
    label: 'Frontal Lobe — Leadership & Entrepreneurship',
    text: 'As the co-founder of Spendture Pvt. Ltd. (Sep 2025–Present), Snehal is building a next-generation fintech solution to simplify personal finance management. She also served as Core Member of Women TechMakers at GDGC VIT Bhopal, leading hackathons, mentorship, and outreach to empower women in tech. Her entrepreneurial drive extends to her role as IIT-Patna Campus Ambassador for Infinito Sports Fest.',
  },
  {
    id: 'temporal',
    label: 'Temporal Lobe — Communication & Creativity',
    text: 'A self-described melophile and recipient of the V.N. Bhatkhande Sangeet Samman Award, Snehal bridges technical precision with creative expression. Music has taught her discipline and the joy of expression. Fluent in English and Hindi with elementary French, she connects across cultures. She believes creativity is a catalyst for technological innovation.',
  },
  {
    id: 'parietal',
    label: 'Parietal Lobe — Computation & AI',
    text: 'Pursuing B.Tech in Computational Data Science at Vellore Institute of Technology (VIT), Snehal specialises in Python, Machine Learning, Deep Learning, Generative AI, and cloud systems. She completed a Data Science Internship at Sequensolutions (Dec 2025–Jan 2026) working on NGS data analysis and AWS cloud infrastructure. She also won 6th place at the Anveshana National Level Hackathon 2K26 and reached the finals of the JHU × VIT Bhopal International Health Hackathon.',
  },
  {
    id: 'occipital',
    label: 'Occipital Lobe — Vision & Innovation',
    text: 'A recipient of the V.N. Bhatkhande Sangeet Samman Award and a Scholar Badge in 10th grade, Snehal\'s vision spans disciplines. She scored 14/15 in the NISM–SEBI National Financial Literacy Quiz 2026, completed the Quantum Computing Workshop 2025 (IBM Research, Keysight, Q-CTRL), and volunteers under Unnat Bharat Abhiyan for rural community development in Sehore district, Madhya Pradesh.',
  },
];

const AboutSection = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const active = brainRegions.find((r) => r.id === activeRegion);

  return (
    <section id="about" className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="neon-text text-xs">01 //</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            The Scientific <span className="pink-glow">Narrative</span>
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Brain diagram */}
          <div className="relative aspect-square max-w-md mx-auto w-full">
            <motion.svg
              viewBox="0 0 400 400"
              className="w-full h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <ellipse cx="200" cy="200" rx="150" ry="160" fill="none" stroke="hsl(270 20% 20%)" strokeWidth="1" />
              <path d="M200 40 Q 120 60 80 140 Q 60 200 80 260 Q 100 320 160 350 Q 200 370 240 350 Q 300 320 320 260 Q 340 200 320 140 Q 280 60 200 40" fill="none" stroke="hsl(180 100% 50%)" strokeWidth="0.5" opacity="0.3" />

              <g onMouseEnter={() => setActiveRegion('frontal')} onMouseLeave={() => setActiveRegion(null)} className="cursor-pointer">
                <ellipse cx="200" cy="110" rx="80" ry="50" fill={activeRegion === 'frontal' ? 'hsl(328 100% 54% / 0.15)' : 'hsl(180 100% 50% / 0.05)'} stroke={activeRegion === 'frontal' ? 'hsl(328 100% 54%)' : 'hsl(180 100% 50% / 0.2)'} strokeWidth="1" />
                <text x="200" y="115" textAnchor="middle" fill={activeRegion === 'frontal' ? 'hsl(328 100% 54%)' : 'hsl(180 100% 50% / 0.5)'} fontSize="11" fontFamily="Space Grotesk">Leadership</text>
              </g>

              <g onMouseEnter={() => setActiveRegion('temporal')} onMouseLeave={() => setActiveRegion(null)} className="cursor-pointer">
                <ellipse cx="120" cy="220" rx="55" ry="45" fill={activeRegion === 'temporal' ? 'hsl(328 100% 54% / 0.15)' : 'hsl(275 100% 41% / 0.05)'} stroke={activeRegion === 'temporal' ? 'hsl(328 100% 54%)' : 'hsl(275 100% 41% / 0.2)'} strokeWidth="1" />
                <text x="120" y="225" textAnchor="middle" fill={activeRegion === 'temporal' ? 'hsl(328 100% 54%)' : 'hsl(275 100% 41% / 0.5)'} fontSize="11" fontFamily="Space Grotesk">Creativity</text>
              </g>

              <g onMouseEnter={() => setActiveRegion('parietal')} onMouseLeave={() => setActiveRegion(null)} className="cursor-pointer">
                <ellipse cx="270" cy="200" rx="60" ry="45" fill={activeRegion === 'parietal' ? 'hsl(328 100% 54% / 0.15)' : 'hsl(110 100% 61% / 0.05)'} stroke={activeRegion === 'parietal' ? 'hsl(328 100% 54%)' : 'hsl(110 100% 61% / 0.2)'} strokeWidth="1" />
                <text x="270" y="205" textAnchor="middle" fill={activeRegion === 'parietal' ? 'hsl(328 100% 54%)' : 'hsl(110 100% 61% / 0.5)'} fontSize="11" fontFamily="Space Grotesk">Computation</text>
              </g>

              <g onMouseEnter={() => setActiveRegion('occipital')} onMouseLeave={() => setActiveRegion(null)} className="cursor-pointer">
                <ellipse cx="200" cy="310" rx="65" ry="40" fill={activeRegion === 'occipital' ? 'hsl(328 100% 54% / 0.15)' : 'hsl(180 100% 50% / 0.05)'} stroke={activeRegion === 'occipital' ? 'hsl(328 100% 54%)' : 'hsl(180 100% 50% / 0.2)'} strokeWidth="1" />
                <text x="200" y="315" textAnchor="middle" fill={activeRegion === 'occipital' ? 'hsl(328 100% 54%)' : 'hsl(180 100% 50% / 0.5)'} fontSize="11" fontFamily="Space Grotesk">Vision</text>
              </g>

              <line x1="200" y1="160" x2="120" y2="175" stroke="hsl(180 100% 50% / 0.1)" strokeWidth="0.5" />
              <line x1="200" y1="160" x2="270" y2="155" stroke="hsl(180 100% 50% / 0.1)" strokeWidth="0.5" />
              <line x1="200" y1="160" x2="200" y2="270" stroke="hsl(180 100% 50% / 0.1)" strokeWidth="0.5" />
              <line x1="120" y1="265" x2="200" y2="270" stroke="hsl(275 100% 41% / 0.1)" strokeWidth="0.5" />
              <line x1="270" y1="245" x2="200" y2="270" stroke="hsl(110 100% 61% / 0.1)" strokeWidth="0.5" />
            </motion.svg>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="font-mono text-xs text-neon/60 uppercase tracking-widest">
              Hover brain regions to explore →
            </p>
            <motion.div
              key={activeRegion || 'default'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="min-h-[200px]"
            >
              {active ? (
                <>
                  <h3 className="font-heading text-xl font-bold pink-glow mb-4">{active.label}</h3>
                  <p className="font-serif text-lg leading-relaxed text-foreground/80">{active.text}</p>
                </>
              ) : (
                <>
                  <h3 className="font-heading text-xl font-bold cyan-glow mb-4">The Living Mind</h3>
                  <p className="font-serif text-lg leading-relaxed text-foreground/60">
                    Snehal Dixit loves exploring the space where creativity meets technology. A B.Tech student 
                    specializing in Computational Data Science at VIT Bhopal, she is the co-founder of Spendture 
                    Pvt. Ltd. and a recipient of the V.N. Bhatkhande Sangeet Samman Award. With expertise spanning 
                    Python, Generative AI, and data science, she embodies the modern polymath — as comfortable 
                    with code as with creative expression. Winner of the Anveshana National Hackathon 2K26 
                    (Top 6) and finalist at the JHU International Health Hackathon.
                  </p>
                </>
              )}
            </motion.div>
            <div className="flex flex-wrap gap-2 pt-4">
              {['Delhi, India', 'VIT Bhopal', 'B.Tech CDS', 'Spendture', 'GenAI', 'Python', 'Music', 'French'].map((tag) => (
                <span key={tag} className="font-mono text-xs px-3 py-1 border border-cyan/20 rounded-sm text-cyan/60">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
