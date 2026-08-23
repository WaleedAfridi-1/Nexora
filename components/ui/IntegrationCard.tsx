import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card';


interface IntegrationCardProps {
    
    name : string;
    description : string;
    category : string;
    bgColor : string,
    Icon: React.ComponentType<{ className?: string }>;
}
const IntegrationCard = ({name, description, category,bgColor, Icon}:IntegrationCardProps) => {
  return (
          <Card 
          className='py-5 px-2 pr-5 md:px-3 space-y-3  bg-card border border-border-light hover:border-primary/70 hover:scale-102 hover:shadow-lg shadow-primary-glow/70 transition-all duration-300 ease-in-out '
          >
            <CardHeader className='w-full pl-3  py-2 pb-6 border-b border-border flex flex-row items-center gap-4'>
                 <div
                 style={{color :bgColor}}
                 className='w-14 h-14  rounded-full md:w-8 md:h-8 flex items-center justify-center shrink-0 text-foreground'>
                    {
                    Icon  &&  <Icon className='w-full h-full  object-center' />
                    }
                </div>
              <h4 className='text-lg md:text-xl font-bold'>{name}</h4>
            </CardHeader>
            <CardContent className='pl-3  lg:pl-3 lg:pr-10 space-y-6'>
              <p className='text-foreground-secondary text-sm md:text-lg font-normal'>{description}</p>
              <span className='text-xs font-extralight md:font-light text-primary'>{category}</span>
            </CardContent>
          </Card>
  )
}

export default IntegrationCard
