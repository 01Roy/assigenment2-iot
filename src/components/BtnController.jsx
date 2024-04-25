import React from "react";
import { useSwiper } from "swiper/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./SliderComponent.css";

function BtnController() {
  const swiper = useSwiper();
  return (
    <div className="">
      <div className="w-[30rem] h-[10rem] bg-[#D9D9D9] relative rounded-2xl mt-[8rem] ml-[-2rem]">
        <div className="absolute w-[29.7rem] h-[9.8rem]  backimage2 bg-cover top-[2px] left-[1px] rounded-xl ">
          <div className="w-full flex justify-center align-middle gap-[6rem] mt-[1.2rem] ">
            {/* first */}
            <div onClick={() => swiper.slidePrev()}>
              <div className="">
                <div className="w-[7rem] h-[7rem] rounded-full bg-[#6C6C6C] shadow-black shadow-md ">
                  <div className="w-[6.9rem] h-[6.9rem] rounded-full bg-[#D9D9D9]  relative left-[1px] top-[1px] z-30">
                    <div className="w-[6.8rem] h-[6.8rem] rounded-full bg-[#282828]  relative left-[.5px] top-[1px] shadow-black shadow-sm">
                      <ArrowBackIcon
                        fontSize="large"
                        className="absolute top-[2.5rem] left-[2rem] font-bold "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* second */}
            <div onClick={() => swiper.slideNext()}>
              <div className="">
                <div className="w-[7rem] h-[7rem] rounded-full bg-[#6C6C6C] shadow-black shadow-md ">
                  <div className="w-[6.9rem] h-[6.9rem] rounded-full bg-[#D9D9D9]  relative left-[1px] top-[1px] z-30">
                    <div
                      className="w-[6.8rem] h-[6.8rem] rounded-full bg-[#282828]  relative left-[.5px] top-[1px] shadow-black shadow-sm"
                      onClick={() => swiper.slideNext()}
                    >
                      <ArrowForwardIcon
                        fontSize="large"
                        className="absolute top-[2.5rem] left-[2rem] font-bold "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BtnController;
