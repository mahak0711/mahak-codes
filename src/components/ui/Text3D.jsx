import { motion } from 'framer-motion';

export default function Text3D({ text, className = '', delay = 0 }) {
  const letters = text.split('');

  return (
    <span className={`inline-flex flex-wrap ${className}`} style={{ perspective: 600 }}>
      {letters.map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          initial={{
            opacity: 0,
            rotateX: -90,
            y: 40,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            rotateX: 0,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.04,
            type: 'spring',
            stiffness: 100,
            damping: 12,
          }}
          className="inline-block"
          style={{
            transformStyle: 'preserve-3d',
            textShadow: '0 2px 0 rgba(255,107,0,0.3), 0 4px 0 rgba(255,107,0,0.15), 0 6px 0 rgba(255,107,0,0.08), 0 8px 15px rgba(0,0,0,0.3)',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
}
