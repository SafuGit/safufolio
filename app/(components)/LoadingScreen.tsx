"use client";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    // Start exit animation after 2 seconds
    const exitTimer = setTimeout(() => {
      setIsAnimatingOut(true);
    }, 2000);

    // Hide completely after animation finishes
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-all duration-1000 px-4 ${
        isAnimatingOut ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      <div className="relative max-w-full overflow-hidden">
        {/* Main name text with gradient and glow */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-lime-400 via-green-400 to-emerald-400 animate-[fadeInUp_0.8s_ease-out_forwards] text-center wrap-break-word">
          Safwan Sadid
        </h1>
        
        {/* Glowing underline animation */}
        <div className="absolute -bottom-2 sm:-bottom-3 md:-bottom-4 left-0 right-0 h-0.5 sm:h-1 bg-linear-to-r from-transparent via-lime-400 to-transparent animate-[shimmer_2s_ease-in-out_infinite,fadeIn_0.5s_ease-out_0.8s_forwards] opacity-0" />
        
        {/* Animated dots */}
        <div className="flex gap-1.5 sm:gap-2 justify-center mt-6 sm:mt-8 animate-[fadeIn_0.5s_ease-out_1s_forwards] opacity-0">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-lime-400 animate-[bounce_1s_ease-in-out_infinite]" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400 animate-[bounce_1s_ease-in-out_0.2s_infinite]" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-400 animate-[bounce_1s_ease-in-out_0.4s_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-100%);
          }
          50% {
            opacity: 1;
            transform: translateX(100%);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
