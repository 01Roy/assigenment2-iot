import React from "react";
import SliderComponent from "../SliderComponent";

function SliderGrop1() {
  return (
    <div className="w-[30rem] h-[30rem] bg-[#D9D9D9] relative m-[10rem] rounded-2xl">
      <img
        src="https://res.cloudinary.com/dcnjbnpnl/image/upload/fl_preserve_transparency/v1714060848/Rectangle_gj3x78.jpg?_s=public-apps"
        alt=""
        className="absolute w-[29.8rem] h-[29.8rem] bg-cover top-[.5px] left-[1px] rounded-xl"
      />
      <div className=" ">
        <SliderComponent className="absolute " />
      </div>
    </div>
  );
}

export default SliderGrop1;
