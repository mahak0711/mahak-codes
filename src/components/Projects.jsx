'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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

function ProjectsPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen bg-[#151312] text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-2"
        >
          Projects
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-muted-foreground mb-12"
        >
          A selection of my recent work
        </motion.p>

        <motion.div
          variants={staggerChildren}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {[1, 2, 3].map((project) => (
            <motion.div key={project} variants={fadeInUp}>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Project Name</CardTitle>
                  <CardDescription className="text-zinc-400">Full Stack Application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg bg-zinc-800 mb-4 overflow-hidden">
                    <img
                      src="/placeholder.svg"
                      alt="Project screenshot"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-zinc-300 mb-4">
                    A full-stack application built with Next.js, JavaScript, and Tailwind CSS.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProjectsPage;