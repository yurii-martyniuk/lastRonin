import React from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";





const Posts = (props) => {

    let message = props.messageData.map(
        m => <Post message={m.message}/>
    )

    return (
        <div className={s.posts}>
            <p className={s.title}> My posts: </p>
            {message}
        </div>
    )
}

export default Posts;