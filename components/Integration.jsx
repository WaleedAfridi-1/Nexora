"use client"
import { useEffect, useState } from 'react';
import IntegrationCard from './ui/IntegrationCard'
import { integrations } from './ui/IntegrationItems'
import { motion } from 'framer-motion';



const IntegrationFeature = () => {
  const [category , setCategory] = useState("All")

  const filteredIntegration = category === "All" ? integrations : integrations.filter(
    (item) => item.category === category)


  return (
    <section id='integration' className='bg-background py-20 px-4 md:px-8  mt-10 mb-20 space-y-6 '>

        {/* Heading  */}
      <div className='w-full flex flex-col items-center  gap-5'>
        <span className='text-xs self-center  text-mono text-primary border border-primary/20 bg-background-secondary px-4 py-1 rounded-3xl'>Integrations</span>
        <h1 className='text-center  text-4xl md:text-5xl lg:text-6xl text-foreground font-black'>
            From idea to <span className='block pl-2 lg:pl-4 text-foreground-secondary'>automation.</span>
        </h1>
        <p className='md:w-2/4 text-sm md:text-lg text-foreground-secondary text-center px-8 font-medium'>Connect your tools, build your workflow, and let Nexora handle the rest.</p>
      </div>

        {/* Tabs  */}
        <div className='text-xs flex gap-8 overflow-auto px-4 md:px-8 lg:justify-center mt-16 scrollbar-none'>
            <button
            onClick={() => setCategory("All")} 
            className={`${category === "All" ? "bg-primary text-foreground":"text-foreground-muted bg-card"} whitespace-nowrap px-6 py-2 rounded-3xl border border-border-light font-mono font-medium cursor-pointer  text-foreground  `}>All</button>
            
            <button 
            onClick={() => setCategory("Build & Automate")}
            className={` ${category === "Build & Automate" ? "bg-primary text-foreground":"text-foreground-muted bg-card"} whitespace-nowrap px-6 py-2 rounded-3xl border border-border font-mono font-medium cursor-pointer  `}>Build & Automate</button>

            <button 
            onClick={() => setCategory("Project Management")}
            className={` ${category === "Project Management" ? "bg-primary text-foreground":"text-foreground-muted bg-card"} whitespace-nowrap px-6 py-2 rounded-3xl border border-border font-mono font-medium cursor-pointer  `}>Project Management</button>


            <button 
            onClick={() => setCategory("Communication")}
            className={`${category === "Communication" ? "bg-primary text-foreground":"text-foreground-muted bg-card"}  whitespace-nowrap px-6 py-2 rounded-3xl border border-border font-mono font-medium cursor-pointer  `}>Communication</button>

            <button 
            onClick={() => setCategory("Payments")}
            className={` ${category === "Payments" ? "bg-primary text-foreground":"text-foreground-muted bg-card"} whitespace-nowrap px-6 py-2 rounded-3xl border border-border font-mono font-medium cursor-pointer  `}>Payments</button>
        </div>

        {/* cards container  */}
        <div className='w-full px-10 md:px-2 py-6 mt-8 gap-y-10 gap-x-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          
          {
            filteredIntegration.map((card, index) => (
              <IntegrationCard key={index}
              name={card.name}
              description={card.description}
              category={card.category}
              bgColor={card.brandColor}
              Icon= {card.icon}
              />
            ))
          }
        </div>
    </section>
  )
}

export default IntegrationFeature
