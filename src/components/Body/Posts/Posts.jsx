import React from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";

const Posts = () => {
    return(
      <div className={s.posts}>
          <p className={s.title}> My posts: </p>
          <Post message="Hi, I just try to use props"/>
          <Post message="And here too!"/>
          <Post message="It's all for New Balance"/>

      </div>
    );
};

export default Posts;

