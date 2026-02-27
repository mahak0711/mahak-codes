import { useEffect, useRef } from 'react';

const orbs = [
  { size: 120, x: 15, y: 20, speed: 0.8, depth: 0.3, hue: 25 },
  { size: 80, x: 75, y: 30, speed: 1.2, depth: 0.6, hue: 15 },
  { size: 60, x: 45, y: 70, speed: 0.6, depth: 0.9, hue: 30 },
  { size: 100, x: 85, y: 75, speed: 1.0, depth: 0.4, hue: 20 },
  { size: 50, x: 30, y: 50, speed: 1.4, depth: 0.7, hue: 10 },
  { size: 70, x: 60, y: 15, speed: 0.9, depth: 0.5, hue: 35 },
];

export default function FloatingOrbs() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animFrame;
    let time = 0;

    function resize() {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    resize();
    window.addEventListener('resize', resize);

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    }
    canvas.addEventListener('mousemove', handleMouseMove);

    function draw() {
      time += 0.005;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.clearRect(0, 0, w, h);

      for (const orb of orbs) {
        // Base position with floating motion
        const floatX = Math.sin(time * orb.speed + orb.x) * 30;
        const floatY = Math.cos(time * orb.speed * 0.7 + orb.y) * 25;
        const floatZ = Math.sin(time * orb.speed * 0.5) * 0.2;

        // Parallax from mouse
        const parallaxX = (mouseRef.current.x - 0.5) * 60 * orb.depth;
        const parallaxY = (mouseRef.current.y - 0.5) * 40 * orb.depth;

        const cx = (orb.x / 100) * w + floatX + parallaxX;
        const cy = (orb.y / 100) * h + floatY + parallaxY;
        const scale = 1 + floatZ;
        const radius = (orb.size / 2) * scale;

        // Outer glow
        const outerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 2.5);
        outerGlow.addColorStop(0, `hsla(${orb.hue}, 100%, 55%, 0.06)`);
        outerGlow.addColorStop(1, 'transparent');
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Main orb with glass effect
        const grad = ctx.createRadialGradient(
          cx - radius * 0.3, cy - radius * 0.3, 0,
          cx, cy, radius
        );
        grad.addColorStop(0, `hsla(${orb.hue}, 100%, 65%, 0.15)`);
        grad.addColorStop(0.5, `hsla(${orb.hue}, 100%, 50%, 0.08)`);
        grad.addColorStop(1, `hsla(${orb.hue}, 100%, 40%, 0.03)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();

        // Highlight reflection
        const highlight = ctx.createRadialGradient(
          cx - radius * 0.25, cy - radius * 0.35, 0,
          cx - radius * 0.25, cy - radius * 0.35, radius * 0.5
        );
        highlight.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
        highlight.addColorStop(1, 'transparent');
        ctx.fillStyle = highlight;
        ctx.beginPath();
        ctx.arc(cx - radius * 0.25, cy - radius * 0.35, radius * 0.5, 0, Math.PI * 2);
        ctx.fill();

        // Edge ring
        ctx.strokeStyle = `hsla(${orb.hue}, 100%, 60%, 0.08)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      animFrame = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto -z-10"
      style={{ opacity: 0.7 }}
    />
  );
}
