import React from "react";
import { NavLink } from "react-router-dom";

import { Posts } from "./Posts";

import "../../App.css";

const PostList = () => {
  return (
    <div>
      <ul>
        <h3 style={{ textAlign: "center" }}>Post Lists</h3>
        {Posts.map((post) => {
          return (
            <li key={post.id} className="post">
              <NavLink to={`/posts/${post.id}`} className="navLink">
                {post.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
