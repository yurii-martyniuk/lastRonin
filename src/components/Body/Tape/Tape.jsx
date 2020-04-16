import React from "react";
import Posts from "./Posts/Posts";
import CreatePost from "./СreatePost/СreatePost";

import s from "./Tape.module.scss"
import {onChangePost} from "../../../redux/store";
import App from "../../../App";

const Tape = (props) => {
    return(
        <div className={s.tape}>
            <CreatePost
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
            <Posts
                messageData={props.messageData}
            />
        </div>        
    );
};

export default Tape

