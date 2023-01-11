import React from "react";
import "./Counter.css";

class ClassBasedCounter extends React.Component {
  state = {
    counter: 0,
  };

  decrement = () => {
    this.setState(
      () => ({
        counter: this.state.counter > 0 ? this.state.counter - 1 : 0,
      }),
      () => {
        console.log("Decrement Done");
      }
    );
  };

  increment = () => {
    this.setState(
      (state) => ({
        counter: this.state.counter + 1,
      }),
      () => {
        console.log("Increment Done");
      }
    );
  };

  render() {
    return (
      <div className="wrapper">
        <button onClick={this.decrement}>-</button>
        <div className="value">{this.state.counter}</div>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default ClassBasedCounter;
