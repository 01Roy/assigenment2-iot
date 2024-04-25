import React from "react";
import SliderComponent from "../SliderComponent";

function SliderGrop1() {
  return (
    <div className="w-[30rem] h-[30rem] bg-[#D9D9D9] relative m-[10rem] rounded-2xl">
      <div className="absolute w-[29.8rem] h-[29.8rem] backimage bg-cover top-[.5px] left-[1px] rounded-xl ">
        <SliderComponent className="absolute " />
      </div>
    </div>
  );
}

export default SliderGrop1;
