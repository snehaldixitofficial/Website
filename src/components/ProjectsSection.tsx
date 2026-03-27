import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Spendture',
    subtitle: 'AI-Powered Personal Finance App',
    description:
      'A next-generation fintech solution simplifying personal finance management. Built with proprietary, user-centric features to help users achieve financial goals. Addressing key market gaps in spending intelligence for the next generation.',
    tags: ['React', 'Python', 'GenAI', 'Fintech', 'TypeScript'],
    color: '#38bdf8',
    status: 'Live',
    year: '2025',
    icon: '💸',
    link: '#',
    org: 'Spendture Pvt. Ltd.',
  },
  {
    title: 'CyberSHE',
    subtitle: 'Digital Safety Platform for Women',
    description:
      'Built during the WiCyS Hackathon. Integrates AI-powered harassment detection, privacy audits, emergency helpline access, and encrypted messaging. Connects users with Indian women\'s helplines, legal aid, and crisis support. React + TypeScript frontend, Node.js + Express backend with end-to-end encryption.',
    tags: ['React', 'TypeScript', 'Node.js', 'AI', 'Encryption', 'Python'],
    color: '#f472b6',
    status: 'Hackathon',
    year: '2025',
    icon: '🛡️',
    link: 'https://github.com/snehaldixitofficial/CyberSHE_WiCyS_Hackathon_.Saras-Hack-Squad',
    org: 'VIT Bhopal · WiCyS Hackathon',
  },
  {
    title: 'Pawsitive Diagnostics',
    subtitle: 'AI-Powered Smart Pet Health Collar',
    description:
      'Ultra-affordable AI smart collar for real-time pet health monitoring and behavioral analysis. Uses sensor fusion and behavioral triage to detect critical conditions like rabies early. Hardware cost under ₹1000. Secured 6th place at Anveshana National Hackathon 2K26 and reached finals of JHU × VIT Bhopal International Health Hackathon.',
    tags: ['AI', 'IoT', 'Python', 'Sensor Fusion', 'Hardware', 'Bioinformatics'],
    color: '#34d399',
    status: 'Top 6 National',
    year: '2026',
    icon: '🐾',
    link: '#',
    org: 'VIT Bhopal · JHU Health Hackathon',
  },
  {
    title: 'Industry-Education Linkages NCR',
    subtitle: 'Research Project — IC3 Movement',
    description:
      'Research project studying how local industries in the NCR influence students\' higher education and career choices. Gathered and analyzed data, collaborated with peers to identify key insights, and presented findings through a multimedia report. Recognized by the school principal for outstanding contribution.',
    tags: ['Research', 'Data Analysis', 'Teamwork', 'Presentation'],
    color: '#fbbf24',
    status: 'Recognized',
    year: '2023',
    icon: '📊',
    link: '#',
    org: 'Khaitan Public School · IC3 Movement',
  },

  {
    title: 'NGS Bioinformatics Toolkit',
    subtitle: 'AI-Driven Bioinformatics Analysis',
    description:
      'Applied Data Science to AI-driven bioinformatics at Sequensolutions. Performed hands-on NGS (Next-Generation Sequencing) data analysis for complex biological projects. Managed AWS cloud infrastructure for storage, processing, and collaborative data handling.',
    tags: ['Python', 'NGS', 'AWS', 'Bioinformatics', 'Data Science'],
    color: '#fb923c',
    status: 'Internship',
    year: '2025',
    icon: '🧬',
    link: '#',
    org: 'Sequensolutions',
  },
];

const statusColor: Record<string, string> = {
  'Live':           '#34d399',
  'In Progress':    '#fbbf24',
  'Hackathon':      '#a855f7',
  'Top 6 National': '#38bdf8',
  'Recognized':     '#f472b6',
  'Internship':     '#fb923c',
};

const ProjectsSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="neon-text text-xs">04 //</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Project <span className="purple-glow">Matrix</span>
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative glass-card p-6 cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-[1.03]"
              style={{ borderColor: hovered === i ? project.color + '60' : project.color + '20' }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${project.color}10, transparent 70%)` }}
              />

              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{project.icon}</span>
                <div className="flex flex-col items-end gap-1">
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded-sm"
                    style={{ color: statusColor[project.status], background: statusColor[project.status] + '15' }}
                  >
                    {project.status}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                </div>
              </div>

              <h3 className="font-heading text-xl font-bold mb-1" style={{ color: hovered === i ? project.color : undefined }}>
                {project.title}
              </h3>
              <p className="font-mono text-xs mb-1" style={{ color: project.color + 'aa' }}>{project.subtitle}</p>
              <p className="font-mono text-xs text-muted-foreground/50 mb-3">{project.org}</p>
              <p className="font-serif text-sm text-foreground/60 leading-relaxed mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-0.5 rounded-sm border"
                    style={{ borderColor: project.color + '30', color: project.color + 'cc' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 font-mono text-xs transition-opacity opacity-40 hover:opacity-100"
                  style={{ color: project.color }}
                >
                  ↗ View on GitHub
                </a>
              )}

              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(to right, ${project.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
