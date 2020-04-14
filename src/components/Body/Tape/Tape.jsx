import React from "react";
import Posts from "./Posts/Posts";
import CreatePost from "./СreatePost/СreatePost";

import s from "./Tape.module.scss"
import {onChangePost} from "../../../redux/state";
import App from "../../../App";

const Tape = (props) => {
    return(
        <div className={s.tape}>
            <CreatePost
                createPost={props.createPost}
                onChangePost={props.onChangePost}
                newPostText={props.newPostText}
            />
            <Posts
                messageData={props.messageData}
            />
        </div>        
    );
};

export default Tape

