import ButtonCreativeRight from "@/app/(ui-layouts)/ButtonCreativeRight";
import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";

const HeroCard = () => {
  return (
    <div className="flex-1 mr-8">
      <div
        className="w-full rounded-3xl p-8 md:p-12 bg-linear-to-r from-primary to-accent border border-primary/40 relative before:absolute before:top-0 before:left-0 before:w-full
     before:h-full before:content-[''] before:opacity-[0.05] before:z-10 before:pointer-events-none
     before:bg-[url('https://www.ui-layouts.com/noise.gif')]"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight mb-4">
          Turning Ideas Into Polished Digital Experiences.
        </h1>
        <div className="flex items-center gap-3">
          <ButtonCreativeRight />

          <a
            href="https://github.com/safugit"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative cursor-pointer p-2 w-12 h-12 rounded-full hover:scale-[1.03] transition-colors flex items-center justify-center border border-white/6 hover:border-white/20 bg-main"
          >
            <FaGithub className="w-5 h-5 text-white" />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative cursor-pointer p-2 w-12 h-12 rounded-full bg-linear-to-br from-indigo-600 to-purple-600 hover:scale-[1.03] transition-transform flex items-center justify-center shadow-md"
          >
            <FaDiscord className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
