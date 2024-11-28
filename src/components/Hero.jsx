import React from 'react';
import {  Github, Instagram, Linkedin, Mail, TwitterIcon } from 'lucide-react'
import Meteors from './ui/meteors'; // Update the path based on where it’s installed

export function Hero() {
  return (
    
    <div className="min-h-screen bg-[#1c1c1c] text-white p-10 flex flex-col md:flex-row items-center justify-center gap-8">
     <Meteors number={20} />
      <div className="bg-white rounded-3xl p-6 text-black max-w-sm mt-4">
        <div className="relative w-full h-64 mb-4">
          <img
            src="image.jpg"
            alt="Mahak Kankaria"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
        
        <div className="p-6">
              <h2 className="text-4xl font-bold mt-12 mb-4 text-center">MAHAK KANKARIA</h2>
              
              <div className="flex justify-between mt-12 text-[#ff6b00]">
          
          <a href="https://x.com/mahakkk07" className="text-orange-500 hover:text-orange-600">
            <TwitterIcon size={24} />
          </a>
          <a href="https://www.linkedin.com/in/mahak-kankaria-9252a324a/" className="text-orange-500 hover:text-orange-600">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/mahak0711" className="text-orange-500 hover:text-orange-600">
            <Github size={24} />
          </a>
          <a href="mailto:kankariamahak7@gmail.com" className="text-orange-500 hover:text-orange-600">
            <Mail size={24} />
          </a>
              </div>
            </div>
      </div>
      <div className="max-w-2xl">
        <h1 className="text-6xl font-bold mb-4">
          FULL STACK
          <br />
          <span className="text-[#3a3a3a]">DEVELOPER</span>
        </h1>
        <p className="text-xl mb-8">
          Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
        </p>
        
        
      </div>
    </div>


    );
}
