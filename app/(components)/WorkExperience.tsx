import React from "react";
import SectionTitle from "./util/SectionTitle";

const items = [
  {
    id: 1,
    url: "https://stepnextgenai.com/icon.png",
    // url: "/stepnextgenai.png",
    title: "StepNextGenAI",
    description: "Hi",
  },
];

const WorkExperience = () => {
  return (
    <div className="flex flex-col items-center p-4 font-raleway pl-12 pr-12 justify-center">
      <SectionTitle text="My Work Experience" className="text-center" />
      <div className="flex gap-4 max-w-5xl mx-auto h-full justify-center items-center">
        
      </div>
    </div>
  );
};

export default WorkExperience;
