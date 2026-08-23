"use client"
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { BuildVisual, AutomateVisual, ConnectVisual, ScaleVisual } from "@/components/ui/Visuals";



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
  const [activeTab, setActiveTab] = useState("01");

  const toggleTab = (id) => {
    setActiveTab((prev) => (prev === id ? null : id));
  };

  return (
    <section id="product" className="w-full min-h-screen py-16 md:py-24 px-4 md:px-8">
      {/* Heading Section */}
      <div className="w-full flex flex-col items-center gap-4 text-center">
        <span className="w-fit text-xs text-primary font-mono px-4 py-1.5 rounded-full bg-card border border-primary/20 shadow-xs">
          USE CASES
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
          Built around the{" "}
          <span className="block text-muted-foreground mt-1">
            way you work
          </span>
        </h1>
        <p className="text-sm md:text-base max-w-xl text-muted-foreground font-normal leading-relaxed">
          Bring your workflows, tools, and ideas together in one flexible system that grows with your needs.
        </p>
      </div>

      {/* Card Container */}
      <div className="mt-12 md:mt-16 w-full max-w-4xl mx-auto border-t border-border">
        {CardsContent.map((card) => {
          const isOpen = activeTab === card.id;

          return (
            <div
              key={card.id}
              onClick={() => toggleTab(card.id)}
              className={`flex flex-col border-b border-border py-6 md:py-8 px-2 md:px-6 cursor-pointer transition-colors duration-300 select-none ${
                isOpen ? "bg-muted/10" : "hover:bg-muted/10"
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 md:gap-8">
                  <span
                    className={`font-mono text-sm md:text-base font-semibold transition-colors duration-300 ${
                      isOpen ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {card.id}
                  </span>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                    {card.title}
                  </h3>
                </div>

                {/* Arrow Icon */}
                <div
                  className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border transition-all duration-300 shrink-0 ${
                    isOpen
                      ? "bg-primary border-primary text-primary-foreground rotate-45"
                      : "border-border bg-background text-muted-foreground"
                  }`}
                >
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>

              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div
                    className={`pt-6 md:pt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center transition-opacity duration-300 ${
                      isOpen ? "opacity-100 delay-100" : "opacity-0"
                    }`}
                  >
                    {/*  Description */}
                    <div className="self-start">
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/*  Visual  */}
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