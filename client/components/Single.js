import React from "react";
import Photo from "./Photo";
import Comment from "./Comment";
import { Link } from "react-router";
// import comments

const Single = React.createClass({
  render() {
    const { postID } = this.props.params;

    // index of the post
    const index = this.props.posts.findIndex(post => post.code === postID);
    // get us the post
    const post = this.props.posts[index];
    const postComments = this.props.comments[postID] || [];

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props} />
        <Comment postComments={postComments} {...this.props} />
      </div>
    );
  }
});

export default Single;
