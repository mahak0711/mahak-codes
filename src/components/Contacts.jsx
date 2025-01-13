'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com';
import { useState } from 'react';

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

    // Replace with your EmailJS service ID, template ID, and user ID
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
      initial="initial"
      animate="animate"
      className="min-h-screen bg-[#1c1c1c] text-white py-16 px-4 sm:px-6 lg:px-8"
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
              <motion.form variants={staggerChildren} className="space-y-6" onSubmit={handleSubmit}>
                <motion.div variants={fadeInUp} className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-zinc-800 border-zinc-700 text-white"
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
                      className="bg-zinc-800 border-zinc-700 text-white"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry"
                    className="bg-zinc-800 border-zinc-700 text-white"
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    className="bg-zinc-800 border-zinc-700 text-white min-h-[150px]"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Button type="submit" className="w-full bg-orange-600" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.div>
              </motion.form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
