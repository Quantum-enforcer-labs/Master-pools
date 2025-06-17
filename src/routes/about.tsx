import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useThemeStore } from "../store/store";
import PageTransitionWrapper from "../components/PageTransitionWrapper";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  const { darkMode } = useThemeStore();

  return (
    <PageTransitionWrapper>
      <div
        className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 
          ${
            darkMode
              ? "bg-gray-900 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
              : "bg-gradient-to-br from-[#a2d4f6] via-[#c2f0f7] to-[#7ed6df]"
          }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-5xl shadow-2xl
            ${
              darkMode
                ? "bg-black/80 text-gray-100"
                : "bg-white/70 text-[#0e2f44]"
            }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 text-center">
            About Master Pools
          </h1>

          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed">
            <p>
              At <strong>Master Pools Zimbabwe</strong>, we specialize in
              crafting exquisite swimming pools that transform your outdoor
              spaces into luxurious personal paradises. With over 15 years of
              unmatched expertise, our dedicated team combines innovative design
              with premium materials to deliver projects that exceed
              expectations.
            </p>

            <p>
              Our portfolio ranges from sleek modern pools featuring LED
              lighting and integrated spas, to tropical resort-style retreats
              complete with waterfalls and lush landscaping. Every project is
              tailored to your vision, lifestyle, and property environment.
            </p>

            <p>
              We pride ourselves on exceptional craftsmanship, sustainable
              practices, and responsive customer service — ensuring your
              investment is beautiful, durable, and eco-friendly.
            </p>

            <p>
              Beyond construction, we offer maintenance services, pool
              automation, and renovation solutions to keep your pool pristine
              year-round.
            </p>

            <p>
              Our expert designers work closely with clients from concept to
              completion, using 3D modeling and virtual walkthroughs to ensure
              your dream pool comes to life exactly as imagined.
            </p>

            <p>
              We are committed to using eco-friendly materials and
              energy-efficient technologies such as solar heating, LED lighting,
              and smart water management systems, helping you reduce
              environmental impact while enjoying ultimate comfort.
            </p>

            <p>
              Located in the heart of Zimbabwe, we serve residential and
              commercial clients across Harare, Bulawayo, Victoria Falls, and
              beyond.
            </p>

            <p>
              Join countless happy homeowners and businesses who trust{" "}
              <strong>Master Pools</strong> for premium quality, innovation, and
              elegance in pool design and construction.
            </p>

            <p
              className={`font-semibold text-center mt-8 ${
                darkMode ? "text-[#58a6ff]" : "text-[#0077b6]"
              }`}
            >
              Dive into your dream pool with us today!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: darkMode ? 0.15 : 0.3, scale: 1 }}
          transition={{ duration: 2 }}
          className={`absolute -z-10 w-72 h-72 sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full bottom-12 right-12 blur-3xl ${
            darkMode ? "bg-white/10" : "bg-white/30"
          }`}
        />
      </div>
    </PageTransitionWrapper>
  );
}
