"use client";
import React from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  y?: number;
  className?: string;
}

const FadeIn = ({
  children,
  duration = 0.8,
  delay = 0,
  y = 30,
  className = "",
}: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;