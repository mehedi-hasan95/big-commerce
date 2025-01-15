"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";
export const HomeCarousel = () => {
  const t = useTranslations("Home");
  return (
    <div className="container_this">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnMouseEnter: true,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Link href={"#"}>
              <div className="flex aspect-[16/6] items-center justify-center p-6 relative -m-1">
                <Image
                  src={"/img1.jpg"}
                  alt="Image"
                  fill
                  className="object-cover"
                />
                <div className="absolute w-1/3 left-16 md:left-32 top-1/2 transform -translate-y-1/2">
                  <h2
                    className={cn(
                      "text-xl md:text-6xl font-bold mb-4 text-primary"
                    )}
                  >
                    Lorem ipsum dolor sit amet.
                  </h2>
                  <Button className="hidden md:block">{t("Buy Now")}</Button>
                </div>
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem>
            <Link href={"#"}>
              <div className="flex aspect-[16/6] items-center justify-center p-6 relative -m-1">
                <Image
                  src={"/img2.jpg"}
                  alt="Image"
                  fill
                  className="object-cover"
                />
                <div className="absolute w-1/3 left-16 md:left-32 top-1/2 transform -translate-y-1/2">
                  <h2
                    className={cn(
                      "text-xl md:text-6xl font-bold mb-4 text-primary  "
                    )}
                  >
                    Lorem ipsum dolor sit amet.
                  </h2>
                  <Button className="hidden md:block">Buy Now</Button>
                </div>
              </div>
            </Link>
          </CarouselItem>
          <CarouselItem>
            <Link href={"#"}>
              <div className="flex aspect-[16/6] items-center justify-center p-6 relative -m-1">
                <Image
                  src={"/img3.jpg"}
                  alt="Image"
                  fill
                  className="object-cover"
                />
                <div className="absolute w-1/3 left-16 md:left-32 top-1/2 transform -translate-y-1/2">
                  <h2
                    className={cn(
                      "text-xl md:text-6xl font-bold mb-4 text-primary  "
                    )}
                  >
                    Lorem ipsum dolor sit amet.
                  </h2>
                  <Button className="hidden md:block">Buy Now</Button>
                </div>
              </div>
            </Link>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
