import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "../App.css";
import "./SliderComponent.css";
import BtnController from "./BtnController";
import DashRangeSlider from "./DashRangeSlider";
import LightModeIcon from "@mui/icons-material/LightMode";
import PaletteIcon from "@mui/icons-material/Palette";
import WindPowerIcon from "@mui/icons-material/WindPower";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import { useEffect, useState } from "react";

function SliderComponent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  });
  return (
    <div className="">
      <div className=" absolute w-[29.8rem] h-[29.8rem]   bg-cover rounded-xl">
        <Swiper
          className=""
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={40}
          slidesPerView="auto"
        >
          {/* Left Component */}
          <SwiperSlide className="res-slide ">
            <div className="flex justify-center gap-[5rem] mt-[-40rem]">
              {/* first silder */}
              <div
                className={
                  visible
                    ? "translate-y-[40rem] transition duration-700 ease-in-out"
                    : ""
                }
              >
                <div className="w-[8rem] h-[25rem] rounded-full bg-[#6C6C6C] shadow-black shadow-md ">
                  <div className="w-[7.9rem] h-[25.9rem] rounded-full bg-[#D9D9D9]  relative left-[1px] top-[1px] z-30">
                    <div className="w-[7.8rem] h-[25.8rem] rounded-full bg-[#282828]  relative left-[.5px] top-[1px] shadow-black shadow-sm">
                      <div className="absolute top-[12em] left-[-3.6rem]">
                        <div className="absolute top-[-10em] left-[6.2rem]">
                          <PaletteIcon fontSize="large" />
                        </div>
                        <DashRangeSlider />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* second silder */}
              <div>
                <div
                  className={
                    visible
                      ? "translate-y-[40rem] transition duration-1000 ease-in-out"
                      : ""
                  }
                >
                  <div className="w-[8rem] h-[25rem] rounded-full bg-[#6C6C6C] shadow-black shadow-md ">
                    <div className="w-[7.9rem] h-[25.9rem] rounded-full bg-[#D9D9D9]  relative left-[1px] top-[1px] z-30">
                      <div className="w-[7.8rem] h-[25.8rem] rounded-full bg-[#282828]  relative left-[.5px] top-[1px] shadow-black shadow-sm">
                        <div className="absolute top-[12em] left-[-3.6rem]">
                          <div className="absolute top-[-10em] left-[6.2rem]">
                            <LightModeIcon fontSize="large" />
                          </div>
                          <DashRangeSlider />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Right Component */}
          <SwiperSlide className="res-slide">
            <div className="flex justify-center gap-[5rem] ">
              {/* first silder */}
              <div className=" ">
                <div className="w-[8rem] h-[25rem] rounded-full bg-[#6C6C6C] shadow-black shadow-md ">
                  <div className="w-[7.9rem] h-[25.9rem] rounded-full bg-[#D9D9D9]  relative left-[1px] top-[1px] z-30">
                    <div className="w-[7.8rem] h-[25.8rem] rounded-full bg-[#282828]  relative left-[.5px] top-[1px] shadow-black shadow-sm">
                      <div className="absolute top-[12em] left-[-3.6rem]">
                        <div className="absolute top-[-10em] left-[6.2rem]">
                          <DeviceThermostatIcon fontSize="large" />
                        </div>
                        <DashRangeSlider />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* second silder */}
              <div>
                <div className="  ">
                  <div className="w-[8rem] h-[25rem] rounded-full bg-[#6C6C6C] shadow-black shadow-md ">
                    <div className="w-[7.9rem] h-[25.9rem] rounded-full bg-[#D9D9D9]  relative left-[1px] top-[1px] z-30">
                      <div className="w-[7.8rem] h-[25.8rem] rounded-full bg-[#282828]  relative left-[.5px] top-[1px] shadow-black shadow-sm">
                        <div className="absolute top-[12em] left-[-3.6rem]">
                          <div className="absolute top-[-10em] left-[6.2rem]">
                            <WindPowerIcon fontSize="large" />
                          </div>
                          <DashRangeSlider />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="w-[100%]">
            <BtnController />
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default SliderComponent;
