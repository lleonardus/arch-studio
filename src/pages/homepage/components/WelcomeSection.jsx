export function WelcomeSection() {
  return (
    <section className="relative px-8 pt-[72px] tablet:mr-[98px] tablet:pt-[248px] desktop:flex desktop:shrink-0 desktop:items-end desktop:gap-[125px] desktop:pl-[189px] desktop:pr-0 desktop:pt-[195px]">
      <p className="absolute hidden lowercase leading-[200px] tracking-[-3px] text-gray-100 first-letter:uppercase tablet:top-[89px] tablet:block tablet:text-[120px] tablet:font-bold desktop:left-0 desktop:top-[108px] desktop:text-3xl">
        Welcome
      </p>
      <div className="relative pt-[69px] before:absolute before:left-0 before:top-0 before:h-[1px] before:w-[65px] before:bg-gray-300 tablet:pt-0 tablet:before:hidden desktop:max-w-[446px]">
        <h2 className="max-w-[311px] text-[48px] font-bold leading-[52px] tracking-[-1.71px] text-gray-900 tablet:max-w-[446px] tablet:text-xl">
          Welcome to Arch Studio
        </h2>
        <div className="space-y-[35px] pt-[22px] text-base text-gray-700 tablet:space-y-9 tablet:pt-[43px]">
          <p>
            We have a unique network and skillset to help bring your projects to
            life. Our small team of highly skilled individuals combined with our
            large network put us in a strong position to deliver exceptional
            results.
          </p>
          <p>
            Over the past 10 years, we have worked on all kinds of projects.
            From stations to high-rise buildings, we create spaces that inspire
            and delight.
          </p>
          <p>
            We work closely with our clients so that we understand the
            intricacies of each project. This allows us to work in harmony the
            surrounding area to create truly stunning projects that will stand
            the test of time.
          </p>
        </div>
      </div>
      <div className="float-right ml-auto hidden h-[568px] w-[350px] shrink-0 desktop:block">
        <img
          className="h-full w-full"
          src="/assets/home/desktop/image-welcome.jpg"
          alt="Welcome image"
        />
      </div>
    </section>
  );
}
