import { useSwiper } from "swiper/react";

interface SliderOptionProps {
  isActive: boolean;
  month: string;
  index: number;
}

export function SliderOption({ isActive, month, index }: SliderOptionProps) {
  const swiper = useSwiper()

  return (
    <button
      data-active={isActive}
      className="w-full rounded-full h-12 text-sm text-gray-800 tracking-[-0.5px] font-medium data-[active='true']:bg-white"
      onClick={() => swiper.slideTo(index)}
    >
      {month}
    </button>
  )
}
