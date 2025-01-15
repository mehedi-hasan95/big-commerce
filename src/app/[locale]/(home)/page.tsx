import { HomeCard } from "./_components/home-card";
import { HomeCarousel } from "./_components/home-carousel";
export default async function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <HomeCarousel />
      <div className="container_this py-5">
        <HomeCard />
      </div>
    </main>
  );
}
