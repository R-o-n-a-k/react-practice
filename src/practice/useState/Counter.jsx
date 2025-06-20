import React, { useState } from "react";
import Button from "../../components/Button/Button";

const Counter = () => {
  const [count, setcount] = useState(0);
  const [num, setNum] = useState(1);

  const increment = () => {
    setcount(count + num);
  };

  const decrement = () => {
    setcount(count - num);
  };

  const resetCounter = () => {
    setcount(0);
    setNum(1);
  };

  return (
    <div className="text-center flex flex-col items-center justify-center h-screen bg-[skyblue] ">
      <h2 className="text-3xl font-bold text-gray-800">Counter</h2>
      <div className="flex justify-center mt-8">
        <Button bgColor="darkcyan" onClick={decrement}>
          -
        </Button>
        <div className="counter-display text-[2rem] px-8 py-0">{count}</div>
        <Button bgColor="darkcyan" onClick={increment}>
          +
        </Button>
      </div>
      <br />
      <label htmlFor="">Enter the step: </label>
      <input
        className="p-[0.2rem] bg-blue-50"
        type="number"
        value={num}
        min={0}
        max={10}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <br />
      <br />
      <br />
      <Button bgColor="tomato" onClick={resetCounter}>
        Reset
      </Button>
    </div>
  );
};

export default Counter;
