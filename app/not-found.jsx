"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  const stars = Array.from({ length: 40 });

  return (
    <div className="min-h-screen bg-[#0B041A] flex flex-col items-center justify-center relative overflow-hidden">
      
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 3 + 1 + "px",
            height: Math.random() * 3 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            opacity: [0.1, 1, 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet-600/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80 mb-6 flex items-center justify-center"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_25px_rgba(139,92,246,0.5)]">
            <motion.circle 
              cx="100" cy="100" r="55" 
              fill="#4c1d95" 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {}
            <circle cx="100" cy="100" r="80" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="10 10" opacity="0.4" />
            <motion.path 
              d="M 15 100 Q 100 15 185 100" 
              fill="none" 
              stroke="#a78bfa" 
              strokeWidth="3"
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.path 
              d="M 15 100 Q 100 185 185 100" 
              fill="none" 
              stroke="#a78bfa" 
              strokeWidth="3"
              animate={{ opacity: [0.8, 0.3, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          
            <text x="50%" y="54%" textAnchor="middle" fill="#ddd6fe" fontSize="38" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">
              404
            </text>
          </svg>

          {/* Orbiting Moon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="w-5 h-5 bg-violet-200 rounded-full absolute top-2 left-1/2 shadow-[0_0_15px_rgba(221,214,254,0.9)]" />
          </motion.div>
        </motion.div>

    
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-violet-400 tracking-tight mb-4 drop-shadow-sm">
            
          </h1>
          
          <p className="text-base md:text-lg text-violet-300/80 max-w-md mx-auto font-medium mb-10">
            
          </p>

          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-violet-950 bg-violet-300 rounded-full transition-all hover:bg-violet-100 shadow-[0_0_20px_rgba(167,139,250,0.3)] hover:shadow-[0_0_35px_rgba(167,139,250,0.6)]"
            >
              Home
            </Link>
          </motion.div>
        </motion.div>
        
      </div>
    </div>
  );
}