"use client";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const glowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        
        onComplete: () => {
          
          ScrollTrigger.refresh(); 

  
          const scrollTl = gsap.timeline({
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });

          scrollTl
            .to(glowRef.current, { y: 150, opacity: 0, scale: 0.8 }, 0)
            .to(".hero-badge", { y: -50, opacity: 0 }, 0)
            .to(".hero-heading", { y: -100, opacity: 0 }, 0)
            .to(".hero-description", { y: -150, opacity: 0 }, 0)
            .to(".hero-btn-wrapper", { y: -200, opacity: 0 }, 0);
        },
      });

      tl.from(".hero-badge", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".hero-heading",
          {
            y: 35,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-btn-wrapper",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.35"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 lg:px-8 py-16 overflow-hidden"
    >
      <div
        ref={glowRef}
        className="absolute left-1/2 top-[20%] -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-glow blur-3xl pointer-events-none"
      />

      {/* Hero Section */}
      <section className="w-full max-w-5xl flex flex-col items-center gap-6 text-center">
        {/* Badge */}
        <span className="hero-badge text-xs font-mono text-primary border border-primary/20 bg-card px-4 py-1.5 rounded-full">
          AI-POWERED AUTOMATION
        </span>

        {/* Heading */}
        <div className="w-full max-w-4xl px-2">
          <h1 className="hero-heading text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-foreground">
            Automate your work.{" "}
            <span className="text-foreground-secondary block sm:inline">
              Multiply your impact.
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="w-full max-w-2xl px-4">
          <p className="hero-description text-base md:text-lg lg:text-xl font-normal text-foreground-secondary">
            Build intelligent workflows that automate repetitive tasks and help
            your team move faster.
          </p>
        </div>

        {/* Buttons Wrapper */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full">
          <Link href="/pricing" className="hero-btn-wrapper w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 bg-primary border border-border hover:border-border-light rounded-full active:scale-95 cursor-pointer hover:bg-primary-hover shadow transition-all duration-300 text-foreground font-semibold">
              Get Started
            </button>
          </Link>

          <Link
            href="#feature"
            className="hero-btn-wrapper w-full md:w-fit "
          >
            <button className="w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-card border border-border hover:border-border-light rounded-full active:scale-95 cursor-pointer shadow transition-all duration-300 text-foreground font-semibold">
              See How It Works
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Hero;