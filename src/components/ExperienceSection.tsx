import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Startup Co-Founder',
    company: 'Spendture Pvt. Ltd.',
    period: 'Sep 2025 — Present',
    location: 'On-site',
    type: 'Startup',
    color: '#38bdf8',
    description:
      'Building a next-generation fintech solution to simplify personal finance management. Focused on addressing key market gaps with proprietary, user-centric features. Creating an intuitive app experience designed to help users achieve their financial goals more effectively.',
    tags: ['Fintech', 'React', 'Python', 'GenAI', 'Business Development', 'Leadership'],
  },

  {
    role: 'Data Science Intern',
    company: 'Sequensolutions',
    period: 'Dec 2025 — Jan 2026',
    location: 'Remote',
    type: 'Internship',
    color: '#34d399',
    description:
      'Applied Data Science to AI-driven bioinformatics solutions. Performed hands-on NGS (Next-Generation Sequencing) data analysis for complex biological projects. Managed AWS cloud infrastructure for storage, processing, and collaborative data handling.',
    tags: ['Python', 'NGS', 'AWS', 'Bioinformatics', 'Data Analysis'],
  },

  {
    role: 'Campus Ambassador',
    company: 'INFINITO — IIT Patna',
    period: 'Sep 2025 — Oct 2025',
    location: 'Remote',
    type: 'Ambassador',
    color: '#f472b6',
    description:
      'Official Campus Ambassador for Infinito Sports Fest at IIT Patna. Acted as key liaison between IIT Patna and VIT Bhopal community. Promoted events, workshops, and competitions. Leveraged digital marketing and peer engagement to enhance event visibility.',
    tags: ['Leadership', 'Social Media', 'Brand Ambassador', 'Outreach'],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center gap-4 mb-12">
        <span className="neon-text text-xs">03 //</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold">
          Experience <span className="cyan-glow">Timeline</span>
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-6 z-10 ring-4 ring-background"
                style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}` }}
              />

              <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div
                  className="glass-card p-6 hover:scale-[1.02] transition-transform duration-300"
                  style={{ borderColor: exp.color + '30' }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded-sm border mb-2 inline-block"
                        style={{ color: exp.color, borderColor: exp.color + '40' }}
                      >
                        {exp.type}
                      </span>
                      <h3 className="font-heading text-xl font-bold">{exp.role}</h3>
                      <p className="font-mono text-sm mt-1" style={{ color: exp.color }}>{exp.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
                      <p className="font-mono text-xs text-muted-foreground mt-1">{exp.location}</p>
                    </div>
                  </div>
                  <p className="font-serif text-sm text-foreground/70 leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2 py-0.5 rounded-sm"
                        style={{ background: exp.color + '15', color: exp.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default ExperienceSection;
