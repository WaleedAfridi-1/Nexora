import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    id: "01",
    quote:
      "Nexora helped us turn scattered processes into one clear workflow. Our team can finally focus on building instead of managing tools.",
    name: "Alex Rodriguez",
    role: "Product Lead",
    company: "Orbit",
    image: "/testimonials/AlexRodriguez.png",
  },
  {
    id: "02",
    quote:
      "We spend less time jumping between tools and more time actually shipping. Nexora fits naturally into the way our team works.",
    name: "Sarah Mitchell",
    role: "CTO",
    company: "Northstar",
    image: "/testimonials/SarahMitchell.png",
  },
  {
    id: "03",
    quote:
      "The flexibility is what stood out to us. We connected our existing workflow without having to change the way our team operates.",
    name: "Daniel Chen",
    role: "Founder",
    company: "Layer",
    image: "/testimonials/DanielChen.png",
  },
  {
    id: "04",
    quote:
      "Nexora gave our team a much clearer way to manage projects, automate repetitive work, and keep everything connected.",
    name: "Maya Thompson",
    role: "Head of Product",
    company: "Vertex",
    image: "/testimonials/MayaThompson.png",
  },
  {
    id: "05",
    quote:
      "Instead of switching between different tools all day, our team now has one place to keep the work moving.",
    name: "Ryan Cooper",
    role: "Operations Lead",
    company: "Frame",
    image: "/testimonials/RyanCooper.png",
  },
  {
    id: "06",
    quote:
      "What impressed us most was how quickly we could adapt Nexora to our existing workflow without adding unnecessary complexity.",
    name: "Emma Wilson",
    role: "Founder",
    company: "Craft",
    image: "/testimonials/EmmaWilson.png",
  },
];

const Testimonials = () => {
  return (
    <section className=" w-full mt-10 py-8 px-4 md:px-2 lg:px-8">
      {/* header  */}
      <div className="w-full flex flex-col items-center gap-3">
        <span className="text-xs text-primary bg-card font-light font-mono px-4 py-2 border border-primary/30 rounded-3xl">
          CUSTOMER STORIES
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Loved by teams{" "}
          <span className="block text-foreground-secondary text-center">
            that build
          </span>
        </h1>
        <p className="text-sm md:text-base text-foreground-secondary font-medium">
          See how teams use Nexora to simplify{" "}
          <span className="block">
            their workflows and keep work moving.
          </span>{" "}
        </p>
      </div>

      {/* cards container  */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-3 mt-8  py-8 px-4 md:px-2">
        {testimonialsData.map((card) => {
          return (
            <div key={card.id} 
            className="flex- flex-col space-y-4 bg-card border border-border-light w-full md:w-96  h-fit px-3 py-6 ">
              <div className="flex gap-0.5">
                <FaStar className="text-xs text-primary" />
                <FaStar className="text-xs text-primary" />
                <FaStar className="text-xs text-primary" />
                <FaStar className="text-xs text-primary" />
                <FaStar className="text-xs text-primary" />
              </div>
              {/* Quote  */}
              <div className="text-sm md:text-lg font-medium text-foreground">
                <p>
                  "{card.quote}"
                </p>
              </div>
              {/* user Info  */}
              <div className="w-full flex justify-between">
                <div className="flex flex-col pt-6 ">
                  <p className="text-xs font-medium text-foreground">
                    {card.name}
                  </p>
                  <p className="mt-1 text-xs font-medium text-foreground-secondary">
                    {card.role}, <span className="">{card.company}</span>
                  </p>
                </div>

                <div className="relative overflow-hidden   w-10 h-10 border border-primary/30 mt-4 self-center rounded-full bg-foreground">
                  <Image
                    className="object-center object-cover"
                    priority
                    src={card.image}
                    fill
                    alt={card.name}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
