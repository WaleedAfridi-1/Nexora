import React from "react";
import { motion } from "framer-motion";

const GlowBackground = () => {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute left-1/2 -top-32 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-glow blur-3xl"
    />
  );
};

export default GlowBackground;
