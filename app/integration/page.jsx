"use client"
import React from "react";
import IntegrationFeature from "@/components/Integration";
import Header from "../../components/contactPageComponents/Header";
import GlowBackground from "@/components/ui/GlowBackground";


const page = () => {
  return (
    <main className="relative">
        <GlowBackground/>
    
      {/* Heading */}
      <div className="w-full min-h-fit mt-56 lg:mt-52 md:mt-64 mb-10   flex flex-col justify-center items-center gap-5">
        <span className="text-sm self-center text-mono text-primary border border-primary/20 bg-card px-4 py-1 rounded-3xl">
          Integrations
        </span>

        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl text-foreground font-black">
          From idea to{" "}
          <span className="block pl-2 lg:pl-4 text-foreground-secondary">
            automation.
          </span>
        </h1>
        <p className="md:w-2/4 text-sm md:text-lg text-foreground-secondary text-center px-8 font-medium">
          Connect your tools, build your workflow, and let Nexora handle the
          rest.
        </p>
      </div>

      <IntegrationFeature />
    </main>
  );
};

export default page;
