"use client";
import { AnimatePresence, motion } from "framer-motion";

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="py-10 px-8 max-w-3xl mx-auto overflow-hidden"
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

export default PageWrapper;
