import React from "react";
import { motion } from "framer-motion";
import SkillsHead from "./SkillsHead";
import IconCloud from "./ui/icon-cloud";
import { ScrollDownButton } from "./ui/ScrollDownButton";
import AnimatedBackground from "./ui/AnimatedBackground";
import FloatingOrbs from "./ui/FloatingOrbs";
import TextShimmer from "./ui/TextShimmer";
import Text3D from "./ui/Text3D";

import RotatingCube from "./ui/RotatingCube";

function TimelineItem({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative pl-8"
    >
      {/* Glowing dot with pulse ring */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(255,107,0,0.7)]">
        <span className="absolute inset-0 rounded-full bg-orange-500/30 animate-ping" />
      </div>
      {/* Vertical line */}
      <div className="absolute left-[5px] top-5 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/60 via-orange-500/20 to-transparent" />
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-[#1c1c1c] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <AnimatedBackground variant="cosmic" />
        <FloatingOrbs />

        <div className="max-w-full mx-auto relative">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-8 mt-4"
            >
              <Text3D text="About Me" className="text-4xl md:text-5xl font-bold" />
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-invert"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8 mb-6">
                <p className="text-lg text-zinc-300 leading-relaxed flex-1">
                  I am a full-stack developer with expertise in building dynamic web applications using technologies like React, Node.js, and various database solutions. I combine strong front-end design skills with back-end development knowledge to create responsive, user-centric digital experiences. Passionate about problem-solving and continuous learning, I strive to deliver efficient and impactful solutions.
                </p>
                <div className="flex-shrink-0 hidden lg:block">
                  <RotatingCube size={120} />
                </div>
              </div>

              {/* Gradient divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px w-full my-8 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent origin-left"
              />

              <motion.h2
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold mt-8 mb-6 text-white"
              >
                <TextShimmer className="text-2xl font-semibold">Experience</TextShimmer>
              </motion.h2>

              <div className="space-y-6">
                <TimelineItem delay={0.1}>
                  <h3 className="font-semibold text-white">Trainee</h3>
                  <p className="text-zinc-400">Grras Solutions Pvt. Ltd.  <span className="text-orange-600">•</span>  July 2023</p>
                  <p className="text-zinc-300 mt-2">
                    Completed a frontend development internship, specializing in creating responsive and interactive web applications using HTML, CSS, JavaScript, and React.
                  </p>
                </TimelineItem>
              </div>

              {/* Gradient divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-px w-full my-8 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent origin-left"
              />

              <motion.h2
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold mt-8 mb-6 text-white"
              >
                <TextShimmer className="text-2xl font-semibold">Education</TextShimmer>
              </motion.h2>

              <TimelineItem delay={0.1}>
                <h3 className="font-semibold text-white">B.Tech in Computer Science</h3>
                <p className="text-zinc-400">Poornima Institute Of Engineering AND Technology   <span className="text-orange-600">•</span> 2022 - Expected 2026</p>
              </TimelineItem>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <ScrollDownButton />
      <SkillsHead />

      <IconCloud iconSlugs={["javascript", "typescript", "react", "nodejs", "html5", "css3", "git",
        "github", "figma", "bootstrap", "tailwindcss", "mongodb", "firebase",
        "express", "vite", "vercel", "linux", "java", "python", "nextdotjs", "postgresql", "prisma"]} />
    </>
  );
}
