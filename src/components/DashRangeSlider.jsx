import React, { useState } from "react";
import "./DashRangeSlider.css";

function DashRangeSlider() {
  const [value, setValue] = useState(0);
  console.log(value);

  let bgcolors;

  if (value <= 15) {
    bgcolors = "bgblue-300";
  } else if (value <= 50) {
    bgcolors = "bgblue-500";
  } else if (value <= 75) {
    bgcolors = "bgblue-700";
  } else {
    bgcolors = "bgblue-800";
  }
  return (
    <div className="rotate-[-90deg]">
      <input
        className={`${bgcolors}`}
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default DashRangeSlider;
