import { motion } from 'framer-motion';

export default function StaggerText({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  once = true,
}) {
  const words = text.split(' ');

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-flex mr-[0.3em]">
          {word.split('').map((char, ci) => {
            const totalIndex =
              words.slice(0, wi).reduce((acc, w) => acc + w.length, 0) + ci;
            return (
              <motion.span
                key={ci}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: {
                      duration: 0.4,
                      delay: delay + totalIndex * staggerDelay,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  },
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </motion.span>
  );
}
