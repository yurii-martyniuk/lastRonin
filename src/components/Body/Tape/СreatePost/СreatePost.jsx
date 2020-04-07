import React from "react";
import s from "./СreatePost.module.scss"
const CreatePost = () => {
    return(
        <div className={s.createPost}>
            <p className={s.title}> Create Post </p>
            <div className={s.input}><img
                src="https://i.mycdn.me/image?id=772267870131&plc=WEB&tkn=*YSv40wtA0PU_n9BjX5eRU0l7sLE&fn=sqr_288"
                alt="avatar"
                className={s.avatar}
            />
            <span> Write something here: </span></div>

        </div>
    )
}

export default CreatePost;