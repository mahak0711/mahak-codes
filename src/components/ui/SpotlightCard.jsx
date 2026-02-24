import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), {
    stiffness: 200,
    damping: 25,
  });

  const spotlightX = useTransform(mouseX, [0, 1], [0, 100]);
  const spotlightY = useTransform(mouseY, [0, 1], [0, 100]);

  const spotlightBackground = useTransform(
    [spotlightX, spotlightY],
    ([sx, sy]) =>
      `radial-gradient(600px circle at ${sx}% ${sy}%, rgba(255,107,0,0.12), rgba(255,69,0,0.05) 40%, transparent 70%)`
  );

  const glareBackground = useTransform(
    [spotlightX, spotlightY],
    ([sx, sy]) =>
      `radial-gradient(300px circle at ${sx}% ${sy}%, rgba(255,255,255,0.06), transparent 50%)`
  );

  function handleMouse(e) {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative group ${className}`}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: spotlightBackground }}
      />
      {/* Glare overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: glareBackground }}
      />
      {/* Border glow on hover */}
      <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-orange-500/20 via-orange-400/10 to-orange-500/20 blur-sm -z-10" />
      {children}
    </motion.div>
  );
}
