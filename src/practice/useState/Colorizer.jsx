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
      <div className="colorizer">
        <h2>Colorizer</h2>
        <div className="box" style={{ backgroundColor: color }}></div>
        <Button size="medium" onClick={colorChange}>
          Change Color
        </Button>
      </div>
    </>
  );
};

export default Colorizer;
