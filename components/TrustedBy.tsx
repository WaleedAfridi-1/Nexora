"use client";

import React from "react";
import { motion } from "framer-motion";

const COMPANIES = ["ACME", "VERTEX", "ORBIT", "NOVA", "FLUX", "HALO", "PRISM"];


const MARQUEE_ITEMS = [...COMPANIES, ...COMPANIES];

const TrustedBy = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-16 mt-20 w-full bg-background py-8"
    >
      <div className="flex w-full flex-col items-center justify-center gap-3 px-8 md:gap-6">
        <p className="font-mono text-sm text-foreground-muted">
          Trusted by 2,000+ teams worldwide
        </p>

        <div className="trustedby-fade group relative w-full max-w-4xl overflow-hidden">
          <div className="trustedby-track flex w-max items-center gap-6">
            {MARQUEE_ITEMS.map((item, ind) => (
              <span
                key={`${item}-${ind}`}
                className="shrink-0 select-none rounded-3xl border border-border bg-background-secondary px-4 py-1.5 font-mono text-sm text-foreground-muted opacity-70 transition-all duration-300 ease-in-out hover:border-primary/40 hover:text-foreground hover:opacity-100"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .trustedby-fade {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 12%,
            black 88%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 12%,
            black 88%,
            transparent
          );
        }

        .trustedby-track {
          animation: trustedby-scroll 24s linear infinite;
        }

        .trustedby-fade:hover .trustedby-track {
          animation-play-state: paused;
        }

        @keyframes trustedby-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trustedby-track {
            animation: none;
          }
        }
      `}</style>
    </motion.section>
  );
};

export default TrustedBy;