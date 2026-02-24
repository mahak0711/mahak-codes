import { motion } from 'framer-motion';

const shapes = [
  { clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', size: 80, x: '10%', y: '15%', delay: 0 },
  { clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', size: 60, x: '80%', y: '20%', delay: 1.5 },
  { clipPath: 'circle(50%)', size: 50, x: '70%', y: '70%', delay: 3 },
  { clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', size: 45, x: '20%', y: '75%', delay: 2 },
  { clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', size: 70, x: '50%', y: '10%', delay: 4 },
];

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute will-change-transform"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            clipPath: shape.clipPath,
            background: 'linear-gradient(135deg, rgba(255,107,0,0.12), rgba(255,69,0,0.05))',
          }}
          animate={{
            y: [0, -20, 0, 15, 0],
            rotateX: [0, 180, 360],
            rotateY: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1, 0.95, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
