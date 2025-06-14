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
    <div className="counter section">
      <h2>Counter</h2>
      <div className="counter-box">
        <Button bgColor="darkcyan" onClick={decrement}>
          -
        </Button>
        <div className="counter-display">{count}</div>
        <Button bgColor="darkcyan" onClick={increment}>
          +
        </Button>
      </div>
      <br />
      <label htmlFor="">Enter the step: </label>
      <input
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
