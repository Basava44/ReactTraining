import React from "react";
import { useParams } from "react-router";

import { Posts } from "./Posts";

const PostDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Post Details</h3>
      <div className="individualPost">
        <div className="pair">
          <div className="key">Id</div>
          <div className="value">{Posts[id - 1].id}</div>
        </div>
        <div className="pair">
          <div className="key">Title</div>
          <div className="value">{Posts[id - 1].title}</div>
        </div>
        <div className="pair">
          <div className="key">Body</div>
          <div className="value">{Posts[id - 1].title}</div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
