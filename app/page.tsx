import Hero from "@/app/(components)/Hero";
import FollowCursor from "./(components)/Mouse/FollowCursor";
import FadeIn from "./(components)/Animations/FadeIn";

export default function Home() {
  return (
    <div>
      <FollowCursor />
      <FadeIn>
        <Hero />
      </FadeIn>
    </div>
  );
}
