import React from 'react'
import { Card, CardContent } from "./card";
import Image from 'next/image';


interface CardProps {
    tag : string,
    title : string,
    description : string,
    image : Record<string,string>
}
const FeatureCard = ({tag, title, description, image} : CardProps) => {
  return (

        <Card className=" md:min-h-80 lg:min-h-105 bg-card shadow border border-border-light px-5 md:px-8  py-10 md:py-12 flex flex-col md:flex-row justify-between md:gap-3 lg:gap-8">
          <CardContent className=" w-full h-full  md:w-1/2 flex flex-col  justify-center gap-4 py-6  px-4 lg:px-6 md:px-7">
            <span className="text-xs font-mono text-primary lg:mt-10 md:mt-2">
              {tag}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
            <p className="text-xs md:text-sm lg:text-lg text-foreground-secondary font-semibold">{description}</p>

          </CardContent>

            {/* Image */}
          <div className="relative h-80 md:h-72 lg:h-80 self-center  w-full md:w-2/5  overflow-hidden rounded-sm border border-border/30  "> 
          <Image
          className={`object-cover object-center ${image.alt === 'ACTIONABLE ANALYTICS' && " -rotate-y-15" }`}
          alt={image.alt}
          src={image.src}
          fill
          />
          </div>
        </Card>
  )
}

export default FeatureCard
