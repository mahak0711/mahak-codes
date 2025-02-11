import React from 'react';
import { Github, Instagram, Linkedin, Mail, TwitterIcon } from 'lucide-react';
import Meteors from './ui/meteors';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export function Hero() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-12 relative overflow-hidden">
      <Meteors number={20} />
      <div className="bg-white rounded-3xl p-6 text-black max-w-xs md:max-w-sm w-full shadow-lg">
        <div className="relative w-full h-48 md:h-64 mb-4">
          <img
            src="image.jpg"
            alt="Mahak Kankaria"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="p-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">MAHAK KANKARIA</h2>

          <div className="flex justify-center space-x-6 mt-6 text-[#ff6b00]">
            <a href="https://x.com/mahakkk07" className="hover:text-orange-600">
              <TwitterIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mahak-kankaria-9252a324a/" className="hover:text-orange-600">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/mahak0711" className="hover:text-orange-600">
              <Github size={24} />
            </a>
            <a href="mailto:kankariamahak7@gmail.com" className="hover:text-orange-600">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-xl w-full text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          FULL STACK <br />
          <span className="text-[#3a3a3a]">DEVELOPER</span>
        </h1>
        <p className="text-lg md:text-xl mb-6">
          I’m a developer and photographer.<br />  
          I occasionally enjoy designing.
        </p>

        <div className="p-2">
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
        </div>
      </div>
    </div>
  );
}