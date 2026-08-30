import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
        Resources
      </span>
      <h2
        id="resources-heading"
        className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center"
      >
        Learn. Build.{" "}
        <span className="text-foreground-secondary block"> Automate.</span>
      </h2>
      <p className="text-foreground-secondary text-sm md:text-lg text-center font-medium leading-relaxed max-w-xl">
        Practical guides and insights to help you get more from your workflows.
      </p>
    </div>
  );
};

export default Header;
