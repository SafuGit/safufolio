import Hero from "@/app/(components)/Hero";
import FollowCursor from "./(components)/Mouse/FollowCursor";

export default function Home() {
  return (
    <div>
      <FollowCursor />
      <Hero />
    </div>
  );
}
