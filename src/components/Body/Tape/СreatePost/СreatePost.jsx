import React from "react";
import s from "./СreatePost.module.scss"
import {addNewPost, onChangeTextArea} from "../../../../redux/tape-reducer";



const CreatePost = (props) => {
    console.log(props)
    let text = React.createRef();


    let alertText = () => {
        props.addNewPost();
    }


    let onChangeArea = () => {
        let textData = text.current.value;

        props.onChangeTextArea(textData);

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
            <textarea
                ref={text}
                onChange={onChangeArea}
                value={props.newPostText}
            >


            </textarea>
            <button
                onClick={alertText}
            >ADD</button>
        </div>
    )
}

export default CreatePost;