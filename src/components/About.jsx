import React from "react";
import { Calendar, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen bg-[#151312] text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-full mx-auto"> {/* Use full width */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div variants={staggerChildren}>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-8 mt-4 "
            >
              About Me
            </motion.h1>
            <motion.div variants={fadeInUp} className="prose prose-invert">
              <p className="text-lg text-zinc-300">
                I'm a Full Stack Developer with a passion for creating intuitive
                and engaging user experiences. With expertise in both front-end
                and back-end development, I specialize in building scalable web
                applications using modern technologies.
              </p>

              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-semibold mt-8 mb-4"
              >
                Experience
              </motion.h2>
              <motion.div variants={staggerChildren} className="space-y-6">
                <motion.div
                  variants={fadeInUp}
                  className="border-l-2 border-zinc-800 pl-4"
                >
                  <h3 className="font-semibold">Senior Full Stack Developer</h3>
                  <p className="text-zinc-400">Company Name • 2020 - Present</p>
                  <p className="text-zinc-300 mt-2">
                    Led development of multiple web applications, mentored
                    junior developers, and implemented best practices for code
                    quality and performance.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="border-l-2 border-zinc-800 pl-4"
                >
                  <h3 className="font-semibold">Full Stack Developer</h3>
                  <p className="text-zinc-400">Previous Company • 2018 - 2020</p>
                  <p className="text-zinc-300 mt-2">
                    Developed and maintained various client projects using
                    React, Node.js, and AWS.
                  </p>
                </motion.div>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-2xl font-semibold mt-8 mb-4"
              >
                Education
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="border-l-2 border-zinc-800 pl-4"
              >
                <h3 className="font-semibold">Bachelor of Computer Science</h3>
                <p className="text-zinc-400">University Name • 2014 - 2018</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
