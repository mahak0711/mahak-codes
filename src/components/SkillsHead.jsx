"use client";

import React, { useEffect, useState } from "react";
import { cn } from "../lib/utils"; // Ensure this utility function is defined
import './Skills.css';
// TypingAnimation Component
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
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
};

// SkillsHead Component
const SkillsHead = () => {
  const text = "My Skills"; 

  return (
    <div style={{marginTop:'7%',display:'flex',alignContent:'center',justifyContent:'center'}}>
      <TypingAnimation text={text} duration={200} className="text-blue-500" />
    </div>
  );
};

// Export the SkillsHead component
export default SkillsHead;
