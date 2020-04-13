import React from "react";
import s from "./СreatePost.module.scss"


const CreatePost = (props) => {

    let text = React.createRef();


    let alertText = () => {
        debugger;
        let textData = text.current.value;
        props.createPost(textData);
        text.current.value = '';
    }

    return(
        <div className={s.createPost}>
            <p className={s.title}> Create Post </p>
            <div className={s.input}><img
                src="https://i.mycdn.me/image?id=772267870131&plc=WEB&tkn=*YSv40wtA0PU_n9BjX5eRU0l7sLE&fn=sqr_288"
                alt="avatar"
                className={s.avatar}
            />
            <span> Write something here: </span></div>
            <textarea ref={text}> </textarea>
            <button onClick={alertText}>DD</button>
        </div>
    )
}

export default CreatePost;