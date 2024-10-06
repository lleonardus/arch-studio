import { Link } from "react-router-dom";

export function AboutUsSection() {
  return (
    <section className="relative z-[1] mt-[113px] space-y-[23px] bg-black bg-[url('/assets/home/mobile/image-small-team.jpg')] bg-cover bg-no-repeat px-8 py-[180px] after:absolute after:inset-0 after:bg-black/60 tablet:mr-[98px] tablet:mt-[233px] tablet:space-y-10 tablet:bg-[url('/assets/home/tablet/image-small-team.jpg')] tablet:py-[168px] tablet:pl-[58px] tablet:pr-[70px] desktop:mt-[200px] desktop:space-y-10 desktop:bg-[url('/assets/home/desktop/image-small-team.jpg')] desktop:py-[168px] desktop:pl-[190px]">
      <h3 className="relative z-[2] max-w-[250px] text-[48px] font-bold leading-[52px] tracking-[-1.71px] text-white tablet:max-w-[400px] tablet:text-xl">
        Small team, big ideas
      </h3>
      <Link
        to="/about-us"
        className="relative z-[2] flex w-fit items-center gap-[24px] bg-gray-900 pb-[22px] pl-[37px] pr-[32px] pt-[25px] text-base font-bold capitalize text-white transition-colors hover:bg-gray-700"
      >
        <span>About Us</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
            <g fill="none" fillRule="evenodd" stroke="white" strokeWidth="2">
              <path d="M15 1l9 9-9 9M0 10h24" />
            </g>
          </svg>
        </span>
      </Link>
    </section>
  );
}
