import React from "react";
import { Calendar, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Leetcode from "./ui/leetcodeCalendar";

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
        <div className="">
          <motion.div variants={staggerChildren}>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-8 mt-4 "
            >
              About Me
            </motion.h1>
            <motion.div variants={fadeInUp} className="prose prose-invert">
              <p className="text-lg text-zinc-300">
              I am a full-stack developer with expertise in building dynamic web applications using technologies like React, Node.js, and various database solutions. I combine strong front-end design skills with back-end development knowledge to create responsive, user-centric digital experiences. Passionate about problem-solving and continuous learning, I strive to deliver efficient and impactful solutions.
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
                  <h3 className="font-semibold">Trainee</h3>
                  <p className="text-zinc-400">Grras Solutions Pvt. Ltd.  <span className="text-orange-600" >•</span>  July 2023</p>
                  <p className="text-zinc-300 mt-2">
                  Completed a frontend development internship, specializing in creating responsive and interactive web applications using HTML, CSS, JavaScript, and React.
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
                <h3 className="font-semibold"> B.Tech in Computer Science</h3>
                <p className="text-zinc-400">Poornima Institute Of Engineering AND Technology   <span className="text-orange-600" >•</span> 2022 - Expected 2026</p>
              </motion.div>
              <br/>
              <Leetcode />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
    </motion.div>
  );
}
