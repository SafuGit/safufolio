import Hero from "@/app/(components)/Hero";
import FollowCursor from "./(components)/Mouse/FollowCursor";
import FadeIn from "./(components)/Animations/FadeIn";
import Services from "./(components)/Services";

export default function Home() {
  return (
    <div>
      <FollowCursor />
      <FadeIn className="mb-12">
        <Hero />
      </FadeIn>
      <FadeIn className="mb-12">
        <Services />
      </FadeIn>
    </div>
  );
}
