"use client";

import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import projects from "@/projects";
import SpotlightCard from "./ui/SpotlightCard";
import AnimatedBackground from "./ui/AnimatedBackground";
import TextShimmer from "./ui/TextShimmer";

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#151312] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <TextShimmer className="text-4xl md:text-5xl font-bold">Projects</TextShimmer>
          </h1>
          <span className="block h-1 w-20 mt-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600/0" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground mb-12 mt-3"
        >
          A collection of my recent work
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.95, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <SpotlightCard>
                <Card className="bg-zinc-900/80 backdrop-blur-sm border-zinc-800 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,107,0,0.12)] hover:border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-zinc-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video object-contain rounded-lg bg-zinc-800 mb-4 overflow-hidden group/img">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="object-conatin w-full h-full transition-transform duration-500 group-hover/img:scale-105"
                      />
                    </div>
                    <p className="text-zinc-300 mb-3 text-sm">{project.tech}</p>

                    {project.techTags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techTags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 text-xs rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 transition-colors cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2 group/btn">
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2 group/btn">
                        <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
