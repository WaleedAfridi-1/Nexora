"use client";

import React from "react";
import { motion } from "framer-motion";
import { Workflow } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const Header = ({tag, title, title2, description}) => {
  return (
    <section className="relative flex h-140 w-full flex-col items-center justify-center gap-4 overflow-hidden">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-1/2 top-[10%] -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-glow blur-3xl"
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="flex w-full flex-col items-center gap-4"
      >
        <motion.span
          variants={itemVariants}
          className="inline-flex w-fit items-center gap-1.5 rounded-3xl border border-primary/40 px-4 py-1 text-xs font-semibold tracking-wide text-primary"
        >
          <Workflow className="h-3 w-3" aria-hidden="true" />
          {tag}
        </motion.span>

        <motion.div variants={itemVariants} className="w-full text-center">
          <h1 className="text-4xl font-black leading-tight text-foreground md:text-5xl lg:text-7xl">
            {title}
            <span className="block text-center text-foreground-secondary">
              {title2}
            </span>
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex w-full justify-center px-2 text-center md:w-5/6 md:px-10 lg:w-3/4"
        >
          <p className="px-10 text-xs font-medium text-foreground-secondary md:text-lg">
            {description}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;