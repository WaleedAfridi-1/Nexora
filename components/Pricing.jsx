"use client";
import React, { useRef, useLayoutEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { HiCheckBadge } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoArrowRedoSharp } from "react-icons/io5";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".pricing-header-elem", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "transform,opacity",
      });

      gsap.from(".pricing-card", {
        scrollTrigger: {
          trigger: ".pricing-cards-container",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        clearProps: "transform,opacity",
      });

    
      gsap.from(".pricing-footer-banner", {
        scrollTrigger: {
          trigger: ".pricing-footer-banner",
          start: "top 90%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
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
      <div className="absolute top-52 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary-glow/60 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="w-full flex flex-col items-center gap-5 text-center">
        <span className="pricing-header-elem px-4 py-1.5 rounded-full border border-primary/20 bg-card text-primary text-xs font-mono tracking-widest shadow-sm">
          PRICING
        </span>
        <h2 className="pricing-header-elem text-4xl md:text-5xl lg:text-6xl text-foreground font-black tracking-tight">
          Plans that grow{" "}
          <span className="block  text-foreground-secondary">with you</span>
        </h2>
        <p className="pricing-header-elem text-center px-4 md:w-2/3 lg:w-1/2 text-foreground-secondary text-base md:text-lg font-medium leading-relaxed">
          Start with what you need today and unlock more as your team scales.
        </p>
      </div>

      {/* Cards Container */}
      <div className="pricing-cards-container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10  gap-6 py-8 mt-40 px-2">
        {/* Free Plan */}
        <Card className="self-center pricing-card group relative flex flex-col justify-between rounded border border-border/60 hover:border-primary/50 transition-all duration-300 p-8 bg-card/90 backdrop-blur-sm shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
          <CardHeader className="w-full flex flex-col gap-3 items-start border-b border-border/60 pb-8 p-0">
            <span className="text-xs font-mono tracking-wider text-foreground font-bold">
              FREE
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-4xl lg:text-5xl text-foreground font-black tracking-tighter">
                $0
              </span>
              <span className="text-foreground-secondary text-sm font-medium">
                /month
              </span>
            </div>
            <p className="text-foreground-secondary text-sm font-medium leading-relaxed mt-1">
              For individuals getting started with Nexora.
            </p>
          </CardHeader>

          <CardContent className="w-full p-0 py-8 border-b border-border/60 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                3 active workflows
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                5 integrations
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                Basic automation
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                1 workspace
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                Community support
              </p>
            </div>
          </CardContent>

          <CardFooter className="w-full p-0 pt-8">
            <button className="group/btn w-full bg-card hover:bg-card-hover border border-border/60 hover:border-primary/40 rounded-full py-3 px-6 text-foreground text-sm font-bold cursor-pointer shadow-sm transition-all duration-300 ease-in-out active:scale-95 flex items-center justify-center gap-2">
              Get started
              <IoIosArrowRoundForward className="group-hover/btn:translate-x-1 transition-transform duration-300 w-5 h-5" />
            </button>
          </CardFooter>
        </Card>

        {/* Pro Plan  */}
        <Card className="pricing-card group relative flex flex-col justify-between rounded border-2 border-primary/50 hover:border-primary transition-all duration-300 p-8 bg-card/95 backdrop-blur-sm shadow-xl shadow-primary/5 hover:-translate-y-1">
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full text-xs tracking-wider font-bold bg-primary px-4 py-1 text-foreground shadow-md">
            MOST POPULAR
          </span>

          <CardHeader className="w-full flex flex-col gap-3 items-start border-b border-border/60 pb-8 p-0">
            <span className="text-xs font-mono tracking-wider text-primary font-bold">
              PRO
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-4xl lg:text-5xl text-foreground font-black tracking-tighter">
                $19
              </span>
              <span className="text-foreground-secondary text-sm font-medium">
                /month
              </span>
            </div>
            <p className="text-foreground-secondary text-sm font-medium leading-relaxed mt-1">
              For growing teams building and shipping faster.
            </p>
          </CardHeader>

          <CardContent className="w-full p-0 py-8 border-b border-border/60 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                Unlimited workflows
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                50+ integrations
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                Advanced automation
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                Team collaboration
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                Priority support
              </p>
            </div>
          </CardContent>

          <CardFooter className="w-full p-0 pt-8">
            <button className="group/btn w-full bg-primary hover:bg-primary-hover rounded-full py-3 px-6 text-foreground text-sm font-bold cursor-pointer shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 ease-in-out active:scale-95 flex items-center justify-center gap-2">
              Get started
              <IoIosArrowRoundForward className="group-hover/btn:translate-x-1 transition-transform duration-300 w-5 h-5" />
            </button>
          </CardFooter>
        </Card>

        {/* Business Plan */}
        <Card className="pricing-card group relative flex flex-col justify-between rounded border border-border/60 hover:border-primary/50 transition-all duration-300 p-8 bg-card/90 backdrop-blur-sm shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
          <CardHeader className="w-full flex flex-col gap-3 items-start border-b border-border/60 pb-8 p-0">
            <span className="text-xs font-mono tracking-wider text-foreground font-bold">
              BUSINESS
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-4xl lg:text-5xl text-foreground font-black tracking-tighter">
                $49
              </span>
              <span className="text-foreground-secondary text-sm font-medium">
                /month
              </span>
            </div>
            <p className="text-foreground-secondary text-sm font-medium leading-relaxed mt-1">
              For teams that need more control and flexibility.
            </p>
          </CardHeader>

          <CardContent className="w-full p-0 py-8 border-b border-border/60 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                Everything in Pro
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                Advanced permissions
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                Custom workflow limits
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                Dedicated support
              </p>
            </div>
            <div className="flex items-center gap-3">
              <HiCheckBadge className="text-primary w-5 h-5 shrink-0" />
              <p className="text-sm font-medium text-foreground-secondary">
                Team management
              </p>
            </div>
          </CardContent>

          <CardFooter className="w-full p-0 pt-8">
            <button className="group/btn w-full bg-card hover:bg-card-hover border border-border/60 hover:border-primary/40 rounded-full py-3 px-6 text-foreground text-sm font-bold cursor-pointer shadow-sm transition-all duration-300 ease-in-out active:scale-95 flex items-center justify-center gap-2">
              Contact sales
              <IoIosArrowRoundForward className="group-hover/btn:translate-x-1 transition-transform duration-300 w-5 h-5" />
            </button>
          </CardFooter>
        </Card>
      </div>

      {/* Footer Custom Plan  */}
      <div className="pricing-footer-banner w-full  md:px-2">
        <Link href={"/contact"}>
          <div className="group w-full rounded border border-border/60 hover:border-primary/50 bg-card/95 backdrop-blur-sm p-6 md:p-8 flex items-center justify-between transition-all duration-300 ease-in-out shadow-sm hover:shadow-xl hover:shadow-primary/5">
            <div className="flex flex-col gap-1">
              <h3 className="text-base md:text-xl text-foreground font-bold tracking-tight">
                Need a custom plan?
              </h3>
              <p className="text-xs md:text-sm font-medium text-foreground-secondary">
                Talk to our team for custom integrations, security, and
                enterprise support.
              </p>
            </div>
            <div className="p-3.5 rounded-2xl bg-primary/10 group-hover:bg-primary group-hover:text-foreground text-primary transition-all duration-300 ease-in-out shrink-0 ml-4">
              <IoArrowRedoSharp className="w-5 h-5" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Pricing;
