import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorSpotlight() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

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
      style={{
        background: 'transparent',
      }}
    >
      <motion.div
        className="pointer-events-none absolute"
        style={{
          x: springX,
          y: springY,
          width: 600,
          height: 600,
          marginLeft: -300,
          marginTop: -300,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(255,107,0,0.06) 0%, rgba(255,107,0,0.03) 25%, transparent 60%)',
          filter: 'blur(2px)',
        }}
      />
    </motion.div>
  );
}
