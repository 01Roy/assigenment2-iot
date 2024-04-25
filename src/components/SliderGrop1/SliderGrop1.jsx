import React from "react";
import SliderComponent from "../SliderComponent";

function SliderGrop1() {
  return (
    <div className="w-[30rem] h-[30rem] bg-[#D9D9D9] relative m-[10rem] rounded-2xl">
      <img
        src="./public/Rectangle.png"
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
