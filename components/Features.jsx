import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import FeatureCard from "./ui/FeatureCard";

const cardsContent = [
    {
        tag : "✦ AI-POWERED WORKFLOWS",
        title :'Automations that think, adapt, and execute.',
        description : 'Build intelligent workflows that can understand context and take action automatically.',
        image : { src:"/Workflow.png",
                  alt :"AI-POWERED WORKFLOWS"
                }
    },
    {
        tag : "⚡ SMART AUTOMATION",
        title :'Turn repetitive tasks into automated workflows.',
        description : 'Let Nexora handle routine work without constant manual input.',
        image : { src:"/automation.png",
                  alt :"SMART AUTOMATION"
                }
    },
    {
        tag : "⌘ CONNECT YOUR TOOLS",
        title :'Bring your favorite tools together',
        description : 'Connect the apps your team already uses and move data between them automatically.',
        image : { src:"/Integration.png",
                  alt :"⌘ CONNECT YOUR TOOLS"
                }
    },
    {
        tag : "◉ REAL-TIME MONITORING",
        title :"Know what' s happening at every step.",
        description : 'Monitor workflows, tasks, and automation status in real time.',
        image : { src:"/monitoring.png",
                  alt :"REAL-TIME MONITORING"
                }
    },
    {
        tag : "↗ ACTIONABLE ANALYTICS",
        title :"Understand what your automations are accomplishing.",
        description : 'Track performance, activity, and results from one place.',
        image : { src:"/analytics.png",
                  alt :"ACTIONABLE ANALYTICS"
                }
    },
]

const Features = () => {
  return (
    <section id="feature" className="bg-background  w-full min-h-screen flex flex-col gap-4 py-8 px-2 md:px-4 lg:px-8">
      
      {/* Heading */}
      <div className="w-full flex flex-col gap-3 md:gap-4  px-6 md:px-10  mb-4 ">
        <span className="w-fit text-xs text-primary  font-mono border border-primary/30 px-3 py-1 rounded-3xl  ">
          ✦POWERFUL FEATURES
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black  text-foreground">
          Everything you need to <br className="hidden lg:block" />
          <span className="text-foreground-secondary">automate smarter.</span> 
        </h1>

        <div className="w-1/2  md:px-2 lg:px-4  flex  ">
          <p className="text-sm md:text-lg lg:text-xl text-foreground-secondary font-medium">
            Build, connect, and manage intelligent workflows from one powerful
            platform.
          </p>
        </div>
      </div>

      {/* cards container  */}
      <div className="w-full flex flex-col gap-10 px-2 md:px-6 lg:px-16 py-3  ">
        {
            cardsContent.map((card, index) => (
                <FeatureCard key={index}
                tag={card.tag} 
                title={card.title}
                description={card.description} 
                image={{ src:card.image.src, alt :card.image.alt}} />
                
            ))
        }
      
      </div>


    </section>
  );
};

export default Features;
