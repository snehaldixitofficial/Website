import { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SkillNode {
  id: string;
  label: string;
  category: 'engineering' | 'science' | 'creative';
  x: number;
  y: number;
  connections: string[];
}

const nodes: SkillNode[] = [
  { id: 'python',     label: 'Python',               category: 'engineering', x: 15, y: 25, connections: ['genai', 'data', 'ml', 'dl'] },
  { id: 'cpp',        label: 'C++',                  category: 'engineering', x: 10, y: 55, connections: ['python', 'algo'] },
  { id: 'js',         label: 'JavaScript',           category: 'engineering', x: 25, y: 70, connections: ['react', 'fullstack'] },
  { id: 'react',      label: 'React',                category: 'engineering', x: 35, y: 85, connections: ['js', 'fullstack'] },
  { id: 'fullstack',  label: 'Full-Stack',           category: 'engineering', x: 18, y: 90, connections: ['js', 'react', 'sql'] },
  { id: 'sql',        label: 'SQL',                  category: 'engineering', x: 8,  y: 78, connections: ['fullstack', 'data'] },
  { id: 'genai',      label: 'Generative AI',        category: 'science',     x: 45, y: 15, connections: ['python', 'ml', 'dl'] },
  { id: 'ml',         label: 'Machine Learning',     category: 'science',     x: 55, y: 30, connections: ['python', 'dl', 'data', 'genai'] },
  { id: 'dl',         label: 'Deep Learning',        category: 'science',     x: 70, y: 18, connections: ['ml', 'genai', 'python'] },
  { id: 'data',       label: 'Data Science',         category: 'science',     x: 50, y: 50, connections: ['python', 'ml', 'sql'] },
  { id: 'algo',       label: 'Algo Trading',         category: 'science',     x: 30, y: 40, connections: ['cpp', 'python', 'data'] },
  { id: 'compdata',   label: 'Comp. Data Sci.',      category: 'science',     x: 75, y: 45, connections: ['data', 'ml'] },
  { id: 'founder',    label: 'Co-Founder Spendture', category: 'creative',    x: 85, y: 55, connections: ['leadership', 'iit'] },
  { id: 'leadership', label: 'Leadership',           category: 'creative',    x: 80, y: 75, connections: ['founder', 'iit', 'melophile'] },
  { id: 'iit',        label: 'IIT-Patna Ambassador', category: 'creative',    x: 60, y: 70, connections: ['leadership', 'founder'] },
  { id: 'melophile',  label: 'Melophile',            category: 'creative',    x: 55, y: 85, connections: ['leadership'] },
];

const catColor: Record<string, { line: string; glow: string; node: string; particle: string }> = {
  engineering: { line: 'rgba(56,189,248,',  glow: '0 0 18px rgba(56,189,248,0.7), 0 0 40px rgba(56,189,248,0.3)',  node: 'rgba(56,189,248,',  particle: '#38bdf8' },
  science:     { line: 'rgba(168,85,247,',  glow: '0 0 18px rgba(168,85,247,0.7), 0 0 40px rgba(168,85,247,0.3)',  node: 'rgba(168,85,247,',  particle: '#a855f7' },
  creative:    { line: 'rgba(251,191,36,',  glow: '0 0 18px rgba(251,191,36,0.7), 0 0 40px rgba(251,191,36,0.3)',  node: 'rgba(251,191,36,',  particle: '#fbbf24' },
};

const edges = (() => {
  const seen = new Set<string>();
  const result: { from: SkillNode; to: SkillNode }[] = [];
  for (const node of nodes) {
    for (const tid of node.connections) {
      const key = [node.id, tid].sort().join('-');
      if (!seen.has(key)) {
        seen.add(key);
        const target = nodes.find((n) => n.id === tid);
        if (target) result.push({ from: node, to: target });
      }
    }
  }
  return result;
})();

interface Particle { edgeIdx: number; t: number; speed: number; }

const ConstellationCanvas = ({ activeNode, containerRef }: {
  activeNode: string | null;
  containerRef: React.RefObject<HTMLDivElement>;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const sizeRef = useRef({ W: 0, H: 0 });

  useEffect(() => {
    particles.current = edges.map((_, i) => ({
      edgeIdx: i,
      t: Math.random(),
      speed: 0.0006 + Math.random() * 0.001,
    }));
  }, []);

  // Resize only on container size change, not every frame
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ro = new ResizeObserver(() => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      sizeRef.current = { W: canvas.width, H: canvas.height };
    });
    ro.observe(container);
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    sizeRef.current = { W: canvas.width, H: canvas.height };
    return () => ro.disconnect();
  }, [containerRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const draw = () => {
      const { W, H } = sizeRef.current;
      ctx.clearRect(0, 0, W, H);
      const px = (p: number) => (p / 100) * W;
      const py = (p: number) => (p / 100) * H;

      // Draw edges — no shadowBlur on lines (expensive)
      ctx.shadowBlur = 0;
      for (const { from, to } of edges) {
        const x1 = px(from.x), y1 = py(from.y);
        const x2 = px(to.x),   y2 = py(to.y);
        const isActive = activeNode === from.id || activeNode === to.id;
        const col = catColor[from.category];

        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0,   col.line + (isActive ? '0.9)' : '0.3)'));
        grad.addColorStop(0.5, col.line + (isActive ? '1)'   : '0.5)'));
        grad.addColorStop(1,   col.line + (isActive ? '0.9)' : '0.3)'));

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad;
        ctx.lineWidth = isActive ? 1.6 : 0.7;
        ctx.stroke();
      }

      // Draw particles
      for (const p of particles.current) {
        p.t += p.speed;
        if (p.t > 1) p.t = 0;

        const { from, to } = edges[p.edgeIdx];
        const x1 = px(from.x), y1 = py(from.y);
        const x2 = px(to.x),   y2 = py(to.y);
        const x = x1 + (x2 - x1) * p.t;
        const y = y1 + (y2 - y1) * p.t;
        const col = catColor[from.category];
        const isActive = activeNode === from.id || activeNode === to.id;

        // Tail — no shadow
        const t0 = Math.max(0, p.t - 0.1);
        const tx = x1 + (x2 - x1) * t0;
        const ty = y1 + (y2 - y1) * t0;
        const tailGrad = ctx.createLinearGradient(tx, ty, x, y);
        tailGrad.addColorStop(0, col.line + '0)');
        tailGrad.addColorStop(1, col.line + (isActive ? '0.85)' : '0.55)'));
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(x, y);
        ctx.strokeStyle = tailGrad;
        ctx.lineWidth = isActive ? 2 : 1.2;
        ctx.stroke();

        // Head dot — shadow only here
        ctx.beginPath();
        ctx.arc(x, y, isActive ? 2.5 : 1.8, 0, Math.PI * 2);
        ctx.fillStyle = col.particle;
        ctx.shadowColor = col.particle;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [activeNode]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const SkillsSection = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isConnected = useCallback((nodeId: string) => {
    if (!activeNode) return false;
    const active = nodes.find((n) => n.id === activeNode);
    return active?.connections.includes(nodeId) || false;
  }, [activeNode]);

  return (
    <section id="skills" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <span className="neon-text text-xs">02 //</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Dependency <span className="cyan-glow">Graph</span>
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex gap-6 mb-8 font-mono text-xs">
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-sky-400" /> Engineering</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-500" /> Science & AI</span>
          <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-400" /> Leadership & Creative</span>
        </div>

        <div ref={containerRef} className="relative w-full aspect-[2/1] min-h-[400px]">
          <ConstellationCanvas activeNode={activeNode} containerRef={containerRef} />

          {nodes.map((node, i) => {
            const col = catColor[node.category];
            const active = activeNode === node.id;
            const connected = isConnected(node.id);
            const dim = activeNode && !active && !connected;
            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35, ease: 'easeOut' }}
                className="absolute cursor-pointer select-none font-mono text-xs rounded-full px-3 py-1.5 border -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  willChange: 'transform, opacity',
                  transition: 'transform 0.25s ease, opacity 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  transform: `translate(-50%, -50%) scale(${active ? 1.25 : connected ? 1.1 : 1})`,
                  background: col.node + (active ? '0.25)' : '0.08)'),
                  borderColor: col.node + (active ? '0.9)' : connected ? '0.7)' : '0.4)'),
                  color: col.node + (dim ? '0.35)' : '1)'),
                  boxShadow: active ? col.glow : connected ? col.glow.replace('0.7', '0.35').replace('0.3', '0.12') : 'none',
                  opacity: dim ? 0.35 : 1,
                }}
                onClick={() => setActiveNode(active ? null : node.id)}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse"
                  style={{ background: col.particle, boxShadow: `0 0 5px ${col.particle}` }}
                />
                {node.label}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
