import React from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";

let messageData = [
    {message: "Hi, I just try to use props"},
    {message: "And here too!"},
    {message: "It's all for New Balance"}
]

let message = messageData.map(
    m => <Post message={m.message}/>
)

const Posts = () => {
    return (
        <div className={s.posts}>
            <p className={s.title}> My posts: </p>
            {message}
        </div>
    )
}

export default Posts;