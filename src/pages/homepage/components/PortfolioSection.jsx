import { Link } from "react-router-dom";

export function PortfolioSection() {
  return (
    <section className="mt-[73px] px-8 tablet:mt-[200px] tablet:px-0 tablet:pr-[98px]">
      <div className="grid tablet:grid-cols-2">
        <h2 className="text-[48px] font-bold leading-[52px] tracking-[-1.71px] text-gray-900 tablet:max-w-[400px] tablet:text-xl">
          Featured
        </h2>
        <ul className="mb-6 mt-[43px] flex flex-col gap-6 tablet:col-span-2 tablet:mb-0 tablet:mt-[85px] desktop:mt-16 desktop:flex-row *:desktop:w-full">
          <li className="relative z-[1] bg-[url('/assets/portfolio/mobile/image-del-sol.jpg')] bg-cover bg-no-repeat pb-[23px] pl-6 pt-[153px] after:absolute after:inset-0 after:bg-black/60 tablet:bg-[url('/assets/portfolio/tablet/image-del-sol.jpg')] tablet:pb-[39px] tablet:pl-10 tablet:pt-[137px] desktop:bg-[url('/assets/portfolio/desktop/image-del-sol.jpg')] desktop:pb-[39px] desktop:pl-10 desktop:pt-[457px]">
            <span className="absolute right-4 top-[29px] z-[2] hidden text-3xl text-white/50 tablet:inline-block desktop:-right-3 desktop:top-[45px]">
              1
            </span>
            <h3 className="relative z-[2] text-lg text-white">
              Project Del Sol
            </h3>
            <Link
              to="/portfolio"
              className="relative z-[2] text-base text-white/75 hover:underline"
            >
              View All Projects
            </Link>
          </li>
          <li className="relative z-[1] bg-[url('/assets/portfolio/mobile/image-228b.jpg')] bg-cover bg-no-repeat pb-[23px] pl-6 pt-[153px] after:absolute after:inset-0 after:bg-black/60 tablet:bg-[url('/assets/portfolio/tablet/image-228b.jpg')] tablet:pb-[39px] tablet:pl-10 tablet:pt-[137px] desktop:bg-[url('/assets/portfolio/desktop/image-228b.jpg')] desktop:pb-[39px] desktop:pl-10 desktop:pt-[457px]">
            <span className="absolute right-4 top-[29px] z-[2] hidden text-3xl text-white/50 tablet:inline-block desktop:-right-3 desktop:top-[45px]">
              2
            </span>
            <h3 className="relative z-[2] text-lg text-white">228B Tower</h3>
            <Link
              to="/portfolio"
              className="relative z-[2] text-base text-white/75 hover:underline"
            >
              View All Projects
            </Link>
          </li>
          <li className="relative z-[1] bg-[url('/assets/portfolio/mobile/image-prototype.jpg')] bg-cover bg-no-repeat pb-[23px] pl-6 pt-[153px] after:absolute after:inset-0 after:bg-black/60 tablet:bg-[url('/assets/portfolio/tablet/image-prototype.jpg')] tablet:pb-[39px] tablet:pl-10 tablet:pt-[137px] desktop:bg-[url('/assets/portfolio/desktop/image-prototype.jpg')] desktop:pb-[39px] desktop:pl-10 desktop:pt-[457px]">
            <span className="absolute right-4 top-[29px] z-[2] hidden text-3xl text-white/50 tablet:inline-block desktop:-right-3 desktop:top-[45px]">
              3
            </span>
            <h3 className="relative z-[2] text-lg text-white">Le Prototype</h3>
            <Link
              to="/portfolio"
              className="relative z-[2] text-base text-white/75 hover:underline"
            >
              View All Projects
            </Link>
          </li>
        </ul>
        <span className="*:float-right tablet:col-start-2 tablet:row-start-1">
          <Link
            to="/portfolio"
            className="relative z-[2] flex w-full items-center justify-center gap-[24px] bg-gray-900 pb-[22px] pl-[37px] pr-[32px] pt-[25px] text-base font-bold capitalize text-white transition-colors hover:bg-gray-700 tablet:w-fit"
          >
            <span>See All</span>
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
        </span>
      </div>
    </section>
  );
}
