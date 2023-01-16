import React from "react";

// import ClassBasedComponent from "./components/Day1/ClassBasedComponent";
// import FunctionBasedComponent from "./components/Day1/FunctionBasedComponent";
// import CustomButton from "./components/Day2/Button";
// import FunctionBased from "./components/Day2/FunctionBasedCounter";
// import ClassBasedCounter from "./components/Day2/ClassBasedCounter";
// import Card from "./components/Day3/Card";
// import YoutubeCard from "./components/Day3/YoutubeCard";
// import LoginForm from "./components/Day4/LoginForm";
import TaskManager from "./components/Day5/TaskManager";

import "./App.css";

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

  return (
    <div className="wrapper">
      {/* <Card>
        <div className="day">Day 1</div>
        <FunctionBasedComponent />
        <ClassBasedComponent />
      </Card>
      <Card>
        <div className="day">Day 2</div>
        <CustomButton text="Basava" />
        <ClassBasedCounter />
        <FunctionBased />
      </Card>
      <Card>
        <div className="day">Day 3</div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>{youtubeCards}</div>
      </Card>
      <Card className="formCard">
        <div className="day">Day 4</div>
        <div className="login">
          <LoginForm />
        </div>
      </Card> */}
      <TaskManager />
    </div>
  );
}

export default App;
