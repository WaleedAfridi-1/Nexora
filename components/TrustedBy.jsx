import React from 'react'

const TrustedBy = () => {
    const Companies = ["ACME", "VERTEX", "ORBIT", "NOVA", "FLUX"]
  return (
    <section className='w-full py-8  bg-background mb-16'>
      <div className=' px-8 flex flex-col items-center justify-center gap-3 md:gap-6'>
        <p className='text-sm text-foreground-muted font-mono'>Trusted by 2,000+ teams worldwide</p>
        
        <div className='w-full flex lg:justify-center md:justify-center  py-1   overflow-auto scrollbar-none    gap-6 lg:gap-6  '>
            {Companies.map((item,ind) => (
                <span key={ind} className='text-sm text-foreground-muted  bg-background-secondary px-3 py-1 rounded-3xl border border-border '>{item}</span>
            ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
