import { useEffect, useRef, useMemo } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; color: string; char: string;
}

const chars = ['{', '}', '<', '>', 'A', 'T', 'G', 'C', '0', '1', 'λ', 'Σ'];
const colors = ['#00FFFF', '#9400D3', '#FF1493', '#39FF14'];

const BiotechParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });

  const particles = useMemo<Particle[]>(() =>
    Array.from({ length: 22 }, () => ({
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
      y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 8 + 7,
      color: colors[Math.floor(Math.random() * colors.length)],
      char: chars[Math.floor(Math.random() * chars.length)],
    })),
  []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true })!;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Throttle mousemove to every 32ms
    let lastMouse = 0;
    const handleMouse = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouse < 32) return;
      lastMouse = now;
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });

    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;

      for (const p of particles) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const distSq = dx * dx + dy * dy;
        if (distSq < 10000 && distSq > 0) {          // 100px radius, no sqrt
          const inv = 0.3 / Math.sqrt(distSq);
          p.vx += dx * inv;
          p.vy += dy * inv;
        }
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.globalAlpha = 0.13;
        ctx.fillStyle = p.color;
        ctx.font = `${p.size}px "Fira Code", monospace`;
        ctx.fillText(p.char, p.x, p.y);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [particles]);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[1] pointer-events-none" />;
};

export default BiotechParticles;
