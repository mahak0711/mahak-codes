import React from 'react';
import { motion } from 'framer-motion';
import Meteors from './ui/meteors';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import AnimatedBackground from './ui/AnimatedBackground';
import FloatingShapes from './ui/FloatingShapes';
import Particles from './ui/Particles';
import StaggerText from './ui/StaggerText';
import TextShimmer from './ui/TextShimmer';
import IDCard from './ui/IDCard';

export function Hero() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white px-6 pb-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative overflow-hidden">
      <AnimatedBackground variant="cosmic" />
      <Particles count={40} />
      <FloatingShapes />
      <Meteors number={15} />

      {/* 3D Animated ID Card - lanyard extends to top of viewport */}
      <div className="relative z-10">
        <IDCard />
      </div>

      {/* Right content - slides in from right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
        className="max-w-xl w-full text-center md:text-left relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <StaggerText text="FULL STACK" delay={1.2} staggerDelay={0.04} />
          <br />
          <TextShimmer className="text-4xl md:text-6xl font-bold">DEVELOPER</TextShimmer>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 2 }}
          className="text-lg md:text-xl mb-6 text-zinc-300"
        >
          I'm a developer and photographer.<br />
          I occasionally enjoy designing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 2.3 }}
          className="overflow-auto scrollbar"
        >
          <GitHubCalendar
            year="2025"
            blockRadius="4"
            username="mahak0711"
            transformData={(data) =>
              data.filter((day) => {
                const date = new Date(day.date);
                return date.getMonth() >= 0 && date.getMonth() <= 8;
              }).map((day) => ({
                ...day,
                tooltip: `${day.count} activities on ${day.date}`,
              }))
            }
            renderBlock={(block, activity) =>
              React.cloneElement(block, {
                'data-tooltip-id': 'github-tooltip',
                'data-tooltip-html': activity.tooltip,
              })
            }
          />
          <ReactTooltip id="github-tooltip" />
        </motion.div>
      </motion.div>
    </div>
  );
}
