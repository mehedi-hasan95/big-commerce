import { HomeCard } from "./_components/home-card";
import { HomeCarousel } from "./_components/home-carousel";
import { getTranslations } from "next-intl/server";
export default async function Home() {
  const t = await getTranslations("Home");
  return (
    <main className="flex-1 flex flex-col">
      <HomeCarousel />

      <div className="container_this py-5">
        <HomeCard />
      </div>
    </main>
  );
}
