import { useState } from "react";
import { Carousel } from "./Carousel";
import { CarouselItem } from "./CarouselItem";
import { Link } from "react-router-dom";
import { CarouselPagination } from "./CarouselPagination";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = 4;

  return (
    <section className="relative tablet:pr-[98px]">
      <Carousel
        maxIndex={maxIndex}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      >
        <CarouselItem
          currentIndex={currentIndex}
          backgroundImage="bg-[url('/assets/home/mobile/image-hero-paramour.jpg')] tablet:bg-[url('/assets/home/tablet/image-hero-paramour.jpg')] desktop:bg-[url('/assets/home/desktop/image-hero-paramour.jpg')]"
        >
          <div className="relative z-[2] space-y-[11px]">
            <h1 className="max-w-[100px] text-[48px] font-bold leading-[48px] tracking-[-1.2px] tablet:text-2xl">
              Project Paramour
            </h1>
            <p className="max-w-[450px] text-base">
              Project made for an art museum near Southwest London. Project
              Paramour is a statement of bold, modern architecture.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem
          currentIndex={currentIndex}
          backgroundImage="bg-[url('/assets/home/mobile/image-hero-seraph.jpg')] tablet:bg-[url('/assets/home/tablet/image-hero-seraph.jpg')] desktop:bg-[url('/assets/home/desktop/image-hero-seraph.jpg')]"
        >
          <div className="relative z-[2] space-y-[11px]">
            <h1 className="max-w-[100px] text-[48px] font-bold leading-[48px] tracking-[-1.2px] tablet:text-2xl">
              Seraph Station
            </h1>
            <p className="max-w-[450px] text-base">
              The Seraph Station project challenged us to design a unique
              station that would transport people through time. The result is a
              fresh and futuristic model inspired by space stations.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem
          currentIndex={currentIndex}
          backgroundImage="bg-[url('/assets/home/mobile/image-hero-federal.jpg')] tablet:bg-[url('/assets/home/tablet/image-hero-federal.jpg')] desktop:bg-[url('/assets/home/desktop/image-hero-federal.jpg')]"
        >
          <div className="relative z-[2] space-y-[11px]">
            <h1 className="max-w-[300px] text-[48px] font-bold leading-[48px] tracking-[-1.2px] tablet:max-w-none tablet:text-2xl">
              Federal II Tower
            </h1>
            <p className="max-w-[450px] text-base">
              A sequel theme project for a tower originally built in the 1800s.
              We achieved this with a striking look of brutal minimalism with
              modern touches.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem
          currentIndex={currentIndex}
          backgroundImage="bg-[url('/assets/home/mobile/image-hero-trinity.jpg')] tablet:bg-[url('/assets/home/tablet/image-hero-trinity.jpg')] desktop:bg-[url('/assets/home/desktop/image-hero-trinity.jpg')]"
        >
          <div className="relative z-[2] space-y-[11px]">
            <h1 className="max-w-[300px] text-[48px] font-bold leading-[48px] tracking-[-1.2px] tablet:max-w-none tablet:text-2xl">
              Trinity Bank Tower
            </h1>
            <p className="max-w-[450px] text-base">
              Trinity Bank challenged us to make a concept for a 84 story
              building located in the middle of a city with a high earthquake
              frequency. For this project we used curves to blend design and
              stability to meet our objectives.
            </p>
          </div>
        </CarouselItem>
      </Carousel>
      <Link
        to="/portfolio"
        className="absolute bottom-[110px] left-8 z-[2] flex w-fit items-center gap-[24px] bg-gray-900 pb-[22px] pl-[37px] pr-[32px] pt-[25px] text-base font-bold capitalize text-white transition-colors hover:bg-gray-700 tablet:bottom-[179px] tablet:left-[58px] desktop:bottom-[179px] desktop:left-[190px]"
      >
        <span>See Our Portfolio</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
            <g fill="none" fillRule="evenodd" stroke="white" strokeWidth="2">
              <path d="M15 1l9 9-9 9M0 10h24" />
            </g>
          </svg>
        </span>
      </Link>
      <CarouselPagination
        maxIndex={maxIndex}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </section>
  );
}
