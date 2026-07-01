import Hero from "@/components/Home/Hero";
import FeaturedPost from "@/components/Home/FeaturedPost";
import LatestPosts from "@/components/Home/LatestPosts";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <FeaturedPost />

      <LatestPosts />
    </main>
  );
}
