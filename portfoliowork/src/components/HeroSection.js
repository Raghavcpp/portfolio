// src/components/HeroSection.js
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center">
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Raghav Verma
      </motion.h1>
      <motion.p
        className="text-gray-700 dark:text-gray-300 mt-2 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        A Software Developer | MERN Stack Enthusiast
      </motion.p>
      <motion.a
        href="/projects"
        className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}
