import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorSpotlight() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { damping: 20, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
    >
      {/* Main glow */}
      <motion.div
        className="pointer-events-none absolute"
        style={{
          x: springX,
          y: springY,
          width: 500,
          height: 500,
          marginLeft: -250,
          marginTop: -250,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,107,0,0.07) 0%, rgba(255,107,0,0.03) 30%, transparent 55%)',
        }}
      />
      {/* Inner crisp dot */}
      <motion.div
        className="pointer-events-none absolute"
        style={{
          x: springX,
          y: springY,
          width: 120,
          height: 120,
          marginLeft: -60,
          marginTop: -60,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,107,0,0.04) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
}
