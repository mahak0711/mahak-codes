import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Card3D({ children, className = '', intensity = 15 }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [intensity, -intensity]),
    { stiffness: 200, damping: 22 }
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-intensity, intensity]),
    { stiffness: 200, damping: 22 }
  );

  const translateZ = useSpring(
    useMotionValue(0),
    { stiffness: 250, damping: 25 }
  );

  const innerX = useSpring(
    useTransform(mouseX, [0, 1], [-6, 6]),
    { stiffness: 150, damping: 18 }
  );
  const innerY = useSpring(
    useTransform(mouseY, [0, 1], [-6, 6]),
    { stiffness: 150, damping: 18 }
  );

  // Dynamic shadow
  const shadowX = useTransform(mouseX, [0, 1], [15, -15]);
  const shadowY = useTransform(mouseY, [0, 1], [15, -15]);
  const shadow = useTransform(
    [shadowX, shadowY],
    ([sx, sy]) => `${sx}px ${sy}px 35px rgba(255,107,0,0.1), 0 20px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,107,0,0.05)`
  );

  // Crisp shine highlight
  const shineX = useTransform(mouseX, [0, 1], [0, 100]);
  const shineY = useTransform(mouseY, [0, 1], [0, 100]);
  const shine = useTransform(
    [shineX, shineY],
    ([sx, sy]) => `radial-gradient(400px circle at ${sx}% ${sy}%, rgba(255,255,255,0.06), transparent 50%)`
  );

  // Edge highlight that follows cursor
  const edgeGlow = useTransform(
    [shineX, shineY],
    ([sx, sy]) => `radial-gradient(300px circle at ${sx}% ${sy}%, rgba(255,107,0,0.1), transparent 60%)`
  );

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
    translateZ.set(15);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
    translateZ.set(0);
  }

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          translateZ,
          transformStyle: 'preserve-3d',
          boxShadow: shadow,
        }}
        className={`relative group/card3d rounded-xl ${className}`}
      >
        {/* Shine overlay */}
        <motion.div
          className="absolute inset-0 rounded-xl z-20 pointer-events-none opacity-0 group-hover/card3d:opacity-100 transition-opacity duration-300"
          style={{ background: shine }}
        />

        {/* Edge glow overlay */}
        <motion.div
          className="absolute -inset-px rounded-xl z-10 pointer-events-none opacity-0 group-hover/card3d:opacity-100 transition-opacity duration-300"
          style={{ background: edgeGlow }}
        />

        {/* Floating content */}
        <motion.div
          style={{
            x: innerX,
            y: innerY,
            transformStyle: 'preserve-3d',
          }}
        >
          {children}
        </motion.div>

        {/* Bottom depth shadow */}
        <div
          className="absolute -bottom-1 left-3 right-3 h-4 rounded-b-xl opacity-0 group-hover/card3d:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.25))',
            transform: 'translateZ(-10px)',
            filter: 'blur(4px)',
          }}
        />
      </motion.div>
    </div>
  );
}
