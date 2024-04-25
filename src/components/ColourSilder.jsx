import React, { useState } from "react";
import Slider from "@uiw/react-color-slider";

function ColourSilder() {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });
  return (
    <div>
      <Slider
        color={hsva}
        onChange={(color) => {
          setHsva({ ...hsva, ...color.hsv });
        }}
      />
    </div>
  );
}

export default ColourSilder;
