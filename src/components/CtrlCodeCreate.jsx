import { motion } from "framer-motion";

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

export default function CodePage() {
  const username = 'mahak0711'; // Replace with your actual LeetCode username
  const year=2025;
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen bg-[#151312] text-white py-16"
    >
      <div className="max-w-full mx-auto"> {/* Use full width */}
        <div>
          <motion.div variants={staggerChildren}>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-8 mt-6"
            >
              Ctrl + Code + Create
            </motion.h1>
            <motion.div variants={fadeInUp} className="prose prose-invert flex justify-center py-8">
              {/* Pass username and sessionCookie as props */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
