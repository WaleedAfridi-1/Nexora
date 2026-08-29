"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureCard from "./ui/FeatureCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const cardsContent = [
  {
    tag: "✦ AI-POWERED WORKFLOWS",
    title: "Automations that think, adapt, and execute.",
    description:
      "Build intelligent workflows that can understand context and take action automatically.",
    image: { src: "/Workflow.png", alt: "AI-powered workflows" },
  },
  {
    tag: "⚡ SMART AUTOMATION",
    title: "Turn repetitive tasks into automated workflows.",
    description: "Let Nexora handle routine work without constant manual input.",
    image: { src: "/automation.png", alt: "Smart automation" },
  },
  {
    tag: "⌘ CONNECT YOUR TOOLS",
    title: "Bring your favorite tools together",
    description:
      "Connect the apps your team already uses and move data between them automatically.",
    image: { src: "/Integration.png", alt: "Connect your tools" },
  },
  {
    tag: "◉ REAL-TIME MONITORING",
    title: "Know what's happening at every step.",
    description: "Monitor workflows, tasks, and automation status in real time.",
    image: { src: "/monitoring.png", alt: "Real-time monitoring" },
  },
  {
    tag: "↗ ACTIONABLE ANALYTICS",
    title: "Understand what your automations are accomplishing.",
    description: "Track performance, activity, and results from one place.",
    image: { src: "/analytics.png", alt: "Actionable analytics" },
  },
];

const Features = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [
            ".feature-badge",
            ".feature-heading",
            ".feature-description",
            ".feature-card",
          ],
          { opacity: 1, y: 0 }
        );
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".feature-badge", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      })
        .from(
          ".feature-heading",
          { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          ".feature-description",
          { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.35"
        );

      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="feature"
      ref={sectionRef}
      className="flex w-full min-h-screen flex-col gap-4 bg-background px-2 py-8 md:px-4 lg:px-8"
    >
      {/* Heading */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 md:gap-4 md:px-10">
        <span className="feature-badge w-fit rounded-3xl border border-primary/30 bg-card px-3 py-1 text-xs text-primary">
          POWERFUL FEATURES
        </span>
        <h2 className="feature-heading text-4xl font-black text-foreground md:text-5xl lg:text-6xl">
          Everything you need to <br className="hidden lg:block" />
          <span className="text-foreground-secondary">automate smarter.</span>
        </h2>
        <div className="flex w-full md:w-1/2 md:px-2 lg:px-4">
          <p className="feature-description text-sm text-foreground-secondary md:text-lg lg:text-xl font-medium">
            Build, connect, and manage intelligent workflows from one powerful
            platform.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="mx-auto flex w-full max-w-7xl flex-col px-2 py-3 gap-24 md:px-6 lg:px-16">
        {cardsContent.map((card, index) => (
          <FeatureCard
            key={index}
            tag={card.tag}
            title={card.title}
            description={card.description}
            image={{ src: card.image.src, alt: card.image.alt }}
            index={index}
            total={cardsContent.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;