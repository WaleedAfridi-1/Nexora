"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { BuildVisual, AutomateVisual, ConnectVisual, ScaleVisual } from "@/components/ui/Visuals";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardsContent = [
  {
    id: "01",
    title: "BUILD",
    description: "Create and ship modern products without unnecessary complexity.",
    visual: <BuildVisual />,
  },
  {
    id: "02",
    title: "AUTOMATE",
    description: "Build workflows that handle repetitive work while your team focuses on what matters.",
    visual: <AutomateVisual />,
  },
  {
    id: "03",
    title: "CONNECT",
    description: "Bring your tools, services and systems together in one connected workflow.",
    visual: <ConnectVisual />,
  },
  {
    id: "04",
    title: "SCALE",
    description: "Create systems that can grow with your product and your team.",
    visual: <ScaleVisual />,
  },
];

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(null);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".usecase-header-elem", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".usecase-item", {
        scrollTrigger: {
          trigger: ".usecase-container",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleTab = (id) => {
    setActiveTab((prev) => (prev === id ? null : id));
  };

  return (
    <section ref={sectionRef} id="product" className="relative w-full min-h-screen py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* SaaS Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Heading Section */}
      <div className="w-full flex flex-col items-center gap-5 text-center">
        <span className="usecase-header-elem text-xs font-mono tracking-widest text-primary px-4 py-1.5 rounded-full bg-card border border-primary/20 shadow-xs">
          USE CASES
        </span>
        <h2 className="usecase-header-elem text-3xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
          Built around the{" "}
          <span className="block text-foreground-secondary mt-1">
            way you work
          </span>
        </h2>
        <p className="usecase-header-elem text-sm md:text-base max-w-xl text-muted-foreground font-medium leading-relaxed">
          Bring your workflows, tools, and ideas together in one flexible system that grows with your needs.
        </p>
      </div>

      {/* Card Container */}
      <div className="usecase-container mt-16 md:mt-20 w-full max-w-4xl mx-auto border-t border-border/60">
        {CardsContent.map((card) => {
          const isOpen = activeTab === card.id;

          return (
            <div
              key={card.id}
              onClick={() => toggleTab(card.id)}
              className={`usecase-item flex flex-col border-b border-border/60 py-6 md:py-8 px-4 md:px-6 cursor-pointer transition-colors duration-300 select-none group ${
                isOpen ? "bg-muted/20" : "hover:bg-muted/10"
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 md:gap-8">
                  <span
                    className={`font-mono text-sm md:text-base font-bold transition-colors duration-300 ${
                      isOpen ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {card.id}
                  </span>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary/90">
                    {card.title}
                  </h3>
                </div>

                {/* Arrow Icon */}
                <div
                  className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border transition-all duration-300 shrink-0 ${
                    isOpen
                      ? "bg-primary border-primary text-primary-foreground rotate-45 shadow-md shadow-primary/25"
                      : "border-border/80 bg-card text-muted-foreground group-hover:border-primary/50 group-hover:text-foreground"
                  }`}
                >
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>

              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-6 md:mt-8" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                    {/* Description */}
                    <div className="self-start">
                      <p className="text-sm md:text-base text-muted-foreground font-medium leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Visual */}
                    <div className="flex justify-center md:justify-end w-full py-2">
                      {card.visual}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UseCases;