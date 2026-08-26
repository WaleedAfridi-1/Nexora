import React from "react";
import { Card, CardContent } from "./ui/card";
import { Cross, X } from "lucide-react";
import CardFeature from "@/components/ui/ProblemSolutionsCard";


const ProblemsSolutions = () => {
  return (
    <section className="space-y-5 w-full min-h-screen mb-16 px-0 md-p-8  lg:px-16 py-8 lg:py-20  bg-background">
      
      <div className="w-full flex justify-center">
        <span className="text-primary border border-primary/20 px-4 p-1 text-sm bg-card rounded-3xl">
          WHY NEXORA?
        </span>
      </div>


        {/* main heading  */}
      <div className="w-full flex justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight ml-8 text-foreground ">
          Stop doing work <br className="hidden md:block lg:block" />
          that AI can handle.
        </h1>
      </div>

        {/* Description  */}
      <div className=" w-full px-8 md:px-0 lg:px-10 lg:ml-3  md:w-1/2 lg:w-1/2 justify-self-center  flex justify-center">
        <p className="text-sm md:text-lg lg:text-lg leading-snug  text-foreground-secondary font-medium">
          Nexora turns repetitive tasks into intelligent automations, so your
          team can focus on work that actually matters.
        </p>
      </div>

        {/* cards container  */}
      <div className="w-full flex flex-col lg:flex-row flex-wrap  justify-around gap-8  py-10 lg:py-16 px-6 md:px-8 lg:px-12">
        
        <CardFeature 
        title={'Manual workflows'} 
        description={'Too much time spent on  repetitive tasks.'} 
        icon={"error"}  
        items={["Copying data","Sending emails","Updating spreadsheets","Routine tasks"]}
        footerContent={"Hours lost every week"}
        />

        <CardFeature
        title="Automated workflows"
        description="Let Nexora handle the repetitive work for you."
        icon="success"
        items={['AI handles work', 'Tools stay connected','Runs automatically','Team moves faster']}
        footerContent=" More time for meaningful work."
        />
        


      </div>
    </section>
  );
};

export default ProblemsSolutions;
