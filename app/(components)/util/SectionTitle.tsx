"use client";
import { motion } from "framer-motion";

const SectionTitle = ({
  text = "",
  className = "",
  gradient = true,
  animate = true,
}) => {
  const titleClasses = `
    text-4xl sm:text-5xl md:text-6xl lg:text-7xl
    font-extralight
    tracking-tight
    ${gradient ? "bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-highlight" : "text-primary"}
    ${className}
  `;

  return animate ? (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={titleClasses}
    >
      {text}
    </motion.h2>
  ) : (
    <h2 className={titleClasses}>{text}</h2>
  );
};

export default SectionTitle;