import Link from 'next/link';
import { AnimateValue } from "@/components/ui/AnimateValue";
import { GiOrbit } from "react-icons/gi";

const StatsCardsContent = [
    {
        numbers : "10",
        suffix : "×",
        title :"FASTER WORKFLOWS",
        description : "Reduce the friction between planning, building, shipping."

    },
    {
        numbers : "50",
        suffix : "+",
        title :"TOOLS CONNECTED",
        description : "Bring your tools into one connected workspace."

    },
    {
        numbers : "99",
        suffix : "%",
        title :"LESS BUSYWORK",
        description : "Automate repetitive steps and spend more time meaningfully.  "

    },
    {
        numbers : "24",
        suffix : "/7",
        title :"AUTOMATION",
        description : " Keep important workflows moving in the background."

    },

]
const Stats = () => {
  return (
    <section className='w-full pb-16  px-2'>
        {/* Header    */}
        <div className='w-full flex flex-col items-center gap-3 px-4'>
            <span className='px-4 py-1 rounded-3xl border border-primary/30 bg-card text-primary text-xs  '>THE NEXORA DIFFERENCE</span>
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-foreground font-bold'>Built for modern <span className='block text-center text-foreground-secondary'>work</span></h1>
            <p className='text-center px-4 md:w-1/2 lg:px-14 text-foreground-secondary text-lg font-medium'>Move from ideas to execution faster with a system designed to keep your work connected.</p>
        </div>

        {/* Cards Container */}
        <div className='w-full  flex flex-col md:flex-row flex-wrap items-center md:justify-center gap-6 lg:gap-3 py-6  md:px-8 lg:px-4 mt-10'>
            
            {
                StatsCardsContent.map((item, id) => {
                    return (
                        <div key={id}
                        className=' cursor-pointer w-80 lg:w-72 lg:h-70 rounded-2xl border border-primary/20   hover:border-primary-hover/60 transition-all duration-300  px-3 py-8 pt-8 bg-card   flex flex-col gap-3 items-center'>
                            
                            <h1 className='text-6xl text-primary font-bold'><AnimateValue value={item.numbers}/>{item.suffix}</h1>
                            <h5 className='text-lg font-medium mt-4 lg:mt-8'>{item.title}</h5>
                            <p className='text-foreground-muted px-2 text-center '>{item.description}</p>
                        </div>
                    )
                })
            }


        </div>
        
        {/* footer Cards  */}
        <div className='w-full flex px-4 md:px-14 lg:px-8 items-center lg:justify-center flex-col lg:flex-row gap-6    '>
            {/* Card 1 */}
            <div className='bg-card  w-full h-60 lg:w-1/2 flex flex-col justify-between border border-primary/30 hover:border-primary-hover/60 transition-all duration-300 ease-in-out cursor-pointer hover:shadow shadow-primary-glow rounded-2xl px-6  py-3'>
               
                {/* Description  */}
                <div className='w-full border-b border-border-light pb-10 '>
                    <p className='w-2/3 text-foreground-secondary md:text-lg font-base text-start '>"Nexora gave our team a much simpler way to bring our workflows together and keep everything moving.”</p>
                </div>
                {/* Name and icon  */}
                <div className=' w-full  flex justify-between items-center'>
                    <div className='w-fit flex flex-col'>
                        <span className='text-foreground text-sm md:text-base font-medium'>Sarah K.</span>
                        <span className='text-xs md:text-sm font-medium text-foreground-muted'>Product Lead, Orbit </span>
                    </div>
                    <div className=' rounded-full w-8 h-8 flex items-center '>
                        <GiOrbit className='w-full h-full text-primary/50 '/>
                    </div>
                </div>
            
            </div>

            {/* Card 2  */}
             <div className='bg-card h-60  w-full lg:w-1/2 border border-primary/30 hover:border-primary-hover/60 transition-all duration-300 ease-in-out rounded-2xl cursor-pointer shadow shadow-primary-glow px-6 flex flex-col  '>
                {/* heading  */}
                <div className='border-b border-border-light  w-full flex flex-col gap-4 py-6 px-1.5 lg:px-2'>
                    <h4 className='text-xl lg:text-2xl text-foreground font-bold'>Start building with Nexora.</h4>
                    <p className='w-2/3 text-foreground-secondary text-sm md:text-base font-medium '>Explore the platform, connect your tools, and build your first workflow.  </p>
                </div>

                <div className='w-full flex pt-4  h-full items-center justify-between px-1.5'>
                    <span className='w-1/2  md:w-1/3 text-xs md:text-sm font-medium text-foreground-muted'>No commitment. Start exploring today.</span>
                    <Link href={"#pricing"} >
                        <button className='bg-primary hover:bg-primary-hover px-6 py-2 rounded-3xl cursor-pointer shadow hover:shadow-primary-glow active:scale-95 transition-all duration-300 ease-in-out text-foreground'>Get started</button>
                    </Link>
                </div>
             </div>
        </div>
    </section>
  )
}

export default Stats
