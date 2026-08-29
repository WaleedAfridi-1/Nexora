"use client";

import React, { useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Wrap the app (or a page) with this once — e.g. in app/layout.jsx:
 *
 *   <SmoothScrollProvider>
 *     <Navbar />
 *     {children}
 *   </SmoothScrollProvider>
 *
 * It replaces native scroll with Lenis's eased physics and keeps every
 * existing ScrollTrigger-based animation (Hero, Features, ProblemsSolutions)
 * perfectly in sync — no changes needed in those files.
 */
const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef(null);
  const rafCallbackRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Respect reduced-motion: keep native scroll, skip the smoothing layer.
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.1,
    });
    lenisRef.current = lenis;

    // Keep ScrollTrigger's measurements in sync with Lenis's virtual scroll.
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis off GSAP's own ticker instead of a separate rAF loop,
    // so everything animates on the same clock.
    const update = (time) => {
      lenis.raf(time * 1000);
    };
    rafCallbackRef.current = update;
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;