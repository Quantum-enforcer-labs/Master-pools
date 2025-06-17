import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useThemeStore } from "../store/store";
const NotFound = () => {
  const { darkMode } = useThemeStore();
  return (
    <div>
      <div
        className={`${
          darkMode ? "dark" : ""
        } relative min-h-screen bg-gradient-to-br from-[#a2d4f6] via-[#c2f0f7] to-[#7ed6df] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-6 py-20`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/70 dark:bg-black/30 backdrop-blur-lg rounded-3xl p-10 max-w-3xl text-center shadow-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-7xl font-extrabold mb-6 text-[#0e2f44] dark:text-white"
          >
            404
          </motion.h1>

          <p className="text-xl text-[#0e2f44] dark:text-white/80 mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>

          <p className="text-lg text-[#0e2f44] dark:text-white/80 mb-8">
            But don’t worry — you can return to the beauty of{" "}
            <strong>Master Pools</strong> and continue your journey.
          </p>

          <div className="flex justify-center mt-8">
            <Link
              to="/"
              className="px-8 py-3 bg-[#0077b6] text-white rounded-full shadow-lg text-lg hover:bg-[#005f87] transition"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>

        {/* Floating glowing blur background */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -z-10 w-[600px] h-[600px] bg-white/40 dark:bg-white/10 rounded-full top-20 left-20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -z-10 w-[500px] h-[500px] bg-white/40 dark:bg-white/10 rounded-full bottom-20 right-20 blur-3xl"
        />
      </div>
    </div>
  );
};
export default NotFound;
