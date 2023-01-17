import React, { useState } from "react";

import Counter from "../Day6/CounterTask/Counter";
import UserCounter from "../Day6/CounterTask/UseCounter";
import Posts from "../Day6/PostsTask/Posts";

const Assignment6 = () => {
  // Day 6
  const [hideFunctionalCounter, setHideFunctionalCounter] = useState(false);
  const [hideClassCounter, setHideClassCounter] = useState(false);

  const toggleClassComponent = () => {
    setHideClassCounter(true);
    console.log("Hello");
    setHideClassCounter(false);
  };
  return (
    <>
      <div>
        {!hideClassCounter ? <Counter /> : null}
        {!hideFunctionalCounter ? <UserCounter /> : null}
        <div className="card">
          <button
            className="button"
            onClick={() => {
              setHideFunctionalCounter((prevState) => {
                return !prevState;
              });
            }}
          >
            {`${hideFunctionalCounter ? "Show" : "Hide"} Functional Counter`}
          </button>
          <button className="button" onClick={toggleClassComponent}>
            Toggle Class Based Counter Multiple Time
          </button>
        </div>
      </div>
      <Posts />
    </>
  );
};

export default Assignment6;
