"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonialsData = [
  {
    id: "01",
    quote:
      "Nexora helped us turn scattered processes into one clear workflow. Our team can finally focus on building instead of managing tools.",
    name: "Alex Rodriguez",
    role: "Product Lead",
    company: "Orbit",
    image: "/testimonials/AlexRodriguez.png",
  },
  {
    id: "02",
    quote:
      "We spend less time jumping between tools and more time actually shipping. Nexora fits naturally into the way our team works.",
    name: "Sarah Mitchell",
    role: "CTO",
    company: "Northstar",
    image: "/testimonials/SarahMitchell.png",
  },
  {
    id: "03",
    quote:
      "The flexibility is what stood out to us. We connected our existing workflow without having to change the way our team operates.",
    name: "Daniel Chen",
    role: "Founder",
    company: "Layer",
    image: "/testimonials/DanielChen.png",
  },
  {
    id: "04",
    quote:
      "Nexora gave our team a much clearer way to manage projects, automate repetitive work, and keep everything connected.",
    name: "Maya Thompson",
    role: "Head of Product",
    company: "Vertex",
    image: "/testimonials/MayaThompson.png",
  },
  {
    id: "05",
    quote:
      "Instead of switching between different tools all day, our team now has one place to keep the work moving.",
    name: "Ryan Cooper",
    role: "Operations Lead",
    company: "Frame",
    image: "/testimonials/RyanCooper.png",
  },
  {
    id: "06",
    quote:
      "What impressed us most was how quickly we could adapt Nexora to our existing workflow without adding unnecessary complexity.",
    name: "Emma Wilson",
    role: "Founder",
    company: "Craft",
    image: "/testimonials/EmmaWilson.png",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let refresh;
    let refreshTimeout;

    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        gsap.set(
          [".testimonial-badge", ".testimonial-heading", ".testimonial-description", ".testimonial-card"],
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

      tl.from(".testimonial-badge", { y: 20, opacity: 0, duration: 0.5, ease: "power3.out" })
        .from(".testimonial-heading", { y: 30, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.3")
        .from(".testimonial-description", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.35");

      const cards = gsap.utils.toArray(".testimonial-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: (i % 3) * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        });
      });


      refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      refreshTimeout = setTimeout(refresh, 600);
    }, sectionRef);

    return () => {
      ctx.revert();
      if (refresh) window.removeEventListener("load", refresh);
      if (refreshTimeout) clearTimeout(refreshTimeout);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-10 w-full px-4 py-8 md:px-2 lg:px-8"
    >
      {/* Header */}
      <div className="flex w-full flex-col items-center gap-3">
        <span className="testimonial-badge rounded-3xl border border-primary/30 bg-card px-4 py-2 text-xs text-primary">
          CUSTOMER STORIES
        </span>
        <h2 className="testimonial-heading text-center text-4xl font-bold text-foreground md:text-5xl">
          Loved by teams{" "}
          <span className="block text-center text-foreground-secondary">
            that build
          </span>
        </h2>
        <p className="testimonial-description text-center text-sm font-medium text-foreground-secondary md:text-base">
          See how teams use Nexora to simplify{" "}
          <span className="block">their workflows and keep work moving.</span>
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-2 md:px-2 lg:grid-cols-3">
        {testimonialsData.map((card) => (
          <blockquote
            key={card.id}
            className="testimonial-card flex h-full w-full flex-col space-y-4 border border-border-light bg-card px-3 py-6 transition-all duration-300 ease-in-out hover:border-primary/40 hover:shadow-lg"
          >
            <div role="img" aria-label="5 out of 5 stars" className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="text-xs text-primary" aria-hidden="true" />
              ))}
            </div>

            {/* Quote */}
            <p className="flex-1 text-sm font-medium text-foreground md:text-lg">
              &ldquo;{card.quote}&rdquo;
            </p>

            {/* User Info */}
            <footer className="flex w-full justify-between">
              <div className="flex flex-col justify-center">
                <cite className="text-xs font-medium not-italic text-foreground">
                  {card.name}
                </cite>
                <p className="mt-1 text-xs font-medium text-foreground-secondary">
                  {card.role}, {card.company}
                </p>
              </div>

              <div className="relative h-10 w-10 shrink-0 self-center overflow-hidden rounded-full border border-primary/30 bg-background-secondary">
                <Image
                  className="object-cover object-center"
                  src={card.image}
                  fill
                  sizes="40px"
                  alt={card.name}
                />
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;