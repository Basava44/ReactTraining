import React from "react";
import Avatar from "@mui/material/Avatar";

class Details extends React.Component {
  render() {
    return (
      <div className="details-wrapper">
        <Avatar
          alt={this.props.channelName}
          src="/static/images/avatar/1.jpg"
        ></Avatar>
        <div className="details">
          <div className="details__title">{this.props.title}</div>
          <div className="details__channelName">{this.props.channelName}</div>
          <div className="details__views">{this.props.views} views</div>
        </div>
      </div>
    );
  }
}

export default Details;
