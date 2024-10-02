import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const pathName = location.pathname
    .slice(1)
    .replaceAll("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return (
    <>
      <div className="absolute left-[-96px] top-[280px] hidden w-[240px] rotate-90 text-base uppercase tracking-[1.125rem] text-gray-300 before:absolute before:left-[-204px] before:top-1/2 before:h-[1px] before:w-[204px] before:-translate-y-1/2 before:translate-x-[-48px] before:bg-gray-300 tablet:inline-block">
        {pathName || "Home"}
      </div>
      <header className="relative flex h-fit items-center justify-between px-8 py-8 text-gray-900 tablet:justify-normal tablet:gap-[79px] tablet:px-0 xl:gap-[95px]">
        <Link
          to="/"
          className="inline-block h-8 w-[77px] tablet:h-10 tablet:w-24"
        >
          <img src="/assets/logo.svg" alt="Arch logo" />
        </Link>
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="h-[17px] w-6 bg-[url('/assets/icons/icon-hamburger.svg')] bg-cover bg-no-repeat tablet:hidden"
        ></button>
        <nav
          className={`absolute inset-0 z-[99999] h-dvh translate-y-[96px] tablet:static tablet:h-auto tablet:translate-x-0 tablet:translate-y-0 ${isOpen ? "translate-x-0 max-tablet:bg-black/75" : "translate-x-full transition-transform delay-300"}`}
        >
          <ul
            className={`absolute right-0 top-0 flex h-[235px] w-[343px] flex-col gap-[17px] bg-gray-100 px-12 pb-[42px] pt-[39px] text-lg transition-transform duration-300 tablet:static tablet:h-auto tablet:w-auto tablet:translate-x-0 tablet:flex-row tablet:gap-[61px] tablet:bg-[inherit] tablet:text-base tablet:font-bold tablet:text-gray-600 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <li>
              <Link
                to="/portfolio"
                className={`w-fit shrink-0 transition-colors hover:text-gray-900 ${pathName === "Portfolio" ? "relative text-gray-900 tablet:after:absolute tablet:after:bottom-[-6px] tablet:after:left-1/2 tablet:after:h-[1px] tablet:after:w-6 tablet:after:-translate-x-1/2 tablet:after:bg-gray-900 tablet:after:transition-[width]" : "tablet:after:w-0"}`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={`w-fit shrink-0 transition-colors hover:text-gray-900 ${pathName === "About Us" ? "relative text-gray-900 tablet:after:absolute tablet:after:bottom-[-6px] tablet:after:left-1/2 tablet:after:h-[1px] tablet:after:w-6 tablet:after:-translate-x-1/2 tablet:after:bg-gray-900 tablet:after:transition-[width]" : "tablet:after:w-0"}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`w-fit shrink-0 transition-colors hover:text-gray-900 ${pathName === "Contact" ? "relative text-gray-900 tablet:after:absolute tablet:after:bottom-[-6px] tablet:after:left-1/2 tablet:after:h-[1px] tablet:after:w-6 tablet:after:-translate-x-1/2 tablet:after:bg-gray-900 tablet:after:transition-[width]" : "tablet:after:w-0"}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
