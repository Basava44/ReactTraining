import React, { useState } from "react";

// import ClassBasedComponent from "./components/Day1/ClassBasedComponent";
// import FunctionBasedComponent from "./components/Day1/FunctionBasedComponent";
// import CustomButton from "./components/Day2/Button";
// import FunctionBased from "./components/Day2/FunctionBasedCounter";
// import ClassBasedCounter from "./components/Day2/ClassBasedCounter";
// import Card from "./components/Day3/Card";
// import YoutubeCard from "./components/Day3/YoutubeCard";
// import LoginForm from "./components/Day4/LoginForm";
// import TaskManager from "./components/Day5/TaskManager";

//Day 6
import Counter from "./components/Day6/CounterTask/Counter";
import UserCounter from "./components/Day6/CounterTask/UseCounter";

import "./App.css";
import Posts from "./components/Day6/PostsTask/Posts";

function App() {
  // const details = [
  //   {
  //     imageAddress:
  //       "https://designhub.co/wp-content/uploads/2020/06/TitleImage2.png",
  //     duration: "10:22",
  //     title: "My Name is Basava",
  //     channelName: "Basava Channel",
  //     views: "1M",
  //   },
  //   {
  //     imageAddress:
  //       "https://designhub.co/wp-content/uploads/2020/06/TitleImage2.png",
  //     duration: "1:22",
  //     title: "My Name is Irfan",
  //     channelName: "Irfan Channel",
  //     views: "200K",
  //   },
  //   {
  //     imageAddress:
  //       "https://designhub.co/wp-content/uploads/2020/06/TitleImage2.png",
  //     duration: "1:22",
  //     title: "My Name is Shashi",
  //     channelName: "Shashi Channel",
  //     views: "600K",
  //   },
  // ];

  // const youtubeCards = details.map((card) => {
  //   return <YoutubeCard details={card} key={Math.random()} />;
  // });

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
}

export default App;
