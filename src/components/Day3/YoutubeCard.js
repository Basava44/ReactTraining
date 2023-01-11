import React from "react";
import Details from "./Details";
import Thumbnail from "./Thumbnail";

import "../../App.css";

const YoutubeCard = (props) => {
  return (
    <div className="youtubeCard">
      <Thumbnail
        path={props.details.imageAddress}
        duration={props.details.duration}
      />
      <Details
        title={props.details.title}
        channelName={props.details.channelName}
        views={props.details.views}
      />
    </div>
  );
};

export default YoutubeCard;
