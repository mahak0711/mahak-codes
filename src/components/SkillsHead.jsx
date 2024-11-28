'use client';

import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const TypingAnimation = ({ text, duration = 200, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i, text]);

  return (
    <h1
      className={cn(
        "font-merriweather text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {displayedText || text}
    </h1>
  );
};

const SkillsHead = () => {
  const text = "My Skills";

  return (
    <>
      {/* Import fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&family=Varela+Round&display=swap"
        rel="stylesheet"
      />

      {/* Inline styles for body */}
      <style>
        {`
          body {
            font-family: "Merriweather Sans", sans-serif;
            background-color: #1c1c1c;
            scrollbar-width: none; /* For Firefox */
            overflow-x: hidden; /* Prevent horizontal scrolling */
          }
          /* For Webkit browsers (Chrome, Safari) */
          ::-webkit-scrollbar {
            display: none;
          }
          html, body {
            width: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden; /* Prevent horizontal scrolling */
          }
        `}
      </style>

      {/* Main component */}
      <div className="mt-[7%] flex items-center justify-center">
        <TypingAnimation text={text} duration={200} className="text-blue-500" />
      </div>
    </>
  );
};

export default SkillsHead;
