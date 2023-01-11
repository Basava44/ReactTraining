import React from "react";
import "../../App.css";

class CustomButton extends React.Component {
  render() {
    return <button className="button">{this.props.text}</button>;
  }
}

export default CustomButton;
