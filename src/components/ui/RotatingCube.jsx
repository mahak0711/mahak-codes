import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const faces = [
  { name: 'Front', icons: ['React', 'Next.js'], gradient: 'from-orange-500/20 to-orange-600/10' },
  { name: 'Back', icons: ['Node.js', 'Express'], gradient: 'from-orange-600/20 to-red-500/10' },
  { name: 'Right', icons: ['MongoDB', 'PostgreSQL'], gradient: 'from-orange-400/20 to-orange-500/10' },
  { name: 'Left', icons: ['JavaScript', 'TypeScript'], gradient: 'from-red-500/20 to-orange-500/10' },
  { name: 'Top', icons: ['Tailwind', 'CSS3'], gradient: 'from-orange-500/20 to-yellow-500/10' },
  { name: 'Bottom', icons: ['Git', 'Linux'], gradient: 'from-orange-600/20 to-orange-400/10' },
];

export default function RotatingCube({ size = 140 }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [autoAngle, setAutoAngle] = useState({ x: -20, y: 30 });

  const rotateX = useMotionValue(-20);
  const rotateY = useMotionValue(30);
  const springX = useSpring(rotateX, { stiffness: 60, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 60, damping: 20 });

  // Auto-rotation
  useEffect(() => {
    if (isHovered) return;
    let frame;
    let startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const x = -20 + Math.sin(elapsed * 0.3) * 15;
      const y = 30 + elapsed * 20;
      rotateX.set(x);
      rotateY.set(y);
      setAutoAngle({ x, y });
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isHovered, rotateX, rotateY]);

  function handleMouseMove(e) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = -(e.clientY - centerY) * 0.4;
    const y = (e.clientX - centerX) * 0.4;
    rotateX.set(x);
    rotateY.set(y);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    rotateX.set(autoAngle.x);
    rotateY.set(autoAngle.y);
  }

  const half = size / 2;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="flex items-center justify-center"
    >
      <div
        ref={containerRef}
        onMouseMove={(e) => { setIsHovered(true); handleMouseMove(e); }}
        onMouseLeave={handleMouseLeave}
        className="cursor-grab active:cursor-grabbing"
        style={{ perspective: 800, width: size * 2, height: size * 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <motion.div
          style={{
            width: size,
            height: size,
            transformStyle: 'preserve-3d',
            rotateX: springX,
            rotateY: springY,
          }}
          className="relative"
        >
          {/* Front */}
          <CubeFace
            size={size}
            transform={`translateZ(${half}px)`}
            face={faces[0]}
          />
          {/* Back */}
          <CubeFace
            size={size}
            transform={`translateZ(-${half}px) rotateY(180deg)`}
            face={faces[1]}
          />
          {/* Right */}
          <CubeFace
            size={size}
            transform={`translateX(${half}px) rotateY(90deg)`}
            face={faces[2]}
          />
          {/* Left */}
          <CubeFace
            size={size}
            transform={`translateX(-${half}px) rotateY(-90deg)`}
            face={faces[3]}
          />
          {/* Top */}
          <CubeFace
            size={size}
            transform={`translateY(-${half}px) rotateX(90deg)`}
            face={faces[4]}
          />
          {/* Bottom */}
          <CubeFace
            size={size}
            transform={`translateY(${half}px) rotateX(-90deg)`}
            face={faces[5]}
          />

          {/* Inner glow */}
          <div
            className="absolute inset-0"
            style={{
              transformStyle: 'preserve-3d',
              background: 'radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function CubeFace({ size, transform, face }) {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center bg-gradient-to-br ${face.gradient} backdrop-blur-md border border-orange-500/20 rounded-xl`}
      style={{
        width: size,
        height: size,
        transform,
        backfaceVisibility: 'visible',
        boxShadow: 'inset 0 0 30px rgba(255,107,0,0.05), 0 0 15px rgba(255,107,0,0.08)',
      }}
    >
      <div className="text-center space-y-1">
        {face.icons.map((icon) => (
          <p key={icon} className="text-sm font-medium text-orange-300/90">{icon}</p>
        ))}
      </div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-white/[0.02] to-white/[0.05]" />
    </div>
  );
}
