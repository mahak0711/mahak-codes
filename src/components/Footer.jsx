import React from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#1c1c1c] text-white relative"
    >
      {/* Gradient top border - animated width */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="h-px w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent origin-center"
      />

      <div className="flex items-center justify-center py-6">
        <div className="text-center text-white/90">
          <p className="flex items-center justify-center gap-1.5 text-sm">
            Customized with{" "}
            <motion.span
              animate={{
                scale: [1, 1.3, 1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.5,
              }}
            >
              <Heart className="h-4 w-4 fill-red-500 text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.5)]" />
            </motion.span>{" "}
            by{" "}
            <span className="text-orange-400 font-medium">Mahak Kankaria</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
