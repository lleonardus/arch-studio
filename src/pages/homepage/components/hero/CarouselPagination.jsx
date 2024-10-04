export function CarouselPagination({
  maxIndex,
  currentIndex,
  setCurrentIndex,
}) {
  return (
    <div
      className="absolute bottom-0 z-[10] hidden desktop:flex"
      style={{ transform: `translateX(-${100 / maxIndex}%)` }}
    >
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
            className={`h-20 w-20 bg-white text-base text-gray-600 transition-colors hover:bg-gray-100`}
          >
            0{id + 1}
          </button>
        );
      })}
    </div>
  );
}
