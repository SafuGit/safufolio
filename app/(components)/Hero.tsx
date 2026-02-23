"use client";
import ProfileCard from "./Hero/ProfileCard";
import HeroCard from "./Hero/HeroCard";

const Hero = () => {
  return (
    <div className="relative flex items-center min-h-screen p-4 font-raleway pl-12 pr-12 bg-[linear-gradient(90deg,rgba(23,23,23,0.7),rgba(0,0,0,1)_55%,rgba(132,204,22,0.8)_87%)] overflow-visible">
      <div className="relative z-10 flex items-center w-full">
        <HeroCard />
        <ProfileCard
          name="Safwan Sadid"
          title="Software Engineer"
          handle="safugit"
          status="Online"
          contactText="Visit Github"
          avatarUrl="/avatar.png"
          showUserInfo
          enableTilt={true}
          onContactClick={() => window.open('https://github.com/safugit', '_blank')}
        />
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-36 pointer-events-none z-0 bg-linear-to-b from-transparent to-black/95" />
    </div>
  );
};

export default Hero;
