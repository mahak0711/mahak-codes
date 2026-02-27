'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com';
import { useState } from 'react';
import Card3D from './ui/Card3D';
import AnimatedBackground from './ui/AnimatedBackground';
import FloatingOrbs from './ui/FloatingOrbs';
import Text3D from './ui/Text3D';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_zunkyr8';
    const templateID = 'template_7atjr0m';
    const userID = 'YyDMEh-4JOjtPtXaw';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log('Message sent successfully', response);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('Error sending message', error);
          alert('Failed to send message, please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#1c1c1c] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <AnimatedBackground />
      <FloatingOrbs />

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <Text3D text="Get in Touch" className="text-4xl md:text-5xl font-bold" />
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Card3D intensity={8}>
            <Card className="bg-zinc-900/70 backdrop-blur-xl border-zinc-800/30 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.03)]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
                <CardDescription className="text-zinc-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-300">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="bg-zinc-800/60 border-zinc-700/40 text-white focus:border-orange-500/50 focus:shadow-[0_0_0_1px_rgba(255,107,0,0.2),0_0_15px_rgba(255,107,0,0.08)] transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-300">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className="bg-zinc-800/60 border-zinc-700/40 text-white focus:border-orange-500/50 focus:shadow-[0_0_0_1px_rgba(255,107,0,0.2),0_0_15px_rgba(255,107,0,0.08)] transition-all duration-300"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-zinc-300">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      className="bg-zinc-800/60 border-zinc-700/40 text-white focus:border-orange-500/50 focus:shadow-[0_0_0_1px_rgba(255,107,0,0.2),0_0_15px_rgba(255,107,0,0.08)] transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="space-y-2"
                  >
                    <label className="text-sm font-medium text-zinc-300">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      className="bg-zinc-800/60 border-zinc-700/40 text-white min-h-[150px] focus:border-orange-500/50 focus:shadow-[0_0_0_1px_rgba(255,107,0,0.2),0_0_15px_rgba(255,107,0,0.08)] transition-all duration-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.015, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 px-6 rounded-lg text-white font-semibold tracking-wide flex items-center justify-center gap-2.5 disabled:opacity-60 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #ff6b00, #e55d00)',
                        boxShadow: '0 4px 15px rgba(255,107,0,0.25), inset 0 1px 0 rgba(255,255,255,0.15), 0 0 0 1px rgba(255,107,0,0.3)',
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </Card3D>
        </motion.div>
      </div>
    </motion.div>
  );
}
