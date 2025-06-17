import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useState } from "react";
import { useThemeStore } from "../store/store";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X } from "lucide-react";
import Footer from "../components/Footer";
import NotFound from "../components/NotFound";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useThemeStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <>
      {/* Animated Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full top-0 z-50 ${darkMode ? "bg-black/50" : "bg-white/50"} backdrop-blur-md shadow-md`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-bold text-blue-500"
          >
            Master Pools
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.1, color: "#60a5fa" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={link.path}
                  className="hover:text-blue-400 transition text-lg font-medium"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.15 }}
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              onClick={toggleDarkMode}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full bg-blue-500 text-white"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`md:hidden bg-white dark:bg-black px-4 py-3 space-y-3`}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring" }}
                >
                  <Link
                    to={link.path}
                    className="block text-lg font-medium hover:text-blue-400 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                whileHover={{ scale: 1.15 }}
                onClick={() => {
                  toggleDarkMode();
                  setMenuOpen(false);
                }}
                className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
      <Footer />
    </>
  );
}

export const Route = createRootRoute({
  component: () => <Navbar />,
  notFoundComponent: () => <NotFound />,
});
