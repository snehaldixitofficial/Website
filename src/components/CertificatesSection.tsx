import { useState } from 'react';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Anveshana National Level Hackathon 2K26',
    org: 'Sasi Institute of Technology & Engineering',
    year: 'Feb 2026',
    icon: '🏆',
    summary: 'Secured 6th Place at the 24-Hour National Level Hackathon with project Pawsitive Diagnostics — an AI-powered smart collar for real-time health monitoring in dogs.',
    type: 'Top 6 National',
    color: '#38bdf8',
  },
  {
    title: 'International Health Hackathon — Final Round',
    org: 'Johns Hopkins Whiting School of Engineering × VIT Bhopal',
    year: 'Feb 2026',
    icon: '🎓',
    summary: 'Selected as finalist for the JHU × VITB Health Hackathon with AI Powered Pet Diagnostics (Pawsitive Diagnosis). Competed in the on-campus final round at VIT Bhopal.',
    type: 'International',
    color: '#a855f7',
  },
  {
    title: 'Quantum Computing Workshop 2025',
    org: 'VIT Bhopal · IBM Research · Keysight · Q-CTRL · CEA France',
    year: 'Nov 2025',
    icon: '⚛️',
    summary: 'Completed hands-on quantum computing workshop across 3 sessions (6th, 13th, 20th Nov 2025). Gained exposure to quantum tools and real-world applications from IBM Research, Keysight Technologies, and Q-CTRL.',
    type: 'Workshop',
    color: '#34d399',
  },
  {
    title: 'NISM–SEBI National Financial Literacy Quiz',
    org: 'National Institute of Securities Markets (NISM) & SEBI',
    year: '2026',
    icon: '📈',
    summary: 'Scored 14/15 (near-perfect) in the National Financial Literacy Quiz 2026 (Online Round), demonstrating deep knowledge of India\'s financial markets.',
    type: 'Achievement',
    color: '#fbbf24',
  },
  {
    title: 'V.N. Bhatkhande Sangeet Samman Award',
    org: 'Academic & Cultural Excellence',
    year: '2021–2023',
    icon: '🎵',
    summary: 'Award-winning recognition for music excellence. Music has been a lifelong discipline teaching expression, precision, and creativity — values that carry into technical work.',
    type: 'Award',
    color: '#f472b6',
  },
  {
    title: 'Unnat Bharat Abhiyan Volunteer',
    org: 'Ministry of Education, Govt. of India · VIT Bhopal',
    year: 'Jan 2026 — Present',
    icon: '🇮🇳',
    summary: 'Selected as volunteer under the national UBA initiative. Working towards community development, rural transformation, and sustainable growth in adopted villages of Sehore district, Madhya Pradesh.',
    type: 'Volunteer',
    color: '#fb923c',
  },
  {
    title: 'Scholar Badge — 10th Grade',
    org: 'Khaitan Public School',
    year: '2021',
    icon: '🏅',
    summary: 'Awarded the Scholar Badge in 10th grade for outstanding academic performance. Active in Music, Badminton, National Olympiads, Drama Club, Painting, and Community Service.',
    type: 'Academic',
    color: '#a855f7',
  },
  {
    title: 'B.Tech — Computational Data Science',
    org: 'Vellore Institute of Technology (VIT)',
    year: '2025 — 2029',
    icon: '📊',
    summary: 'Specializing in high-performance computing, big data analytics, ML, and scalable cloud systems. Proficient in Python, C++, Hadoop, Spark, Tableau, PowerBI, OpenCV, and Keras.',
    type: 'Education',
    color: '#38bdf8',
  },
];

const CertificatesSection = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="certificates" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="neon-text text-xs">05 //</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            The Quantum <span className="purple-glow">Vault</span>
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="perspective-[800px] cursor-pointer h-56"
              onMouseEnter={() => setFlipped(i)}
              onMouseLeave={() => setFlipped(null)}
            >
              <div
                className="relative w-full h-full transition-transform duration-700"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flipped === i ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 glass-card p-5 flex flex-col justify-between"
                  style={{ backfaceVisibility: 'hidden', borderColor: cert.color + '40' }}
                >
                  <div className="flex items-start justify-between">
                    <motion.span
                      className="text-3xl"
                      animate={flipped === i ? { rotateY: [0, 360] } : { rotateY: 0 }}
                      transition={{ duration: 1.5, ease: 'linear' }}
                      style={{ display: 'inline-block' }}
                    >
                      {cert.icon}
                    </motion.span>
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded-sm border text-right"
                      style={{ color: cert.color, borderColor: cert.color + '40' }}
                    >
                      {cert.type}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold mb-1 leading-snug">{cert.title}</h3>
                    <p className="font-mono text-xs text-muted-foreground leading-snug">{cert.org}</p>
                    <p className="font-mono text-xs mt-2" style={{ color: cert.color + '80' }}>{cert.year}</p>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground/40">Hover to reveal →</p>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(to right, transparent, ${cert.color}, transparent)` }}
                  />
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 glass-card p-5 flex flex-col justify-center"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', borderColor: cert.color + '60', background: cert.color + '08' }}
                >
                  <p className="font-mono text-xs uppercase tracking-wider mb-3" style={{ color: cert.color }}>
                    Achievement
                  </p>
                  <p className="font-serif text-sm leading-relaxed text-foreground/80 italic">{cert.summary}</p>
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(to right, transparent, ${cert.color}, transparent)` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CertificatesSection;
