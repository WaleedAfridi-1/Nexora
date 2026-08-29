"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Check, X } from "lucide-react";
import { Card, CardContent } from "./card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface PropsTypes {
  title: string;
  description: string;
  items: string[];
  icon: "error" | "success";
  footerContent: string;
}

const CardFeature = ({
  title,
  description,
  items,
  icon,
  footerContent,
}: PropsTypes) => {
  const isError = icon === "error";
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%", 
          toggleActions: "play none none none",
        },
      });

      tl.from(".card-header-elem", {
        y: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      })
      .from(
        ".card-list-item",
        {
          x: -20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .from(
        ".card-footer-pill",
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.5)",
          clearProps: "all",
        },
        "-=0.2"
      );
    }, cardRef); 

    return () => ctx.revert();
  }, []);

  return (
    <Card
      ref={cardRef}
      className={`relative w-full h-full flex flex-col bg-card transition-all duration-500 ease-in-out hover:scale-101 hover:-translate-y-1 hover:shadow-xl ${
        isError
          ? "border border-border/60 shadow-sm"
          : "border border-primary/40 shadow-[0_0_30px_-10px_rgba(var(--primary),0.3)]"
      }`}
    >
      {/* Header Section */}
      <div className="w-full flex flex-col px-6 md:px-8 py-8 gap-2 border-b border-border/50 overflow-hidden">
        <div className="flex items-center gap-3 card-header-elem">
          <div
            className={`p-2 rounded-lg ${
              isError ? "bg-error/10 text-error" : "bg-success/10 text-success"
            }`}
          >
            {isError ? <X size={24} /> : <Check size={24} />}
          </div>
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-sm md:text-base text-foreground-secondary font-medium mt-1 card-header-elem">
          {description}
        </p>
      </div>

      {/* Body Section */}
      <CardContent className="flex flex-col grow px-6 md:px-8 py-6 gap-0">
        <div className="flex flex-col gap-4 grow overflow-hidden">
          {items.map((item, ind) => (
            <div key={ind} className="flex items-center gap-3 group card-list-item">
              <div
                className={`shrink-0 flex items-center justify-center w-6 h-6 rounded-full transition-colors ${
                  isError
                    ? "bg-error/10 text-error group-hover:bg-error group-hover:text-white"
                    : "bg-success/10 text-success group-hover:bg-success group-hover:text-white"
                }`}
              >
                {isError ? (
                  <X strokeWidth={3} className="w-3.5 h-3.5" />
                ) : (
                  <Check strokeWidth={3} className="w-3.5 h-3.5" />
                )}
              </div>
              <p className="text-foreground-muted font-medium text-sm md:text-base transition-colors group-hover:text-foreground">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Footer  */}
        <div className="w-full mt-10 overflow-hidden">
          <div
            className={`card-footer-pill w-full text-center px-4 py-3 md:py-3.5 text-sm md:text-base font-bold rounded-xl  transition-all duration-300 ${
              isError
                ? "bg-foreground-muted/10 text-foreground-secondary border border-border"
                : "bg-primary text-foreground shadow-lg hover:shadow-primary/25"
            }`}
          >
            {footerContent}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardFeature;