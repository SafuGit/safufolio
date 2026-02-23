import ButtonCreativeRight from '@/app/(ui-layouts)/ButtonCreativeRight';
import React from 'react';

const HeroCard = () => {  
  return (
    <div className="flex-1 mr-8">
      <div
        className="w-full rounded-3xl p-8 md:p-12 bg-linear-to-r from-primary to-accent border border-primary/40"
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-extralight leading-tight mb-4"
        >
          Turning Ideas Into Polished Digital Experiences.
        </h1>
        <div className='flex gap-2'>
          <ButtonCreativeRight />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;