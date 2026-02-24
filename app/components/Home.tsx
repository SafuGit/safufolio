'use client';

import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen w-full flex font-poppins">
      {/* Left Section - Dark */}
      <motion.div 
        className="w-1/2 bg-black flex flex-col justify-center items-start px-16 relative"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Border Animation */}
        <motion.div
          className="absolute inset-4 border-2 border-white/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        <div className="z-10">
          {/* Name */}
          <motion.h1 
            className="text-white font-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.span 
              className="text-6xl block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Safwan
            </motion.span>
            <motion.span 
              className="text-6xl block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Sadid
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-white text-lg font-light max-w-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Turning your ideas into<br />polished digital experiences.
          </motion.p>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <ChevronDown className="text-white" size={40} strokeWidth={1} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div 
        className="w-1/2 relative overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/hero-image.jpeg"
            alt="Portfolio Image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>
    </div>
  );
}