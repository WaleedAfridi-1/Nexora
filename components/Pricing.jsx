import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { HiCheckBadge } from "react-icons/hi2";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoArrowRedoSharp } from "react-icons/io5";
import Link from "next/link";

const Pricing = () => {
  return (
    <section id="pricing"
    className="w-full  py-10 px-4 mt-10">
      {/* Header  */}
      <div className="w-full flex flex-col gap-4 items-center">
        <span className="text-xs px-4 py-1 border border-primary/30 bg-card rounded-3xl text-primary ">
          PRICING
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          {" "}
          Plans that grow{" "}
          <span className="block text-center text-foreground-secondary">
            with you
          </span>
        </h1>
        <p className="text-sm md:text-lg text-foreground-secondary font-medium">
          {" "}
          Start with what you need today and unlock{" "}
          <span className="text-center block ">more as your team grows.</span>
        </p>
      </div>

      {/* cards Container  */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  py-10 px-4">
        {/* Free  */}
        <Card className=" px-4  border border-border bg-card">
          <CardHeader className="w-full flex flex-col gap-1 items-start border-b border-border/70  pb-4">
            <h3 className="text-sm md:text-base  text-foreground font-bold">
              FREE
            </h3>
            <h1 className="text-xl md:text-2xl text-foreground font-black relative">
              $0{" "}
              <span className="absolute top-1/7 text-foreground-secondary  text-justify text-sm md:text-base font-bold">
                /month
              </span>
            </h1>
            <div className=" w-2/3 pt-2 pb-6">
              <p className="text-xs md:text-base leading-tight font-medium text-foreground-secondary  ">
                For individuals getting started with Nexora.
              </p>
            </div>
          </CardHeader>
          <CardContent className="w-full px-2 py-8 border-b border-border/70 flex flex-col gap-4">
            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                3 active workflows
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                5 integrations
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                Basic automation
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                1 workspace
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                Community support
              </p>
            </div>
          </CardContent>
          <CardFooter className="py-6 px-8 w-full flex ">
            <button className="group bg-card-hover rounded border border-border-light cursor-pointer hover:bg-card-hover/30 transition-all duration-300 ease-in-out active:scale-95 hover:scale-102 hover:border-border w-full py-2 text-foreground-secondary hover:text-foreground">
              Get started{" "}
              <IoIosArrowRoundForward className="group-hover:pl-4  transition-all duration-300 ease-in-out w-8 inline" />
            </button>
          </CardFooter>
        </Card>

        {/* Pro  */}
        <Card className="relative px-4  border border-primary/40 bg-card">
          <span className="absolute top-0 rounded-bl-2xl right-0 text-xs font-medium font-mono bg-primary px-4 py-1 text-foreground">
            MOST POPULAR
          </span>
          <CardHeader className="w-full flex flex-col gap-1 items-start border-b border-border/70  pb-4">
            <h3 className="text-sm md:text-base border-primary ring-1 ring-primary/20 px-4 py-0.5 rounded-3xl text-primary font-bold">
              PRO
            </h3>
            <h1 className="text-xl md:text-2xl text-foreground font-black relative">
              $19{" "}
              <span className="absolute top-1/7 text-foreground-secondary  text-justify text-sm md:text-base font-bold">
                /month
              </span>
            </h1>
            <div className=" w-2/3 pt-2 pb-6">
              <p className="text-xs md:text-base leading-tight font-medium text-foreground-secondary  ">
                For growing teams building and shipping faster.
              </p>
            </div>
          </CardHeader>
          <CardContent className="w-full px-2 py-8 border-b border-border/70 flex flex-col gap-4">
            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                Unlimited workflows
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                50+ integrations
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                Advanced automation
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                Team collaboration
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                Priority support
              </p>
            </div>
          </CardContent>
          <CardFooter className="py-6 px-8 w-full flex ">
            <button className="group bg-primary hover:bg-primary/90 rounded border border-border-light/60 cursor-pointer  transition-all duration-300 ease-in-out active:scale-95 hover:scale-102 hover:border-border w-full py-2 text-foreground ">
              Get started{" "}
              <IoIosArrowRoundForward className="group-hover:pl-4  transition-all duration-300 ease-in-out w-8 inline" />
            </button>
          </CardFooter>
        </Card>

        {/* Business  */}
        <Card className=" px-4  border border-border bg-card">
          <span></span>
          <CardHeader className="w-full flex flex-col gap-1 items-start border-b border-border/70  pb-4">
            <h3 className="text-sm md:text-base  text-foreground font-bold">
              BUSINESS
            </h3>
            <h1 className="text-xl md:text-2xl text-foreground font-black relative">
              $49{" "}
              <span className="absolute top-1/7 text-foreground-secondary  text-justify text-sm md:text-base font-bold">
                /month
              </span>
            </h1>
            <div className=" w-2/3 pt-2 pb-6">
              <p className="text-xs md:text-base leading-tight font-medium text-foreground-secondary  ">
                For teams that need more control and flexibility.
              </p>
            </div>
          </CardHeader>
          <CardContent className="w-full px-2 py-8 border-b border-border/70 flex flex-col gap-4">
            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                Everything in Pro
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                Advanced permissions
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                Custom workflow limits
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                Dedicated support
              </p>
            </div>

            <div className=" flex items-center gap-2">
              <HiCheckBadge className="text-primary " />
              <p className="text-xs md:text-sm font-semibold text-foreground-muted">
                Team management
              </p>
            </div>
          </CardContent>
          <CardFooter className="py-6 px-8 w-full flex ">
            <button className="group bg-card-hover rounded border border-border-light cursor-pointer hover:bg-card-hover/30 transition-all duration-300 ease-in-out active:scale-95 hover:scale-102 hover:border-border w-full py-2 text-foreground-secondary hover:text-foreground">
              Contact sales{" "}
              <IoIosArrowRoundForward className="group-hover:pl-4  transition-all duration-300 ease-in-out w-8 inline" />
            </button>
          </CardFooter>
        </Card>
      </div>

      {/* footer  */}
      <div className="w-full  px-4 ">
        <Link href={"#contact"} className="">
          <div className=" w-full justify-self-center group h-16 px-8 py-2 ring ring-border/80  bg-background-secondary flex items-center justify-between">
            <p className="text-sm md:text-lg text-foreground font-medium">
              Need a custom plan?
            </p>
            <button className="p-3 group-hover:bg-foreground  group-hover:text-background cursor-pointer bg-card-hover transition-all duration-300 ease-in-out">
              <IoArrowRedoSharp className="" />
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Pricing;
