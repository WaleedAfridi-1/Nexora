"use client"
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntegrationCard from './ui/IntegrationCard'
import { integrations } from './ui/IntegrationItems'

const CATEGORIES = [
  'All',
  'Build & Automate',
  'Project Management',
  'Communication',
  'Payments',
] as const

const IntegrationFeature = () => {
  const [category, setCategory] = useState<string>('All')
  const [integration, setIntegration] = useState(integrations)
  const sectionRef = useRef<HTMLElement>(null)

  const filteredIntegration =
    category === 'All' ? integration : integrations.filter((item) => item.category === category)

  const handleCategoryChange = (tab: string) => {
    setCategory(tab)

    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    })
  }

  return (
    <section
      ref={sectionRef}
      id='integration'
      className='bg-primary-glow/5 py-20 px-4 md:px-8  mb-30 space-y-6'
    >


      {/* Tabs */}
      <div className='text-xs flex gap-8 overflow-auto px-4 md:px-8 lg:justify-center  scrollbar-none'>
        {CATEGORIES.map((tab) => (
          <button
            key={tab}
            onClick={() => handleCategoryChange(tab)}
            className={`${
              category === tab ? 'bg-primary text-foreground' : 'text-foreground-muted bg-card'
            } whitespace-nowrap px-6 py-2 rounded-3xl border border-border-light font-mono font-medium cursor-pointer text-foreground`}
          >
            {tab}
          </button>
        ))}
      </div>


      <motion.div
        layout
        transition={{ layout: { duration: 0.35, ease: 'easeInOut' } }}
        className='w-full px-10 md:px-2 py-6 mt-8 gap-y-10 gap-x-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      >
        <AnimatePresence mode='popLayout'>
          {filteredIntegration.map((card) => (
            <motion.div
              layout
              key={`${card.category}-${card.name}`}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <IntegrationCard
                name={card.name}
                description={card.description}
                category={card.category}
                bgColor={card.brandColor}
                Icon={card.icon}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default IntegrationFeature