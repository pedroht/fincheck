import { useSwiper } from "swiper/react";

interface SliderOptionProps {
  isActive: boolean;
  month: string;
  index: number;
}

export function SliderOption({ isActive, month, index }: SliderOptionProps) {
  const swiper = useSwiper();

  return (
    <button
      data-active={isActive}
      className="h-12 w-full rounded-full text-sm font-medium tracking-[-0.5px] text-gray-800 data-[active='true']:bg-white"
      onClick={() => swiper.slideTo(index)}
    >
      {month}
    </button>
  );
}
