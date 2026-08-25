"use client"
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react'


export const AnimateValue = ({value}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once:true });

    const numericValue = parseInt(value, 10) || 0 ;


    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest))

    useEffect(() => {
        if(isInView){
            const controls = animate(count, numericValue, { duration : 2,  ease : "easeOut"});
            return controls.stop;
        }
    }, [isInView, numericValue, count])


  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
    </span>
  )
}


