"use client";
import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { AnimateValue } from "@/components/ui/AnimateValue";
import { GiOrbit } from "react-icons/gi";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StatsCardsContent = [
  {
    numbers: "10",
    suffix: "×",
    title: "FASTER WORKFLOWS",
    description: "Reduce the friction between planning, building, shipping.",
  },
  {
    numbers: "50",
    suffix: "+",
    title: "TOOLS CONNECTED",
    description: "Bring your tools into one connected workspace.",
  },
  {
    numbers: "99",
    suffix: "%",
    title: "LESS BUSYWORK",
    description: "Automate repetitive steps and spend more time meaningfully.",
  },
  {
    numbers: "24",
    suffix: "/7",
    title: "AUTOMATION",
    description: "Keep important workflows moving in the background.",
  },
];

const Stats = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stats-header-elem", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });

      gsap.from(".stats-card", {
        scrollTrigger: {
          trigger: ".stats-cards-container",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "transform,opacity",
      });

      gsap.from(".stats-footer-card", {
        scrollTrigger: {
          trigger: ".stats-footer-container",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="w-full flex flex-col items-center gap-5 text-center">
        <span className="stats-header-elem px-4 py-1.5 rounded-full border border-primary/20 bg-card text-primary text-xs font-mono tracking-widest shadow-sm">
          THE NEXORA DIFFERENCE
        </span>
        <h2 className="stats-header-elem text-4xl md:text-5xl lg:text-6xl text-foreground font-black tracking-tight">
          Built for modern{" "}
          <span className="block  text-foreground-secondary">
            work
          </span>
        </h2>
        <p className="stats-header-elem text-center px-4 md:w-2/3 lg:w-1/2 text-foreground-secondary text-base md:text-lg font-medium leading-relaxed">
          Move from ideas to execution faster with a system designed to keep
          your work connected.
        </p>
      </div>

      {/* Stats Cards Container */}
      <div className="stats-cards-container w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 md:px-4 mt-12">
        {StatsCardsContent.map((item, id) => (
          <div
            key={id}
            className="stats-card group relative cursor-pointer rounded-3xl border border-border/60 hover:border-primary/50 transition-all duration-300 p-8 bg-card/90 backdrop-blur-sm flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
          >
            <div className="text-5xl lg:text-6xl text-primary font-black tracking-tighter flex items-center justify-center">
              <AnimateValue value={item.numbers} />
              <span>{item.suffix}</span>
            </div>
            <h3 className="text-base font-bold text-foreground mt-5 tracking-tight group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-foreground-secondary text-sm font-medium mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Cards Container */}
      <div className="stats-footer-container w-full flex flex-col lg:flex-row gap-6 mt-12 md:px-4">
        {/* Testimonial Card */}
        <div className="stats-footer-card bg-card/95 backdrop-blur-sm w-full lg:w-1/2 flex flex-col justify-between border border-border/60 hover:border-primary/50 transition-all duration-300 ease-in-out cursor-pointer hover:shadow-2xl hover:shadow-primary/5 rounded-3xl p-8 md:p-10">
          <div className="w-full border-b border-border/60 pb-8">
            <p className="w-full md:w-11/12 text-foreground-secondary text-base md:text-lg font-medium leading-relaxed">
              &ldquo;Nexora gave our team a much simpler way to bring our
              workflows together and keep everything moving.&rdquo;
            </p>
          </div>
          <div className="w-full flex justify-between items-center pt-6">
            <div className="flex flex-col">
              <span className="text-foreground text-base font-bold tracking-tight">
                Sarah K.
              </span>
              <span className="text-xs md:text-sm font-medium text-foreground-muted mt-0.5">
                Product Lead, Orbit
              </span>
            </div>
            <div className="rounded-2xl p-2.5 bg-primary/10 flex items-center justify-center text-primary">
              <GiOrbit className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* CTA Banner Card */}
        <div className="stats-footer-card bg-card/95 backdrop-blur-sm w-full lg:w-1/2 border border-border/60 hover:border-primary/50 transition-all duration-300 ease-in-out rounded-3xl cursor-pointer hover:shadow-2xl hover:shadow-primary/5 p-8 md:p-10 flex flex-col justify-between">
          <div className="border-b border-border/60 w-full pb-8 flex flex-col gap-3">
            <h3 className="text-2xl md:text-3xl text-foreground font-black tracking-tight">
              Start building with Nexora.
            </h3>
            <p className="md:w-10/12 text-foreground-secondary text-sm md:text-base font-medium leading-relaxed">
              Explore the platform, connect your tools, and build your first
              workflow.
            </p>
          </div>

          <div className="w-full flex flex-row items-center justify-between pt-6">
            <span className="text-xs md:text-sm font-medium text-foreground-muted">
              No commitment. Start exploring today.
            </span>
            <Link href={"#pricing"}>
              <button className="bg-primary hover:bg-primary-hover px-5 py-2.5 md:px-7 md:py-3 rounded-full font-bold cursor-pointer shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all duration-300 ease-in-out text-foreground flex items-center gap-2">
                Get started
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;