export function CarouselItem({ children, currentIndex, backgroundImage }) {
  return (
    <li
      className={`relative space-y-[83px] bg-cover bg-no-repeat px-8 pb-[265px] pt-[116px] text-white transition-transform duration-300 ease-in-out after:absolute after:inset-0 after:bg-black/40 tablet:space-y-[41px] tablet:px-[58px] tablet:pb-[292px] tablet:pt-[186px] desktop:pb-[292px] desktop:pl-[190px] desktop:pr-[376px] desktop:pt-[186px] ${backgroundImage}`}
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {children}
    </li>
  );
}
