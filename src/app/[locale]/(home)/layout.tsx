import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { SeconderyMenu } from "@/components/common/secondery-menu/secondery-menu";

const HomeLaout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SeconderyMenu />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLaout;
