'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input} from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

export default function ContactPage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div variants={fadeInUp}>
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Get in Touch</CardTitle>
              <CardDescription className="text-zinc-400">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.form variants={staggerChildren} className="space-y-6">
                <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Name</label>
                    <Input
                      placeholder="Your name"
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Email</label>
                    <Input
                      type="email"
                      placeholder="Your email"
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Subject</label>
                  <Input
                    placeholder="Project inquiry"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Message</label>
                  <Textarea
                    placeholder="Your message"
                    className="bg-zinc-800 border-zinc-700 text-white min-h-[150px]"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Button className="w-full">Send Message</Button>
                </motion.div>
              </motion.form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
