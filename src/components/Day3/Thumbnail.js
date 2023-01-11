import React from "react";

const Thumbnail = (props) => {
  return (
    <div className="thumbnail">
      <img className="thumbnail-image" src={props.path} alt="thumbnail" />
      <div className="thumbnail-duration">{props.duration}</div>
    </div>
  );
};

export default Thumbnail;
