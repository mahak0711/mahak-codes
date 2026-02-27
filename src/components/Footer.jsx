import React from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0a0a0a] text-white relative"
    >
      {/* Gradient top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="h-px w-full origin-center"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,107,0,0.4), rgba(255,107,0,0.6), rgba(255,107,0,0.4), transparent)',
        }}
      />

      <div className="flex items-center justify-center py-7">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-zinc-400 tracking-wide">
            Customized with{" "}
            <motion.span
              animate={{
                scale: [1, 1.25, 1, 1.25, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.5,
              }}
              className="inline-flex"
            >
              <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.6)]" />
            </motion.span>{" "}
            by{" "}
            <span className="text-orange-400 font-semibold tracking-wide bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Mahak Kankaria
            </span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
