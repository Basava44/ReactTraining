import React, { useState } from "react";
import "./Counter.css";

const FunctionBased = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };
  return (
    <div className="wrapper">
      <button onClick={decrement}>-</button>
      <div className="value">{counter}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default FunctionBased;
