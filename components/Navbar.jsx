"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { HiMenu, HiOutlineX,HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        closed: {
            y: "-100%",
            opacity: 0,
            transition: {
                duration: 0.4,
                ease: [0.32, 0.72, 0, 1],
                when: "afterChildren" 
            }
        },
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: [0.32, 0.72, 0, 1],
                staggerChildren: 0.06,
                delayChildren: 0.1   
            }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, y: -10 },
        open: { opacity: 1, y: 0, transition: { duration: 0.25 } }
    };

  return (
    <header className="fixed w-full z-999 bg-background/70 ">
      <nav className={`${isOpen ? "border-none ": "border-b "} backdrop-blur-md border-border transition-all duration-500 ease-in-out mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-5`}>

        {/* Logo */}
        <div className='flex items-center gap-1.5 h-full text-foreground'>
            <Link href={"/"} className='flex items-center gap-2'>
              <div className='relative w-7 h-7 rounded-full cursor-pointer overflow-hidden'>
                  <Image className='object-cover object-center'
                  src={"/logo.png"}
                  alt='Nexora Logo'
                  fill
                  />
              </div>
              <h5 className='text-sm md:text-lg lg:text-xl hover:text-accent transition-all duration-400 font-semibold tracking-tight'>
                Nexora<span className='ml-1.5 text-primary'>.</span>
              </h5>
            </Link>
        </div>

        {/* Mobile Menu Icon */}
        <motion.div className='block lg:hidden text-2xl cursor-pointer'
        key={isOpen ? "close" : "open"}
        initial={{rotate : isOpen ? 90 : -90, opacity : 0}}
        animate={{rotate: 0, opacity : 1}}
        transition={{duration : 0.4}}
        onClick={() => setIsOpen(prev => !prev)}
        >
            {isOpen ? (
                <HiOutlineX
                  className='active:scale-95 transition-all duration-500'
                />
            ) : (
                <HiMenu
                  className='active:scale-95 transition-all duration-500'
                />
            )}
        </motion.div>

        {/* Desktop Navigation */}
        <div className='bg-background/70 backdrop-blur-md  border border-border-light shadow-2xl space-x-16 hidden lg:block px-6 p-3 rounded-3xl'>
            <Link className='text-sm text-foreground-secondary hover:text-foreground transition-colors duration-300' href={'#product'}>Product</Link>
            <Link className='text-sm text-foreground-secondary hover:text-foreground transition-colors duration-300' href={'#feature'}>Feature</Link>
            <Link className='text-sm text-foreground-secondary hover:text-foreground transition-colors duration-300' href={'#integration'}>Integration</Link>
            <Link className='text-sm text-foreground-secondary hover:text-foreground transition-colors duration-300' href={'#resources'}>Resources</Link>
            <Link className='text-sm text-foreground-secondary hover:text-foreground transition-colors duration-300' href={'#pricing'}>Pricing</Link>
        </div>

        <div className='hidden lg:block'>
            <Link href={"#contact"}>
                <button className='px-6 py-2 rounded-3xl shadow border border-border-light cursor-pointer bg-primary hover:bg-primary-hover text-sm text-foreground transition-all duration-300 font-semibold tracking-normal'>
                  Contact
                </button>
            </Link>
        </div>
      </nav>

      {/* Mobile  Dropdown Menu */}
      <AnimatePresence>
         {isOpen && (
             <motion.div 
               variants={menuVariants}
               initial="closed"
               animate="open"
               exit="closed"
               className='absolute top-full left-0 w-full bg-background border-b border-border shadow-2xl flex flex-col gap-6 px-6 py-8 text-sm md:text-lg text-foreground-secondary lg:hidden -z-10'
             >
                 <motion.div variants={linkVariants}>
                   <Link href="#product" onClick={() => setIsOpen(false)} className="block hover:text-foreground">Product</Link>
                 </motion.div>

                 <motion.div variants={linkVariants}>
                   <Link href="#feature" onClick={() => setIsOpen(false)} className="block hover:text-foreground">Feature</Link>
                 </motion.div>

                 <motion.div variants={linkVariants}>
                   <Link href="#integration" onClick={() => setIsOpen(false)} className="block hover:text-foreground">Integration</Link>
                 </motion.div>

                 <motion.div variants={linkVariants}>
                   <Link href="#resources" onClick={() => setIsOpen(false)} className="block hover:text-foreground">Resources</Link>
                 </motion.div>

                 <motion.div variants={linkVariants}>
                   <Link href="#pricing" onClick={() => setIsOpen(false)} className="block hover:text-foreground">Pricing</Link>
                 </motion.div>

                 <motion.div variants={linkVariants}>
                   <Link href="#contact" onClick={() => setIsOpen(false)} className='block w-full'>
                       <button className='w-full shadow px-6 py-2.5 bg-primary text-foreground font-semibold rounded-2xl'>Contact</button>
                   </Link>
                 </motion.div>
             </motion.div>
         )} 
      </AnimatePresence>
    </header>
  )
}

export default Navbar