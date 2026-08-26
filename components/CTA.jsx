
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <section className='w-full bg-primary/5 border border-primary/10 px-6 py-20 mt-10'>
      {/* Header  */}
      <div className='w-full flex flex-col items-center gap-4 '>
        <span className='text-xs  text-primary px-3 py-1 bg-card rounded-3xl border border-primary/40'>READY WHEN YOU ARE</span>
        <h1 className='text-4xl md:text-5xl lg:text-6xl text-foreground font-bold'>Build what's next <span className='block text-center text-foreground-secondary'> with Nexora.</span></h1>
        <div className='w-full md:w-3/5 lg:w-1/3 text-center px-8 '>
            <p className='text-sm md:text-lg text-foreground-secondary font-medium'>
                Bring your workflows together, automate the busywork, and keep your team moving forward.
            </p>
        </div>
        <div className='w-full flex flex-col md:flex-row gap-6 justify-center py-10'>
            
            <Link href={"#pricing"}>
                <button className='bg-primary px-4 py-2 rounded-3xl hover:bg-primary-hover transition-all duration-300 ease-in-out cursor-pointer active:scale-95'>Get started</button>
            </Link>
            
            <Link href={"#integration"}>
                <button className='bg-background-secondary text-foreground-secondary px-4 py-2 rounded-3xl border border-border cursor-pointer active:scale-95 transition-all duration-300 ease-in-out'>Explore Nexora</button>
            </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
