"use client";
import ProfileCard from "./Hero/ProfileCard";
import HeroCard from "./Hero/HeroCard";

const Hero = () => {
  return (
    <div className="flex items-center min-h-screen p-4 font-raleway pl-12 pr-12 bg-[linear-gradient(90deg,rgba(23,23,23,0.7),rgba(0,0,0,1)_55%,rgba(132,204,22,0.8)_87%)]">
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
  );
};

export default Hero;
