import { useRef } from "react";
import { Map } from "./Map";

export function ContactDetailsSection() {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const mainOfficePosition = [32.7802, -96.6073];
  const secondaryOfficePosition = [36.16589, -86.78444];

  function handleClick(position) {
    mapContainerRef.current?.scrollIntoView({ behavior: "smooth" });
    mapRef.current?.flyTo(position, 10);
  }

  return (
    <section className="mt-[76px] tablet:mt-[-135px]">
      <div className="relative px-8 pt-[69px] before:absolute before:left-8 before:top-0 before:h-[1px] before:w-[65px] before:bg-gray-300 tablet:px-0 tablet:pt-[49px] tablet:before:left-0 desktop:flex desktop:w-full desktop:gap-[300px] desktop:pt-[73px]">
        <h2 className="max-w-[111px] text-[48px] font-bold leading-[52px] tracking-[-1.71px] text-gray-900 tablet:text-xl">
          Contact Details
        </h2>
        <div className="mt-10 flex flex-col gap-10 text-base text-gray-700 tablet:pt-[43px] desktop:mt-0 desktop:flex-row desktop:gap-[130px] desktop:pt-0">
          <div>
            <h3 className="font-bold">Main Office</h3>
            <div className="mt-[14px] flex flex-col gap-[43px] tablet:flex-row tablet:items-center tablet:justify-between tablet:gap-0 desktop:flex-col desktop:items-start desktop:gap-[59px]">
              <div>
                <p>Mail : archone@mail.com</p>
                <p>Address : 1892 Chenoweth Drive TN</p>
                <p>Phone : 123-456-3451</p>
              </div>
              <button
                className="group flex h-fit gap-6"
                onClick={() => handleClick(mainOfficePosition)}
              >
                <span className="font-bold text-gray-900 group-hover:underline">
                  View On Map
                </span>
                <img src="/assets/icons/icon-arrow.svg" alt="Arrow icon" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Office II</h3>
            <div className="mt-[14px] flex flex-col gap-[43px] tablet:flex-row tablet:items-center tablet:justify-between tablet:gap-0 desktop:flex-col desktop:items-start desktop:gap-[59px]">
              <div>
                <p>Mail : archtwo@mail.com</p>
                <p>Address : 3399 Wines Lane TX</p>
                <p>Phone : 832-123-4321</p>
              </div>
              <button
                className="group flex h-fit gap-6"
                onClick={() => handleClick(secondaryOfficePosition)}
              >
                <span className="font-bold text-gray-900 group-hover:underline">
                  View On Map
                </span>
                <img src="/assets/icons/icon-arrow.svg" alt="Arrow icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mt-[71px] h-[300px] w-full tablet:mt-[226px] tablet:h-[560px] desktop:mt-[199px]"
        ref={mapContainerRef}
      >
        <Map
          mapRef={mapRef}
          mainOfficePosition={mainOfficePosition}
          secondaryOfficePosition={secondaryOfficePosition}
        />
      </div>
    </section>
  );
}
