export function LeadersSection() {
  return (
    <section className="mt-[112px] px-8 tablet:mt-[207px] tablet:px-0 desktop:mt-[200px] desktop:flex desktop:justify-between">
      <h2 className="max-w-[111px] text-[48px] font-bold leading-[52px] tracking-[-1.71px] text-gray-900 tablet:text-xl">
        The Leaders
      </h2>
      <ul className="mt-[55px] gap-[79px] grid tablet:grid-cols-2 tablet:gap-x-[11px] tablet:gap-y-[103px] tablet:space-y-0 desktop:mt-0 desktop:gap-x-[30px] desktop:gap-y-[63px]">
        <li>
          <div className="group relative cursor-pointer after:absolute after:inset-0 after:z-[1] after:transition-colors hover:after:bg-black/50">
            <img
              className="w-full tablet:w-auto"
              src="/assets/about/desktop/avatar-jake.jpg"
              alt="Jake Richards"
            />
            <div className="absolute left-1/2 top-1/2 z-[2] hidden -translate-x-1/2 -translate-y-1/2 gap-8 group-hover:flex">
              <div className="relative">
                <img
                  src="/assets/icons/icon-linkedin.svg"
                  alt="LinkedIn logo"
                />
              </div>
              <div className="relative">
                <img src="/assets/icons/icon-twitter.svg" alt="Twitter logo" />
              </div>
            </div>
          </div>
          <div className="mt-[15px]">
            <h3 className="text-lg text-gray-900">Jake Richards</h3>
            <p className="text-base text-gray-900/75">Chief Architect</p>
          </div>
        </li>
        <li>
          <div className="group relative cursor-pointer after:absolute after:inset-0 after:z-[1] after:transition-colors hover:after:bg-black/50">
            <img
              className="w-full tablet:w-auto"
              src="/assets/about/desktop/avatar-thompson.jpg"
              alt="Thompson Smith"
            />
            <div className="absolute left-1/2 top-1/2 z-[2] hidden -translate-x-1/2 -translate-y-1/2 gap-8 group-hover:flex">
              <div className="relative">
                <img
                  src="/assets/icons/icon-linkedin.svg"
                  alt="LinkedIn logo"
                />
              </div>
              <div className="relative">
                <img src="/assets/icons/icon-twitter.svg" alt="Twitter logo" />
              </div>
            </div>
          </div>
          <div className="mt-[15px]">
            <h3 className="text-lg text-gray-900">Thompson Smith</h3>
            <p className="text-base text-gray-900/75">Head of Finance</p>
          </div>
        </li>
        <li>
          <div className="group relative cursor-pointer after:absolute after:inset-0 after:z-[1] after:transition-colors hover:after:bg-black/50">
            <img
              className="w-full tablet:w-auto"
              src="/assets/about/desktop/avatar-jackson.jpg"
              alt="Jackson Rourke"
            />
            <div className="absolute left-1/2 top-1/2 z-[2] hidden -translate-x-1/2 -translate-y-1/2 gap-8 group-hover:flex">
              <div className="relative">
                <img
                  src="/assets/icons/icon-linkedin.svg"
                  alt="LinkedIn logo"
                />
              </div>
              <div className="relative">
                <img src="/assets/icons/icon-twitter.svg" alt="Twitter logo" />
              </div>
            </div>
          </div>
          <div className="mt-[15px]">
            <h3 className="text-lg text-gray-900">Jackson Rourke</h3>
            <p className="text-base text-gray-900/75">Lead Designer</p>
          </div>
        </li>
        <li>
          <div className="group relative cursor-pointer after:absolute after:inset-0 after:z-[1] after:transition-colors hover:after:bg-black/50">
            <img
              className="w-full tablet:w-auto"
              src="/assets/about/desktop/avatar-maria.jpg"
              alt="Maria Simpson"
            />
            <div className="absolute left-1/2 top-1/2 z-[2] hidden -translate-x-1/2 -translate-y-1/2 gap-8 group-hover:flex">
              <div className="relative">
                <img
                  src="/assets/icons/icon-linkedin.svg"
                  alt="LinkedIn logo"
                />
              </div>
              <div className="relative">
                <img src="/assets/icons/icon-twitter.svg" alt="Twitter logo" />
              </div>
            </div>
          </div>
          <div className="mt-[15px]">
            <h3 className="text-lg text-gray-900">Maria Simpson</h3>
            <p className="text-base text-gray-900/75">Senior Architect</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
