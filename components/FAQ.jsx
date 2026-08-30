"use client";
import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const faqs = [
  {
    id: "01",
    question: "What is Nexora?",
    answer:
      "Nexora is a flexible workspace that brings your tools, workflows, and automation together in one place.",
  },
  {
    id: "02",
    question: "How does Nexora work?",
    answer:
      "Nexora helps you connect your tools, build workflows, and automate repetitive tasks without adding unnecessary complexity.",
  },
  {
    id: "03",
    question: "Can I connect my existing tools?",
    answer:
      "Yes. Nexora is designed to work with the tools your team already uses, so you can connect your existing workflow in one place.",
  },
  {
    id: "04",
    question: "Is there a free plan?",
    answer:
      "Yes. You can start with the Free plan and explore the core features before upgrading to a paid plan.",
  },
  {
    id: "05",
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can change or cancel your plan whenever you want without being locked into a long-term commitment.",
  },
  {
    id: "06",
    question: "Is Nexora suitable for small teams?",
    answer:
      "Absolutely. Nexora is designed to scale with your team, whether you're working independently or managing a growing product team.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faqs"
      className="mt-20 py-6 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-14"
    >
      {/* Header */}
      <motion.div
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-2/5 py-4 flex flex-col items-start lg:sticky lg:top-28 gap-4"
      >
        <span className="w-fit text-xs text-primary px-3.5 py-1.5 bg-card rounded-full border border-primary/40 font-mono tracking-wider shadow-sm">
          FAQS
        </span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Everything you need{" "}
          <span className="block text-foreground-secondary mt-1">
            to know.
          </span>
        </h2>
        <div className="text-sm md:text-base text-foreground-secondary font-medium leading-relaxed max-w-md">
          <p>
            Find quick answers to common questions about Nexora, its
            features, and how it works.
          </p>
        </div>
      </motion.div>

      {/* FAQs List */}
      <motion.div
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="w-full lg:w-3/5 flex flex-col gap-4"
      >
        {faqs.map((q) => {
          const isExpanded = openId === q.id;
          const panelId = `faq-panel-${q.id}`;
          const buttonId = `faq-button-${q.id}`;

          return (
            <motion.div
              layout
              variants={shouldReduceMotion ? undefined : itemVariants}
              transition={{
                layout: {
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                },
              }}
              key={q.id}
              whileHover={{ y: -2 }}
              className={`group w-full rounded border transition-colors duration-300 ${
                isExpanded
                  ? "bg-card border-primary/50 shadow-md"
                  : "bg-background-secondary border-border/70 hover:border-primary/30"
              }`}
            >
              <h3 className="m-0">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => toggle(q.id)}
                  className="cursor-pointer w-full text-left py-5 px-6 flex justify-between items-center gap-4 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <span
                    className={`text-sm md:text-lg font-medium transition-colors duration-300 ${
                      isExpanded ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {q.question}
                  </span>

                  <span
                    className={`shrink-0 rounded-full p-2 border transition-colors duration-300 ${
                      isExpanded
                        ? "bg-primary/10 border-primary/40"
                        : "bg-card-hover border-border/50 group-hover:border-primary/30"
                    }`}
                  >
                    <motion.span
                      animate={{ rotate: isExpanded ? 135 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="block"
                    >
                      <LuPlus
                        className={`text-base transition-colors duration-300 ${
                          isExpanded ? "text-primary" : "text-foreground"
                        }`}
                      />
                    </motion.span>
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.2 },
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -4 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="pt-4 mt-0 mb-5 mx-6 border-t border-border/50 pr-8"
                    >
                      <p className="pt-4 text-foreground-secondary text-sm md:text-base leading-relaxed">
                        {q.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FAQ;