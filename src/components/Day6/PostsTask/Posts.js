import React from "react";

import axios from "axios";

import "./Posts.css";
import { Card } from "@mui/material";

class Posts extends React.Component {
  api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  constructor() {
    super();
    this.state = {
      posts: [],
      postDetails: {},
    };
  }

  getPosts = () => {
    this.api.get("").then((res) => {
      this.setState({
        posts: res.data,
      });
    });
  };

  getPostDetails(id) {
    this.api.get(`/${id}`).then((res) => {
      this.setState({
        ...this.state,
        selectedPostId: id,
        postDetails: {
          title: res.data.title,
          body: res.data.body,
          id: res.data.id,
        },
      });
    });
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <div className="container">
        <div className="title">User Posts</div>
        <div className="details">
          <div className="postLists postWrapper">
            {this.state.posts.length ? (
              <>
                <h3>Posts List</h3>
                {this.state.posts.map((post) => {
                  return (
                    <Card
                      className={`post ${
                        this.state.selectedPostId === post.id
                          ? "activePost"
                          : ""
                      }`}
                      key={post.id}
                      onClick={() => {
                        this.getPostDetails(post.id);
                      }}
                    >
                      {post.title}
                    </Card>
                  );
                })}
              </>
            ) : (
              <h3 className="notice">No Posts Available</h3>
            )}
          </div>
          <div className="postDetails postWrapper">
            {Object.keys(this.state.postDetails).length ? (
              <>
                <h3>Post Details</h3>
                <div className="individualPost">
                  <div className="pair">
                    <div className="key">Id</div>
                    <div className="value">{this.state.postDetails.id}</div>
                  </div>
                  <div className="pair">
                    <div className="key">Title</div>
                    <div className="value">{this.state.postDetails.title}</div>
                  </div>
                  <div className="pair">
                    <div className="key">Body</div>
                    <div className="value">{this.state.postDetails.body}</div>
                  </div>
                </div>
              </>
            ) : (
              <h3 className="notice">
                Please Select a Post to view the details
              </h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
