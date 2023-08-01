import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useSwiper } from "swiper/react";

export function SliderNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <button
        className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-r from-gray-100 to-transparent transition-colors hover:from-gray-300"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </button>

      <button
        className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-l from-gray-100 to-transparent transition-colors hover:from-gray-300"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </button>
    </>
  );
}
