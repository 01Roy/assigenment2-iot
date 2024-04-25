import React from "react";

function ButtonComopnent() {
  return (
    <div className="w-screen h-screen flex justify-center align-middle mt-[20rem]">
      <div className="w-[10rem] h-[10rem] rounded-full bg-[#6C6C6C] shadow-black shadow-md ">
        <div className="w-[9.9rem] h-[9.9rem] rounded-full bg-[#D9D9D9]  relative left-[1px] top-[1px] z-30">
          <div className="w-[9.8rem] h-[9.8rem] rounded-full bg-[#282828]  relative left-[.5px] top-[1px] shadow-black shadow-sm"></div>
        </div>
      </div>
    </div>
  );
}

export default ButtonComopnent;
