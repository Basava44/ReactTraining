import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("%cClass Counter Constructor", "color:blue");
  }

  componentDidMount() {
    console.log("%cClass Counter Mounted", "color:blue");
  }

  componentDidUpdate(pp, ps) {
    console.log(
      `%cClass Counter Updated and Previous State of Count was:${ps.count}`,
      "color:blue"
    );
  }

  componentWillUnmount() {
    console.log("%cClass Based Component UnMounted", "color: blue");
  }

  render() {
    return (
      <>
        <h1>Class Based Counter</h1>
        <div>
          <button
            className="button"
            onClick={() => {
              this.setState({ count: this.state.count - 1 });
            }}
          >
            Decrement
          </button>
          <span className="title">{this.state.count}</span>
          <button
            className="button"
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            Increment
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
