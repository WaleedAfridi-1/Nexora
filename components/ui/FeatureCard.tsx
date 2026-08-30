"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "./card";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CardImage {
  src: string;
  alt: string;
}

interface CardProps {
  tag: string;
  title: string;
  description: string;
  image: CardImage;
  /** Position of this card within the stack (0-based). Passed by the parent's .map(). */
  index?: number;
  /** Total number of cards in the stack. Passed by the parent's .map(). */
  total?: number;
}

// How far from the top of the viewport each card sticks, and how much extra
// offset each successive card gets so only a thin sliver of the previous
// ones peeks out — keep this small, it's meant to be barely-there.
const STACK_TOP_OFFSET = 96;
const STACK_STEP = 8;

const FeatureCard = ({
  tag,
  title,
  description,
  image,
  index = 0,
  total = 1,
}: CardProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Last card has nothing stacking on top of it, and reduced-motion users
    // get the plain sticky behaviour without the scale/dim polish.
    if (prefersReducedMotion || index >= total - 1) return;

    const ctx = gsap.context(() => {
      const nextCardWrapper = wrapperRef.current?.nextElementSibling;
      if (!nextCardWrapper) return;

      // As the next card scrolls up and covers this one, shrink it slightly
      // and bring in a solid dark scrim on top — this makes it visibly
      // recede into the stack without fading it transparent, so the thin
      // sliver that's still peeking out never looks washed-out or reveals
      // whatever is behind it.
      gsap.to(cardRef.current, {
        scale: 0.96,
        ease: "none",
        scrollTrigger: {
          trigger: nextCardWrapper,
          start: "top bottom",
          end: `top top+=${STACK_TOP_OFFSET}`,
          scrub: true,
        },
      });

      gsap.to(scrimRef.current, {
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: nextCardWrapper,
          start: "top bottom",
          end: `top top+=${STACK_TOP_OFFSET}`,
          scrub: true,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, [index, total]);

  const isAnalytics = tag.includes("ANALYTICS");

  return (
    <div
      ref={wrapperRef}
      className="stack-card sticky"
      style={{ top: STACK_TOP_OFFSET + index * STACK_STEP, zIndex: index + 1 }}
    >
      <div ref={cardRef} className="relative origin-top overflow-hidden rounded-2xl">
        {/* Dark scrim — recedes this card into the stack without making it transparent */}
        <div
          ref={scrimRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-background opacity-0"
        />
        <Card className="flex min-h-104 flex-col justify-between border border-border-light bg-card px-5 py-10 shadow-lg md:min-h-80 md:flex-row md:gap-3 md:px-8 md:py-12 lg:min-h-105 lg:gap-8 rounded ">
          <CardContent className="flex h-full w-full flex-col justify-center gap-4 px-4 py-6 md:w-1/2 md:px-7 lg:px-6">
            <span className="font-mono text-xs text-primary">{tag}</span>
            <h3 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {title}
            </h3>
            <p className="text-xs font-semibold text-foreground-secondary md:text-sm lg:text-lg">
              {description}
            </p>
          </CardContent>

          {/* Image */}
          <div className="relative h-80 w-full self-center overflow-hidden rounded-sm border border-border/30 md:h-72 md:w-2/5 lg:h-80">
            <Image
              className={`object-cover object-center ${
                isAnalytics ? "-rotate-y-15" : ""
              }`}
              alt={image.alt}
              src={image.src}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeatureCard;