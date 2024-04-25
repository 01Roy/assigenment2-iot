import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex justify-center align-middle gap-2">
      <button
        className="bg-[#303837] text-[2rem] p-4 rounded-md"
        onClick={() => swiper.slidePrev()}
      >
        Prev
      </button>
      <button
        className="bg-[#303837] text-[2rem] p-4 rounded-md"
        onClick={() => swiper.slideNext()}
      >
        Next
      </button>
    </div>
  );
};
