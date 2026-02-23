"use client";
import ProfileCard from "./Hero/ProfileCard";
import HeroCard from "./Hero/HeroCard";

const Hero = () => {
  return (
    <div className="flex items-center min-h-screen p-4 font-raleway pl-12 pr-12">
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
