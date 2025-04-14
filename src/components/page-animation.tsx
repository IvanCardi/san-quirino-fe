"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function PageAnimation({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-screen gap-6"
    >
      {children}
    </motion.div>
  );
}
