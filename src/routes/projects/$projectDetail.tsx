import {
  createFileRoute,
  Link,
  useParams,
  useNavigate,
} from "@tanstack/react-router";
import { useThemeStore } from "../../store/store";
import { projects } from "../../utils/api";
import { motion } from "motion/react";
import PageTransitionWrapper from "../../components/PageTransitionWrapper";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/projects/$projectDetail")({
  component: RouteComponent,
});

import { useCallback } from "react";

function useSwipe(onSwipeLeft: () => void, onSwipeRight: () => void) {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const minSwipeDistance = 50; // minimal distance for swipe to trigger

  const onTouchStart = useCallback((e: TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  }, []);

  const onTouchEnd = useCallback(
    (e: TouchEvent) => {
      touchEndX.current = e.changedTouches[0].screenX;
      if (touchStartX.current !== null && touchEndX.current !== null) {
        const distance = touchStartX.current - touchEndX.current;
        if (distance > minSwipeDistance) {
          onSwipeLeft();
        } else if (distance < -minSwipeDistance) {
          onSwipeRight();
        }
      }
      touchStartX.current = null;
      touchEndX.current = null;
    },
    [onSwipeLeft, onSwipeRight]
  );

  useEffect(() => {
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [onTouchStart, onTouchEnd]);
}

function RouteComponent() {
  const { projectDetail } = useParams({ from: "/projects/$projectDetail" });
  const { darkMode } = useThemeStore();
  const navigate = useNavigate();

  const currentIndex = projects.findIndex(
    (p) => p.id === parseInt(projectDetail)
  );
  const project = projects[currentIndex];

  // Swipe handlers to navigate between projects
  useSwipe(
    () => {
      // Swipe left → next project
      if (currentIndex < projects.length - 1) {
        navigate({
          to: "/projects/$projectDetail",
          params: { projectDetail: String(projects[currentIndex + 1].id) },
        });
      }
    },
    () => {
      // Swipe right → previous project
      if (currentIndex > 0) {
        navigate({
          to: "/projects/$projectDetail",
          params: { projectDetail: String(projects[currentIndex - 1].id) },
        });
      }
    }
  );

  if (!project) {
    return (
      <PageTransitionWrapper>
        <div
          className={`${
            darkMode ? "dark" : ""
          } min-h-screen flex items-center justify-center bg-gradient-to-br from-[#a2d4f6] via-[#c2f0f7] to-[#7ed6df] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-20`}
        >
          <div className="text-2xl text-[#0e2f44] dark:text-white text-center">
            Project not found.
          </div>
        </div>
      </PageTransitionWrapper>
    );
  }

  return (
    <PageTransitionWrapper>
      <div
        className={`${
          darkMode ? "dark" : ""
        } min-h-screen bg-gradient-to-br from-[#a2d4f6] via-[#c2f0f7] to-[#7ed6df] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-12 sm:py-20`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-white/70 dark:bg-black/30 backdrop-blur-lg"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-64 sm:h-96 md:h-[500px] object-cover"
          />
          <div className="p-6 sm:p-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0e2f44] dark:text-white mb-4 sm:mb-6">
              {project.name}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#0e2f44] dark:text-white/80 mb-4">
              {project.description}
            </p>
            <p className="italic text-xs sm:text-sm md:text-md text-[#0e2f44] dark:text-white/60 mb-6">
              Location: {project.location}
            </p>

            <div className="flex flex-wrap gap-3 justify-between items-center">
              <Link
                to="/projects/projects"
                className="inline-block px-5 py-3 text-sm sm:text-base bg-[#0077b6] text-white rounded-full shadow-lg hover:bg-[#005f87] transition"
              >
                Back to Projects
              </Link>
              <div className="text-sm text-[#0e2f44] dark:text-white/70 select-none">
                Swipe {currentIndex > 0 ? "← Prev" : ""}{" "}
                {currentIndex < projects.length - 1 ? "Next →" : ""}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransitionWrapper>
  );
}
