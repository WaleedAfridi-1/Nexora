import React from "react";

const page = () => {
  return (
    <main className="min-h-screen py-20">
      {/* Header  */}
      <div className="bg-transparent w-full flex flex-col items-center justify-center gap-3 md:gap-4 mt-20">
        <span className="w-fit px-3 py-1 text-sm text-primary bg-card border border-primary/40 rounded-3xl uppercase">
          AI WORKFLOWS
        </span>

        <div className="px-5 md:px-4  lg:px-10 py-4  w-full md:w-2/3">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center text-foreground font-black">
            {" "}
            How to build reliable AI workflows
          </h1>
        </div>

        <div className=" px-5 md:px-4  lg:px-16  w-full md:w-2/3">
          <p className="text-foreground-secondary text-center text-sm md:text-lg font-medium ">
            {" "}
            A practical guide to designing AI-powered workflows that are
            predictable and scalable.
          </p>
        </div>

        <span className="text-foreground-muted text-xs font-medium">
          Sep 1, 2026
        </span>
      </div>

      {/* left  */}
      <div className="w-full lg:w-2/3  mt-20 px-2 md:px-8 py-6 flex flex-col gap-4">
        <div className="flex flex-col gap-3 border py-2 w-full ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Introduction
          </h1>
          <div className="w-full px-2 md:px-4 py-4 flex flex-col gap-6">
            <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed font-medium ">
              AI workflows are becoming an important part of modern businesses.
              They can automate repetitive tasks, process information, and help
              teams make faster decisions.
            </p>

            <p className="text-base lg:text-lg text-foreground-secondary leading-relaxed font-medium ">
              But adding AI to a workflow is only the beginning. The real
              challenge is building workflows that remain reliable as they
              scale.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
