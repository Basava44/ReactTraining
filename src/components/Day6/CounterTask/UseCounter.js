import React, { useEffect, useState } from "react";

const UserCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("%cFunction Counter Rendered", "color:red");
    return () => {
      console.log("%cFunction Counter UnMounted", "color:red");
    };
  }, [count]);
  return (
    <>
      <h1>Function Based Counter</h1>
      <div>
        <button
          className="button"
          onClick={() => {
            setCount((prevCount) => {
              return prevCount - 1;
            });
          }}
        >
          Decrement
        </button>
        <span className="title">{count}</span>
        <button
          className="button"
          onClick={() => {
            setCount((prevCount) => {
              return prevCount + 1;
            });
          }}
        >
          Increment
        </button>
      </div>
    </>
  );
};

export default UserCounter;
