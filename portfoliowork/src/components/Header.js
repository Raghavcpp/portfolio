// src/components/Header.js
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md dark:bg-gray-900 transition-all z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Raghav Verma
        </h1>
        <nav className="space-x-6">
          <Link href="/about" className="text-gray-700 dark:text-gray-300">About</Link>
          <Link href="/projects" className="text-gray-700 dark:text-gray-300">Projects</Link>
          <Link href="/research" className="text-gray-700 dark:text-gray-300">Research</Link>
          <Link href="/experience" className="text-gray-700 dark:text-gray-300">Experience</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300">Contact</Link>
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded bg-gray-200 dark:bg-gray-800"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
