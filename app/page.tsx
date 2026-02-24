import Hero from "@/app/(components)/Hero";
import FollowCursor from "./(components)/Mouse/FollowCursor";
import FadeIn from "./(components)/Animations/FadeIn";
import Services from "./(components)/Services";
import WorkExperience from "./(components)/WorkExperience";

export default function Home() {
  return (
    <div>
      <FollowCursor />
      <FadeIn className="mb-24">
        <Hero />
      </FadeIn>
      <FadeIn className="mb-24">
        <Services />
      </FadeIn>
      <FadeIn className="mb-24">
        <WorkExperience />
      </FadeIn>
    </div>
  );
}
