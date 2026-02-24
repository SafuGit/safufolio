"use client";
import ProfileCard from "./Hero/ProfileCard";
import HeroCard from "./Hero/HeroCard";

const Hero = () => {
  return (
    <div className="relative flex items-center min-h-screen p-4 font-raleway pl-12 pr-12 bg-[linear-gradient(90deg,rgba(23,23,23,0.7),rgba(0,0,0,1)_55%,rgba(132,204,22,0.8)_87%)] overflow-visible">
      <div className="relative z-10 flex items-center w-full">
        <div className="flex flex-col gap-3">
          <div className="flex-1 mr-8 relative p-8 rounded-2xl bg-linear-to-br from-lime-500/20 via-green-500/10 to-emerald-500/5 backdrop-blur-sm border border-lime-500/30 shadow-[0_0_40px_rgba(132,204,22,0.3),inset_0_0_20px_rgba(132,204,22,0.1)] hover:shadow-[0_0_60px_rgba(132,204,22,0.5),inset_0_0_30px_rgba(132,204,22,0.2)] transition-all duration-300">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-bold text-accent drop-shadow-[0_0_10px_rgba(132,204,22,0.5)]">
                The Only Developer you need.
              </h1>
            </div>
          </div>
          <HeroCard />
        </div>
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
