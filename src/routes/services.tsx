import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useThemeStore } from "../store/store";
import { Sparkles, Droplet, Hammer, Wrench, Leaf, Star } from "lucide-react";
import ServiceCard from "../components/SericeCard";
import PageTransitionWrapper from "../components/PageTransitionWrapper";

export const Route = createFileRoute("/services")({
  component: RouteComponent,
});

function RouteComponent() {
  const { darkMode } = useThemeStore();

  return (
    <PageTransitionWrapper>
      <div
        className={`${
          darkMode ? "dark" : ""
        } relative min-h-screen bg-gradient-to-br from-[#a2d4f6] via-[#c2f0f7] to-[#7ed6df] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex justify-center items-center px-4 sm:px-6 md:px-10 py-16`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/70 dark:bg-black/30 backdrop-blur-lg rounded-3xl p-6 sm:p-10 max-w-4xl md:max-w-6xl text-center shadow-2xl w-full"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-[#0e2f44] dark:text-white">
            Our Services
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-[#0e2f44] dark:text-white">
            <ServiceCard
              icon={<Sparkles size={40} className="text-[#0077b6]" />}
              title="Custom Pool Design"
              description="Tailor-made pool designs blending art, functionality, and your vision to create a truly personal paradise."
            />
            <ServiceCard
              icon={<Droplet size={40} className="text-[#0077b6]" />}
              title="Water Features"
              description="Add stunning waterfalls, fountains, and custom water walls to elevate your pool's luxury experience."
            />
            <ServiceCard
              icon={<Hammer size={40} className="text-[#0077b6]" />}
              title="Pool Construction"
              description="Premium construction with durable materials, expert craftsmanship, and industry-leading technology."
            />
            <ServiceCard
              icon={<Wrench size={40} className="text-[#0077b6]" />}
              title="Maintenance & Repairs"
              description="Keep your pool pristine year-round with our expert maintenance packages, cleaning, and fast repairs."
            />
            <ServiceCard
              icon={<Leaf size={40} className="text-[#0077b6]" />}
              title="Eco-Friendly Solutions"
              description="Energy-efficient pumps, solar heating, smart water management & sustainable pool solutions."
            />
            <ServiceCard
              icon={<Star size={40} className="text-[#0077b6]" />}
              title="Renovations & Upgrades"
              description="Transform old pools into modern retreats with LED lighting, new finishes, automation, and more."
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -z-10 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-white/40 dark:bg-white/10 rounded-full top-20 left-6 sm:left-20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -z-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/40 dark:bg-white/10 rounded-full bottom-20 right-6 sm:right-20 blur-3xl"
        />
      </div>
    </PageTransitionWrapper>
  );
}
