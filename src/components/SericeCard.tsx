import { motion } from "motion/react";
import type { ServiceCardProps } from "../types/types";

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileFocus={{ scale: 1.05 }}
      tabIndex={0}
      role="region"
      aria-label={title}
      className="bg-white/80 dark:bg-black/40 backdrop-blur-xl p-5 sm:p-6 rounded-3xl shadow-lg dark:shadow-xl transition-transform duration-300 ease-in-out cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-[#0077b6] focus-visible:ring-opacity-70"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-center">
        {title}
      </h3>
      <p className="text-sm sm:text-md text-center">{description}</p>
    </motion.div>
  );
}
