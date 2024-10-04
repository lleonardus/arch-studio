import { useEffect, useRef, useState } from "react";

export function Carousel({
  children,
  maxIndex,
  currentIndex,
  setCurrentIndex,
}) {
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  const [, setTouchMoveX] = useState(0);
  const [isSwipeLocked, setIsSwipeLocked] = useState(false);
  const carouselRef = useRef(null);

  const MIN_SWIPE_DISTANCE = 40;

  useEffect(function () {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1440);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleMouseDown(e) {
    if (isDesktop) return;
    setIsDragging(true);
    setStartX(e.pageX);
  }

  function handleMouseMove(e) {
    if (!isDragging || isDesktop || isSwipeLocked) return;

    const diff = e.pageX - startX;

    if (diff > MIN_SWIPE_DISTANCE && currentIndex > 0) {
      setCurrentIndex((index) => index - 1);
      setIsDragging(false);
      setIsSwipeLocked(true);
    } else if (diff < -MIN_SWIPE_DISTANCE && currentIndex < maxIndex - 1) {
      setCurrentIndex((index) => index + 1);
      setIsDragging(false);
      setIsSwipeLocked(true);
    }
  }

  function handleMouseUp() {
    if (isDesktop) return;
    setIsDragging(false);
    setIsSwipeLocked(false);
  }

  function handleTouchStart(e) {
    if (isDesktop || isSwipeLocked) return;
    setStartX(e.touches[0].clientX);
    setTouchMoveX(0);
  }

  function handleTouchMove(e) {
    if (isDesktop || isSwipeLocked) return;
    const diff = e.touches[0].clientX - startX;
    setTouchMoveX(diff);

    if (diff > MIN_SWIPE_DISTANCE && currentIndex > 0) {
      setCurrentIndex((index) => index - 1);
      setIsSwipeLocked(true);
    } else if (diff < -MIN_SWIPE_DISTANCE && currentIndex < maxIndex - 1) {
      setCurrentIndex((index) => index + 1);
      setIsSwipeLocked(true);
    }
  }

  function handleTouchEnd() {
    setTouchMoveX(0);
    setIsSwipeLocked(false);
  }

  return (
    <ul
      className="flex overflow-hidden bg-black *:w-full *:shrink-0 max-desktop:cursor-grab"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </ul>
  );
}
