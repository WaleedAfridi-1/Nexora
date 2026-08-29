"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardFeature from "@/components/ui/ProblemSolutionsCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ProblemsSolutions = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Respect reduced-motion: skip animation, content stays fully visible.
      if (prefersReducedMotion) {
        gsap.set([".ps-badge", ".ps-heading", ".ps-description", ".ps-card"], {
          opacity: 1,
          y: 0,
        });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".ps-badge", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
        .from(
          ".ps-heading",
          { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          ".ps-description",
          { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.35"
        )
        .from(
          ".ps-card",
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.25"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen space-y-5 mb-16 bg-background px-0 py-8 md:p-8 lg:px-16 lg:py-20"
    >
      {/* Eyebrow badge */}
      <div className="flex w-full justify-center">
        <span className="ps-badge rounded-3xl border border-primary/20 bg-card px-4 py-1 text-sm text-primary">
          WHY NEXORA?
        </span>
      </div>

      {/* Heading */}
      <div className="flex w-full justify-center px-6 md:px-8">
        <h2 className="ps-heading max-w-4xl text-center text-4xl font-black leading-tight text-foreground md:text-5xl lg:text-6xl">
          Stop doing work <br className="hidden md:block" />
          <span className="text-foreground-secondary"> that AI can handle.</span>
        </h2>
      </div>

      {/* Description */}
      <div className="flex w-full justify-center px-8 md:px-0">
        <p className="ps-description w-full text-center text-sm font-medium leading-snug text-foreground-secondary md:w-1/2 md:text-lg lg:w-1/2 lg:text-lg">
          Nexora turns repetitive tasks into intelligent automations, so your
          team can focus on work that actually matters.
        </p>
      </div>

      {/* Cards */}
      <div className="grid w-full grid-cols-1 gap-8 px-6 py-10 md:px-8 lg:grid-cols-2 lg:px-12 lg:py-16">
        <div className="ps-card">
          <CardFeature
            title="Manual workflows"
            description="Too much time spent on repetitive tasks."
            icon="error"
            items={[
              "Copying data",
              "Sending emails",
              "Updating spreadsheets",
              "Routine tasks",
            ]}
            footerContent="Hours lost every week"
          />
        </div>

        <div className="ps-card">
          <CardFeature
            title="Automated workflows"
            description="Let Nexora handle the repetitive work for you."
            icon="success"
            items={[
              "AI handles work",
              "Tools stay connected",
              "Runs automatically",
              "Team moves faster",
            ]}
            footerContent="More time for meaningful work."
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemsSolutions;