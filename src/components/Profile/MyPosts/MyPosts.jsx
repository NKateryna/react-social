import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message="fsfdsfsdf" likesCount="16" />
        <Post message="dsfdsfsdfdfs" likesCount="27" />
      </div>
    </div>
  );
};

export default MyPosts;
