import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen container mx-auto px-6 xl:max-w-screen-3xl py-5">
      <Header />
      <main className="flex-1 flex flex-col">Home</main>
      <Footer />
    </div>
  );
}
