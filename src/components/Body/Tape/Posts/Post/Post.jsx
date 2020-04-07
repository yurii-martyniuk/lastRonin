import React from "react";
import s from "./Post.module.scss"

const Post = (props) => {
    return (
        <div className={s.post}>
            <img
                src="https://i.mycdn.me/image?id=772267870131&plc=WEB&tkn=*YSv40wtA0PU_n9BjX5eRU0l7sLE&fn=sqr_288"
                alt="avatar"
                className={s.avatar}
            />
            <span> {props.message} </span>

        </div>
    )
}

export default Post;