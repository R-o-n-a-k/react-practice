import { useState } from "react";
import Button from "../../components/Button/Button";
const Colorizer = () => {
  const [color, setColor] = useState("#6efafa");

  const colorChange = () => {
    const random = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${random}`);
  };

  return (
    <>
      <div className="text-center flex flex-col items-center justify-center h-screen bg-[aliceblue]">
        <h2 className="text-3xl font-bold">Colorizer</h2>
        <div
          className="h-52 w-52 m-4 p-4 rounded-lg border-2 border-solid border-[slategrey]"
          style={{ backgroundColor: color }}
        ></div>
        <Button size="medium" onClick={colorChange}>
          Change Color
        </Button>
      </div>
    </>
  );
};

export default Colorizer;
