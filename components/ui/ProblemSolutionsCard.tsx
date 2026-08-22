import React from 'react'
import { Check,  X } from "lucide-react";
import { Card, CardContent } from "./card";
import { GenIcon } from 'react-icons';



interface PropsTypes {
    title : string,
    description : string,
    items : string[],
    icon : string,
    footerContent : string,
}

const CardFeature = ({title, description, items, icon, footerContent }:PropsTypes) => {
  return (
        <Card className={`border ${icon === 'error' ? 'border-border':'border-primary/30'}  shadow w-full lg:w-2/5 py-4 px-6 space-y-10 bg-card`}>
            <div className="w-full flex flex-col px-6 gap-1 border-b border-border/90 pb-6">
                <h1 className="text-2xl font-semibold   text-start">{title} </h1>
                <p className="text-sm text-foreground-secondary  text-start">{description}</p>
            </div>

            <CardContent className="flex flex-col  gap-3 md:gap-8">
                {items.map((item, ind) => (

                <div key={ind} className=" py-3 flex  border-b border-border/80 items-center gap-2 ">
                    {
                        icon === 'error' ? (
                            <X className="w-5 h-5 text-error" />
                        ) :(
                            <Check className="w-5 h-5 text-success"/>
                        )
                    }
                    <p className="text-foreground-muted text-md">{item}</p>
                </div>
                ))}


                <div className=" w-full    py-6">
                    <div className= {` w-full text-center ${icon === 'error' ? "bg-error" : "bg-success"} whitespace-nowrap px-2 lg:px-4 py-2.5 text-foreground lg:py-3 text-sm md:text-lg lg:text-lg font-medium  rounded-full`}>
                    {footerContent}
                    </div>
                </div>
            </CardContent>
        </Card>
  )
}

export default CardFeature
