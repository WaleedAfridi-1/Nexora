"use client";
import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { FiMinus } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

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

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <section id="faqs"
     className=" mt-20 py-6 w-full flex flex-col lg:flex-row gap-4">
      {/* header  */}
      <div className="w-full lg:w-2/5 py-4  flex flex-col items-center gap-3">
        <span className="w-fit text-xs text-primary  px-3 py-1 bg-card rounded-3xl border border-primary/40">
          FAQs
        </span>
        <h1 className="text-4xl md:text-5xl font-bold">
          Everything you need{" "}
          <span className="block text-foreground-secondary text-center">
            to know.
          </span>
        </h1>
        <div className="px-8 text-sm md:text-lg text-center text-foreground-secondary font-medium">
          <p>
            Find quick answers to common questions about Nexora, its features,
            and how it works.
          </p>
        </div>
      </div>
      {/* FAQs  */}
      <div className="py-4 px-6 w-full lg:w-3/5 flex flex-col duration-300 transition-all ease-out">
        {/* Q */}

        {faqs.map((q) => {
          const isExpanded = isOpen === q.id;

          return (
            <div
              key={q.id}
              onClick={() => setIsOpen((prev) => (prev === q.id ? null : q.id))}
              className="bg-background-secondary cursor-pointer w-full border border-border/70 py-4 px-6 flex flex-col justify-center transition-all duration-300 ease-in-out"
            >
              <div className="flex px-2 justify-between w-full h-full items-center">
                <p className={`${isExpanded  ? "text-primary":"text-foreground"} text-sm md:text-lg  font-medium`}>
                  {q.question}
                </p>
                <button className="bg-card-hover shadow cursor-pointer active:scale-95 transition-all duration-300 ease-in-out p-2">
                  {isExpanded ? (
                    <motion.div
                      className="w-fit "
                      animate={{ rotate: isOpen === q.id ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <FiMinus className="text-lg text-foreground" />
                    </motion.div>
                  ) : (
                    <motion.div
                      className="w-fit "
                      animate={{ rotate: isOpen === q.id ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <LuPlus className="text-lg text-foreground" />

                    </motion.div>
                  )}
                </button>
              </div>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isExpanded
                    ? "grid-rows-[1fr] opacity-100 mt-2"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-2 pr-16">
                  <p className="text-foreground-muted text-sm md:text-lg">
                    {q.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
