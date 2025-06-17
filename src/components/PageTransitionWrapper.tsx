import { useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouterState();
  const key = router.location.pathname;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
