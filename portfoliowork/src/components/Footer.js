// src/components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 text-center py-4 mt-10">
      <p className="text-gray-700 dark:text-gray-300">© 2025 Raghav Verma. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <Link href="https://github.com/Raghavcpp" className="text-gray-700 dark:text-gray-300">GitHub</Link>
        <Link href="https://linkedin.com/in/Raghavcpp" className="text-gray-700 dark:text-gray-300">LinkedIn</Link>
        <Link href="/contact" className="text-gray-700 dark:text-gray-300">Contact</Link>
      </div>
    </footer>
  );
}
