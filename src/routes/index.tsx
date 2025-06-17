import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useThemeStore } from "../store/store";
import PageTransitionWrapper from "../components/PageTransitionWrapper";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { darkMode } = useThemeStore();

  return (
    <PageTransitionWrapper>
      <div
        className={`${
          darkMode ? "dark" : ""
        } relative min-h-screen bg-gradient-to-br from-[#a2d4f6] via-[#c2f0f7] to-[#7ed6df] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col justify-center items-center px-4 py-20 sm:px-6 md:px-10`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/70 dark:bg-black/30 backdrop-blur-lg rounded-3xl p-6 sm:p-10 max-w-4xl md:max-w-5xl text-center shadow-2xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#0e2f44] dark:text-white drop-shadow-lg leading-tight">
            Welcome to Master Pools
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#0e2f44] dark:text-white/80 mb-6 leading-relaxed">
            At Master Pools, we don't just build pools — we craft personal
            paradise retreats. With more than 15 years of industry-leading
            experience, our talented professionals create elegant, functional,
            and breathtaking aquatic masterpieces.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#0e2f44] dark:text-white/80 mb-6 leading-relaxed">
            Our expert designers and builders partner with you from initial
            concept to final reveal. From mirror-like infinity pools to tropical
            backyard escapes, we tailor every design to meet your dreams and
            complement your home.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#0e2f44] dark:text-white/80 mb-6 leading-relaxed">
            Leveraging advanced 3D visualization, Master Pools brings your
            vision to life before construction begins. Every inch is
            meticulously planned, ensuring perfection on completion day.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#0e2f44] dark:text-white/80 mb-6 leading-relaxed">
            But our service doesn’t stop at construction. We offer complete
            outdoor living packages: landscaping, outdoor kitchens, spas,
            lighting, and custom water features — transforming your backyard
            into a full resort experience.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#0e2f44] dark:text-white/80 mb-6 leading-relaxed">
            Our pools incorporate cutting-edge filtration, energy-efficient
            systems, and the highest quality materials, delivering long-term
            beauty with low maintenance costs.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#0e2f44] dark:text-white/80 mb-6 leading-relaxed">
            We are committed to your long-term satisfaction with tailored
            maintenance plans, seasonal services, and rapid repair support to
            keep your pool pristine for years to come.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#0e2f44] dark:text-white/80 mb-8 leading-relaxed">
            Hundreds of families have entrusted Master Pools to create luxurious
            backyard sanctuaries. We’re ready to make your dream pool our next
            breathtaking success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <Link
              to="/projects/projects"
              className="w-full sm:w-auto text-center px-8 py-3 bg-[#0077b6] text-white rounded-full shadow-lg text-lg hover:bg-[#005f87] transition"
            >
              View Our Projects
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center px-8 py-3 border-2 border-[#0e2f44] text-[#0e2f44] rounded-full text-lg hover:bg-[#0e2f44] hover:text-white transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -z-10 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-white/40 dark:bg-white/10 rounded-full top-20 left-8 sm:left-20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -z-10 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-white/40 dark:bg-white/10 rounded-full bottom-20 right-8 sm:right-20 blur-3xl"
        />
      </div>
    </PageTransitionWrapper>
  );
}
