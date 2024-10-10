export function Hero() {
  return (
    <section className="relative">
      <div className="relative after:absolute after:inset-0 after:h-full after:w-full after:bg-black/50 desktop:w-fit">
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet="/assets/about/desktop/image-hero.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/about/tablet/image-hero.jpg"
          />
          <img
            className="min-h-[240px] w-full bg-black tablet:h-[720px] desktop:h-[720px] desktop:w-[635px]"
            src="/assets/about/mobile/image-hero.jpg"
            alt="Man using laptop"
          />
        </picture>
      </div>
      <div className="relative px-8 pt-5 after:absolute after:-top-[45px] after:left-0 after:h-[45px] after:w-[343px] after:bg-white tablet:ml-[58px] tablet:w-[572px] tablet:-translate-y-full tablet:bg-white tablet:px-[59px] tablet:pt-[73px] tablet:after:-top-[88px] tablet:after:h-[88px] tablet:after:w-[523px] desktop:ml-[482px] desktop:w-[793px] desktop:pl-[182px] desktop:pr-[165px] desktop:pt-[58px] desktop:after:-top-[160px] desktop:after:h-[160px]">
        <p className="absolute z-[99] hidden text-[120px] font-bold lowercase leading-[200px] tracking-[-3px] text-gray-100 first-letter:uppercase tablet:top-[-180px] tablet:block desktop:left-[-18px] desktop:top-[-248px] desktop:text-[200px] desktop:font-bold desktop:leading-[200px] desktop:tracking-[-5px] 2xl:text-3xl">
          About
        </p>
        <h2 className="max-w-[311px] pb-[21px] text-[48px] font-bold leading-[52px] tracking-[-1.71px] text-gray-900 tablet:max-w-[446px] tablet:pb-[38px] tablet:text-xl tablet:before:absolute tablet:before:left-[59px] tablet:before:top-0 tablet:before:h-[1px] tablet:before:w-[65px] tablet:before:bg-gray-300 desktop:pb-[49px] desktop:before:left-[182px]">
          Your team of professionals
        </h2>
        <p className="text-base text-gray-700">
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
      </div>
    </section>
  );
}
