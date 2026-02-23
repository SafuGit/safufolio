"use client";
import SectionTitle from "./util/SectionTitle";
import MagicBento from "../(reactbits)/Bento";
import Earth from "../(ui-layouts)/Globe";

const Services = () => {
  return (
    <div className="flex flex-col items-start p-4 font-raleway pl-12 pr-12">
      <SectionTitle text="Services I Offer" />
      <div className="flex mt-8 gap-2">
        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={630}
          particleCount={12}
          glowColor="163, 230, 53"
          disableAnimations={false}
        />
        <Earth
          scale={2}
        />
      </div>
    </div>
  );
};

export default Services;
