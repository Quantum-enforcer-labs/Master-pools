import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, Phone, Facebook } from "lucide-react";
import { useThemeStore } from "../store/store";
import PageTransitionWrapper from "../components/PageTransitionWrapper";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  const { darkMode } = useThemeStore();

  const bgGradient = darkMode
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    : "bg-gradient-to-br from-[#a2d4f6] via-[#c2f0f7] to-[#7ed6df]";

  const cardBg = darkMode ? "bg-black/30" : "bg-white/70";
  const textColor = darkMode ? "text-white" : "text-[#0e2f44]";
  const iconColor = darkMode ? "text-[#58a6ff]" : "text-[#0077b6]";
  const linkHoverColor = darkMode
    ? "hover:text-[#82cfff]"
    : "hover:text-[#0096c7]";

  return (
    <PageTransitionWrapper>
      <div
        className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 sm:py-20 ${bgGradient}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`${cardBg} backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-4xl shadow-2xl ${textColor}`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8 text-center">
            Contact Master Pools
          </h1>

          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-center">
            We’re here to help you dive into your dream pool! Whether you have
            questions about our services, want a custom quote, or need support,
            reach out anytime.
          </p>

          <div className="flex flex-col items-center space-y-6 sm:space-y-8">
            <div
              className={`flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-5 ${iconColor}`}
            >
              <Mail size={28} className="sm:size-32" />
              <span className="text-lg sm:text-2xl font-medium text-center sm:text-left">
                info@masterpools.co.zw
              </span>
            </div>

            <div
              className={`flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-5 ${iconColor}`}
            >
              <Phone size={28} className="sm:size-32" />
              <span className="text-lg sm:text-2xl font-medium text-center sm:text-left">
                +263 77 123 4567
              </span>
            </div>

            <div
              className={`flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-5 ${iconColor}`}
            >
              <Facebook size={28} className="sm:size-32" />
              <a
                href="https://www.facebook.com/masterpools"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg sm:text-2xl font-medium ${linkHoverColor} transition text-center sm:text-left`}
              >
                facebook.com/masterpools
              </a>
            </div>
          </div>

          <p className="mt-10 text-center text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            You can also visit our office or request a free consultation to
            discuss your project in detail. Our friendly team is ready to
            provide expert advice and help make your pool dreams come true.
          </p>

          <p className={`mt-6 text-center italic font-semibold ${iconColor}`}>
            "Creating luxury pools with passion and precision."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2 }}
          className={`absolute -z-10 w-72 h-72 sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] rounded-full bottom-12 left-12 blur-3xl ${
            darkMode ? "bg-white/10" : "bg-white/30"
          }`}
        />
      </div>
    </PageTransitionWrapper>
  );
}
