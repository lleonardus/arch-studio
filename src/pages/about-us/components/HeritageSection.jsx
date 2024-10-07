export function HeritageSection() {
  return (
    <section className="mt-[76px] px-8 tablet:mt-[-135px] tablet:px-0 desktop:flex desktop:shrink-0 desktop:items-start desktop:gap-[125px] desktop:pr-0">
      <div className="relative pt-[69px] before:absolute before:left-0 before:top-0 before:h-[1px] before:w-[65px] before:bg-gray-300 tablet:pt-[49px] desktop:max-w-[446px] desktop:pt-[83px]">
        <h2 className="max-w-[111px] text-[48px] font-bold leading-[52px] tracking-[-1.71px] text-gray-900 tablet:text-xl">
          Our Heritage
        </h2>
        <div className="space-y-[35px] pt-[22px] text-base text-gray-700 tablet:space-y-9 tablet:pt-[43px]">
          <p>
            Founded in 2007, we started as a trio of architects. Our
            complimentary skills and relentless attention to detail turned Arch
            into one of the most sought after boutique firms in the country.
          </p>
          <p>
            Speciliazing in Urban Design allowed us to focus on creating
            exceptional structures that live in harmony with their surroundings.
            We consider every detail from every surrounding element to inform
            our designs.
          </p>
          <p>
            Our small team of world-class professionals provides input on every
            project.
          </p>
        </div>
      </div>
      <div className="float-right ml-auto hidden h-[568px] w-[540px] shrink-0 desktop:block">
        <img
          className="h-full w-full"
          src="/assets/about/desktop/image-heritage.jpg"
          alt="Heritage image"
        />
      </div>
    </section>
  );
}
