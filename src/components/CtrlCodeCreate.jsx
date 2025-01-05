import { motion } from "framer-motion";
import LeetCodeStats from "./Leetcode/LeetCodeStats";

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
  const sessionCookie = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMTEzODczNzQiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJhbGxhdXRoLmFjY291bnQuYXV0aF9iYWNrZW5kcy5BdXRoZW50aWNhdGlvbkJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwMWZmYjc1ZTFiMWYxZWVkYWJhMzlmOWZjNjBkNDUyNTQzNDI3ZjBiZTAxZWQzYWJkMDEwMzQzZDgyNmI4MTc2Iiwic2Vzc2lvbl91dWlkIjoiOWQ1ZTQ1ZTMiLCJpZCI6MTEzODczNzQsImVtYWlsIjoia2Fua2FyaWFtYWhhazdAZ21haWwuY29tIiwidXNlcm5hbWUiOiJtYWhhazA3MTEiLCJ1c2VyX3NsdWciOiJtYWhhazA3MTEiLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS5jb20vdXNlcnMvbWFoYWswNzExL2F2YXRhcl8xNzI2OTA5NjUyLnBuZyIsInJlZnJlc2hlZF9hdCI6MTczNjA3NzA4OCwiaXAiOiI0Ny4yNDcuMTgwLjk4IiwiaWRlbnRpdHkiOiJmNTFiYjQ4MmM2NjBkMGVlYWRkMWYwNTgwNThhMmIzNSIsImRldmljZV93aXRoX2lwIjpbImU1OTMxNmZhZGQyNmU1MjQxZjg2OTkyYWVjNzViM2ViIiwiNDcuMjQ3LjE4MC45OCJdfQ.YSsU2r1PbTIR0ejnexpBgfWDN0Uvdqc42hSw1g--g30'; // Replace with your actual session cookie

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
              <LeetCodeStats username={username} sessionCookie={sessionCookie} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
