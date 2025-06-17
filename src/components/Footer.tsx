import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { useThemeStore } from "../store/store";
import { Facebook } from "lucide-react";

export default function Footer() {
  const { darkMode } = useThemeStore();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`w-full py-10 px-6 ${darkMode ? "bg-gray-900 text-white" : "bg-[#0077b6] text-white"}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Master Pools Zimbabwe</h2>
          <p>Building dreams, one pool at a time.</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <p>Contact Us:</p>
          <p>Email: info@masterpools.co.zw</p>
          <p>Phone: +263 77 123 4567</p>
          <a
            href=""
            target="_blank"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition"
          >
            <Facebook className="w-5 h-5" /> Facebook
          </a>
        </div>

        <div className="flex flex-col md:items-end text-center md:text-right">
          <p className="mb-2">Quick Links</p>
          <div className="flex flex-col gap-1">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} Master Pools. All Rights Reserved.
      </div>
    </motion.footer>
  );
}
