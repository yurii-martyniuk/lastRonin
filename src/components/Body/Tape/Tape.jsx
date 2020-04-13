import React from "react";
import Posts from "./Posts/Posts";
import CreatePost from "./СreatePost/СreatePost";

import s from "./Tape.module.scss"

const Tape = (props) => {
    return(
        <div className={s.tape}>
            <CreatePost
                createPost={props.createPost}
            />
            <Posts
                messageData={props.messageData}
            />
        </div>        
    );
};

export default Tape

