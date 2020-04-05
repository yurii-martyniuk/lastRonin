import React from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";

const Posts = () => {
    return(
      <div className={s.posts}>
          <p className={s.title}> My posts </p>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
      </div>
    );
};

export default Posts;

