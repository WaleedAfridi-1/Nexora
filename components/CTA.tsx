"use client";
import React, { useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const defaultTag = "READY WHEN YOU ARE";
const defaultTitleLine1 = "Build what's next"
const defaultTitleLine2 = "with Nexora.";
const defaultDescription = "Bring your workflows together, automate the busywork, and keep your team moving forward."
gsap.registerPlugin(ScrollTrigger);


const CTA = ({
  tag=defaultTag,
  titleLineOne=defaultTitleLine1,
  titleLineTwo=defaultTitleLine2,
  description=defaultDescription
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".cta-elem", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          clearProps: "transform,opacity",
        });

  
        gsap.to(".cta-glow", {
          scale: 1.15,
          duration: 6,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-7xl mx-auto my-24 md:my-32 px-4 md:px-8 overflow-hidden rounded-[2.5rem] border border-primary/20 bg-linear-to-b from-primary/10 via-card/50 to-card/90 backdrop-blur-md py-20 md:py-28 shadow-2xl shadow-primary/5"
    >
    
      <div
        aria-hidden="true"
        className="cta-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10"
      />

      {/* Header Container */}
      <div className="w-full flex flex-col items-center gap-6 text-center">
        <span className="cta-elem text-xs  tracking-widest text-primary px-4 py-1.5 bg-card rounded-full border border-primary/30 shadow-sm">
          {tag}
        </span>

        <h2 className="cta-elem text-4xl md:text-5xl lg:text-6xl text-foreground font-black tracking-tight leading-tight max-w-3xl">
          {titleLineOne}
          <span className="block text-foreground-secondary">
            {titleLineTwo}
          </span>
        </h2>

        <div className="cta-elem w-full md:w-3/5 lg:w-1/2 text-center">
          <p className="text-sm md:text-lg text-foreground-secondary font-medium leading-relaxed">
            {description}
          </p>
        </div>

        <div className="cta-elem w-full flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            href="/pricing"
            className="group w-full sm:w-auto bg-primary hover:bg-primary-hover text-foreground font-bold px-8 py-3.5 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 ease-in-out cursor-pointer active:scale-95 flex items-center justify-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get started
            <IoIosArrowRoundForward className="group-hover:translate-x-1 transition-transform duration-300 w-5 h-5" />
          </Link>

          <Link
            href="/integration"
            className="group w-full sm:w-auto bg-card hover:bg-card-hover text-foreground-secondary hover:text-foreground font-bold px-8 py-3.5 rounded-full border border-border hover:border-primary/40 shadow-sm transition-all duration-300 ease-in-out cursor-pointer active:scale-95 flex items-center justify-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Explore Nexora
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;