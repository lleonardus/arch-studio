import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDraggin] = useState(false);
  const carouselRef = useRef(null);
  const maxIndex = 4;

  function handleMouseDown(e) {
    setIsDraggin(true);
    setStartX(e.pageX);
  }

  function handleMouseMove(e) {
    if (!isDragging) return;

    const diff = e.pageX - startX;

    if (diff > 50 && currentIndex > 0) {
      setCurrentIndex((index) => index - 1);
      setIsDraggin(false);
    } else if (diff < -50 && currentIndex < maxIndex - 1) {
      setCurrentIndex((index) => index + 1);
      setIsDraggin(false);
    }
  }

  function handleMouseUp() {
    setIsDraggin(false);
  }

  function handleTouchStart(e) {
    setStartX(e.touches[0].clientX);
  }

  function handleTouchMove(e) {
    const diff = e.touches[0].clientX - startX;

    if (diff > 50 && currentIndex > 0) {
      setCurrentIndex((index) => index - 1);
    } else if (diff < -50 && currentIndex < maxIndex - 1) {
      setCurrentIndex((index) => index + 1);
    }
  }

  return (
    <div className="relative tablet:pr-[98px]">
      <div className="absolute bottom-0 z-[10] hidden -translate-x-1/4 desktop:flex">
        <span
          className="absolute grid h-20 w-20 cursor-pointer place-items-center bg-gray-900 text-base text-white transition-transform duration-300"
          style={{ transform: `translateX(${currentIndex * 100}%)` }}
        >
          0{currentIndex + 1}
        </span>
        {Array.from({ length: maxIndex }).map((_, id) => {
          return (
            <button
              key={id}
              onClick={() => setCurrentIndex(id)}
              className={`h-20 w-20 bg-white text-base text-gray-600 hover:bg-gray-100`}
            >
              0{id + 1}
            </button>
          );
        })}
      </div>
      <ul
        className="flex cursor-pointer overflow-hidden *:w-full *:shrink-0"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <li
          className="relative space-y-[83px] bg-[url('/assets/home/mobile/image-hero-paramour.jpg')] bg-cover bg-no-repeat px-8 pb-[110px] pt-[116px] text-white transition-transform duration-300 ease-in-out after:absolute after:inset-0 after:bg-black/40 tablet:space-y-[41px] tablet:bg-[url('/assets/home/tablet/image-hero-paramour.jpg')] tablet:px-[58px] tablet:pb-[179px] tablet:pt-[186px] desktop:bg-[url('/assets/home/desktop/image-hero-paramour.jpg')] desktop:pb-[179px] desktop:pl-[190px] desktop:pr-[376px] desktop:pt-[186px]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
          <Link
            to="/portfolio"
            className="relative z-[2] flex w-fit items-center gap-[24px] bg-gray-900 pb-[22px] pl-[37px] pr-[32px] pt-[25px] capitalize text-white"
          >
            <span>See Our Portfolio</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" />
                </g>
              </svg>
            </span>
          </Link>
        </li>
        <li
          className="relative space-y-[83px] bg-[url('/assets/home/mobile/image-hero-seraph.jpg')] bg-cover bg-no-repeat px-8 pb-[110px] pt-[116px] text-white transition-transform duration-300 ease-in-out after:absolute after:inset-0 after:bg-black/40 tablet:space-y-[41px] tablet:bg-[url('/assets/home/tablet/image-hero-seraph.jpg')] tablet:px-[58px] tablet:pb-[179px] tablet:pt-[186px] desktop:bg-[url('/assets/home/desktop/image-hero-seraph.jpg')] desktop:pb-[179px] desktop:pl-[190px] desktop:pr-[376px] desktop:pt-[186px]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
          <Link
            to="/portfolio"
            className="relative z-[2] flex w-fit items-center gap-[24px] bg-gray-900 pb-[22px] pl-[37px] pr-[32px] pt-[25px] capitalize text-white"
          >
            <span>See Our Portfolio</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" />
                </g>
              </svg>
            </span>
          </Link>
        </li>
        <li
          className="relative space-y-[83px] bg-[url('/assets/home/mobile/image-hero-federal.jpg')] bg-cover bg-no-repeat px-8 pb-[110px] pt-[116px] text-white transition-transform duration-300 ease-in-out after:absolute after:inset-0 after:bg-black/40 tablet:space-y-[41px] tablet:bg-[url('/assets/home/tablet/image-hero-federal.jpg')] tablet:px-[58px] tablet:pb-[179px] tablet:pt-[186px] desktop:bg-[url('/assets/home/desktop/image-hero-federal.jpg')] desktop:pb-[179px] desktop:pl-[190px] desktop:pr-[376px] desktop:pt-[186px]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="relative z-[2] space-y-[11px]">
            <h1 className="max-w-[100px] text-[48px] font-bold leading-[48px] tracking-[-1.2px] tablet:text-2xl">
              Federal II Tower
            </h1>
            <p className="max-w-[450px] text-base">
              A sequel theme project for a tower originally built in the 1800s.
              We achieved this with a striking look of brutal minimalism with
              modern touches.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="relative z-[2] flex w-fit items-center gap-[24px] bg-gray-900 pb-[22px] pl-[37px] pr-[32px] pt-[25px] capitalize text-white"
          >
            <span>See Our Portfolio</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" />
                </g>
              </svg>
            </span>
          </Link>
        </li>
        <li
          className="relative space-y-[83px] bg-[url('/assets/home/mobile/image-hero-trinity.jpg')] bg-cover bg-no-repeat px-8 pb-[110px] pt-[116px] text-white transition-transform duration-300 ease-in-out after:absolute after:inset-0 after:bg-black/40 tablet:space-y-[41px] tablet:bg-[url('/assets/home/tablet/image-hero-trinity.jpg')] tablet:px-[58px] tablet:pb-[179px] tablet:pt-[186px] desktop:bg-[url('/assets/home/desktop/image-hero-trinity.jpg')] desktop:pb-[179px] desktop:pl-[190px] desktop:pr-[376px] desktop:pt-[186px]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="relative z-[2] space-y-[11px]">
            <h1 className="max-w-[100px] text-[48px] font-bold leading-[48px] tracking-[-1.2px] tablet:text-2xl">
              Trinity Bank Tower
            </h1>
            <p className="max-w-[450px] text-base">
              Trinity Bank challenged us to make a concept for a 84 story
              building located in the middle of a city with a high earthquake
              frequency. For this project we used curves to blend design and
              stability to meet our objectives.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="relative z-[2] flex w-fit items-center gap-[24px] bg-gray-900 pb-[22px] pl-[37px] pr-[32px] pt-[25px] capitalize text-white"
          >
            <span>See Our Portfolio</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M15 1l9 9-9 9M0 10h24" />
                </g>
              </svg>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
