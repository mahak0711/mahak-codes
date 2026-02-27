import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Github, Linkedin, Mail, TwitterIcon } from 'lucide-react';

const socialLinks = [
  { href: 'https://x.com/mahakkk07', icon: TwitterIcon, label: 'Twitter' },
  {
    href: 'https://www.linkedin.com/in/mahak-kankaria-9252a324a/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  { href: 'https://github.com/mahak0711', icon: Github, label: 'GitHub' },
  { href: 'mailto:kankariamahak7@gmail.com', icon: Mail, label: 'Email' },
];

export default function IDCard() {
  const controls = useAnimationControls();
  const [landed, setLanded] = useState(false);
  const cardRef = useRef(null);

  // Mouse tilt values (only active after landing)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const tiltX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), {
    stiffness: 200,
    damping: 25,
  });
  const tiltY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), {
    stiffness: 200,
    damping: 25,
  });

  useEffect(() => {
    async function runSequence() {
      // Phase 1: Fall with spring bounce (simulates gravity + elastic)
      await controls.start({
        y: 0,
        opacity: 1,
        transition: {
          y: { type: 'spring', stiffness: 45, damping: 11, mass: 2 },
          opacity: { duration: 0.3 },
        },
      });

      // Phase 2: Damped oscillation swing (settling)
      await controls.start({
        rotate: [0, 10, -7, 5, -3.5, 2, -1.2, 0.6, 0],
        transition: { duration: 3.5, ease: 'easeOut' },
      });

      setLanded(true);

      // Phase 3: Continuous gentle pendulum swing
      controls.start({
        rotate: [0, 2.5, 0, -2.5, 0],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      });
    }
    runSequence();
  }, [controls]);

  const handleMouseMove = (e) => {
    if (!landed || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      className="flex flex-col items-center -mt-20"
      style={{ transformOrigin: 'top center' }}
      initial={{ y: '-70vh', opacity: 0 }}
      animate={controls}
    >
      {/* ── Lanyard strap — tall enough to reach the top of the viewport ── */}
      <div className="w-7 md:w-9 h-44 md:h-56 relative overflow-hidden rounded-sm shadow-sm">
        {/* Base color */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600 via-orange-500 to-orange-600" />
        {/* Fabric texture */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.2) 3px, rgba(0,0,0,0.2) 4px)',
          }}
        />
        {/* Woven center line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-orange-800/20" />
        {/* Highlight edge */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-orange-300/30" />
      </div>

      {/* ── Metal clip ── */}
      <div className="relative flex flex-col items-center -mt-[1px] z-10">
        {/* Top bar */}
        <div className="w-11 h-2.5 bg-gradient-to-b from-zinc-200 via-zinc-100 to-zinc-300 rounded-sm shadow-md border border-zinc-300/60" />
        {/* Bottom jaw */}
        <div className="w-7 h-4 bg-gradient-to-b from-zinc-200 to-zinc-400 rounded-b-sm shadow-md border-x border-b border-zinc-300/60 relative">
          {/* Clip slit */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-zinc-500/40" />
        </div>
      </div>

      {/* ── Card body with hover tilt ── */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 800,
          rotateX: landed ? tiltX : 0,
          rotateY: landed ? tiltY : 0,
          transformStyle: 'preserve-3d',
        }}
        className="mt-0.5"
      >
        <div
          className="relative bg-white rounded-2xl w-[250px] md:w-[300px] overflow-hidden"
          style={{
            boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1), 0 0 30px rgba(255,107,0,0.08), inset 0 1px 0 rgba(255,255,255,0.2)',
          }}
        >
          {/* Top accent gradient */}
          <div className="h-1.5 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 shadow-[0_2px_10px_rgba(255,107,0,0.3)]" />

          {/* Card hole for clip */}
          <div className="flex justify-center pt-2.5 pb-2">
            <div className="w-10 h-3 rounded-full bg-zinc-100 border border-zinc-300 shadow-[inset_0_1px_3px_rgba(0,0,0,0.15)]" />
          </div>

          {/* Profile photo */}
          <div className="flex justify-center pb-3">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-[3px] border-orange-200 shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
              <img
                src="image.jpg"
                alt="Mahak Kankaria"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name & role */}
          <div className="text-center px-5 pb-1">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
              MAHAK KANKARIA
            </h2>
            <p className="font-semibold text-sm mt-1 tracking-widest uppercase bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              Full Stack Developer
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center py-3">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-5 pb-5">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, y: -3, color: '#ff6b00' }}
                whileTap={{ scale: 0.85 }}
                className="text-zinc-400 transition-all duration-200 hover:drop-shadow-[0_0_6px_rgba(255,107,0,0.4)]"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* 3D edge highlights */}
          <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-zinc-200/60 via-white/30 to-zinc-200/60" />
          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-zinc-200/60 via-white/30 to-zinc-200/60" />
        </div>
      </motion.div>
    </motion.div>
  );
}
