import SliderGrop1 from "./components/SliderGrop1/SliderGrop1";

import { useState } from "react";

function App() {
  const [color, setColor] = useState("#aabbcc");
  return (
    <div className=" flex justify-center align-middle">
      <div className="w-full h-full grid place-items-center">
        <SliderGrop1 />
      </div>
    </div>
  );
}

export default App;
