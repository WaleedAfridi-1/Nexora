import React from "react";
import { SiGooglegemini } from "react-icons/si";

const Hero = () => {
  return (
    <main className="relative min-h-screen  w-full flex flex-col items-center lg:justify-center px-4  lg:px-5 py-16 lg:py-12">
      <div className=" border absolute left-1/2 top-1/5   -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary-glow blur-3xl"></div>
      
      {/* Right Side Content  */}
      <section className="w-full md:w-full lg:full   gap-4 lg:gap-6  lg:px-8 lg:py-10  flex flex-col items-center translate-y-44 lg:translate-y-16 md:translate-y-64">
        {/* Heading and Badge  */}
        <div className="w-full lg:w-210  flex flex-col lg:px-2  space-y-1">
          {/* Badge  */}
          <div className="flex items-center justify-center gap-1 px-2 py-1 font-mono text-primary  cursor-pointer font-light leading-tight  shadow  rounded-3xl  bg-background-secondary border border-border-light  self-center">
            <SiGooglegemini className="animate-pulse" />
            <span className="text-xs ">AI-POWERED AUTOMATION</span>
          </div>

          {/* heading */}
          <div className=" flex w-full    flex-col">
            <div className=" px-5  flex flex-col items-center justify-center text-foreground  text-center lg:text-start">
              <h1 className="lg:text-7xl md:text-6xl text-4xl w-full font-black leading-10 lg:leading-none md:leading-16">
                Automate your work. Multiply your impact.
              </h1>
            </div>
          </div>
        </div>

        {/* Description  */}
        <div className="w-full  md:text-center  lg:w-150  px-12 md:px-28 lg:px-4 lg:ml-8 text-start ml-4">
          <p className="text-sm md:text-lg lg:text-xl font-light md:font-normal  text-foreground-secondary">
            Build intelligent workflows that automate repetitive tasks and help
            your team move faster.
          </p>
        </div>

        {/* buttons  */}
        <div className=" py-10 flex justify-center gap-4 lg:px-16  lg:mr-8 mt-16 lg:mt-4  lg:gap-8">
          <button className="px-4 lg:px-6 md:px-5 py-1 bg-primary border border-border hover:border-border-light rounded-3xl active:scale-95 cursor-pointer hover:bg-primary-hover shadow transition-all duration-300 text-foreground font-semibold">
            Get Started
          </button>

          <button className="px-4 lg:px-6 md:px-5 py-3 bg-transparent hover:bg-card  border border-border  hover:border-border-light rounded-3xl active:scale-95 cursor-pointer  shadow transition-all duration-300 text-foreground font-semibold">
            See How Its Works
          </button>
        </div>
      </section>

    </main>
  );
};

export default Hero;
