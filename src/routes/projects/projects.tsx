import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { projects } from "../../utils/api";
import { useThemeStore } from "../../store/store";
import PageTransitionWrapper from "../../components/PageTransitionWrapper";

export const Route = createFileRoute("/projects/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  const { darkMode } = useThemeStore();

  return (
    <PageTransitionWrapper>
      <div
        className={`${
          darkMode ? "dark" : ""
        } min-h-screen bg-gradient-to-br from-[#a2d4f6] via-[#c2f0f7] to-[#7ed6df] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-12 sm:py-20`}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-[#0e2f44] dark:text-white mb-12 sm:mb-16"
        >
          Our Signature Projects
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-white/70 dark:bg-black/30 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 sm:h-56 md:h-60 object-cover"
              />
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0e2f44] dark:text-white mb-2">
                  {project.name}
                </h2>
                <p className="text-[#0e2f44] dark:text-white/80 mb-2 flex-grow text-sm sm:text-base">
                  {project.description}
                </p>
                <p className="italic text-xs sm:text-sm text-[#0e2f44] dark:text-white/60">
                  {project.location}
                </p>
                <div className="mt-4">
                  <Link
                    to="/projects/$projectDetail"
                    params={{ projectDetail: String(project.id) }}
                    className="inline-block px-5 py-2 bg-[#0077b6] text-white rounded-full shadow-lg hover:bg-[#005f87] transition text-sm sm:text-base"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransitionWrapper>
  );
}
