import React from "react";
import s from "./Tape.module.scss"
import CreatePostContainer from "./СreatePost/СreatePostContainer";
import PostsContainer from "./Posts/PostsContainer";

const Tape = (props) => {
    return(
        <div className={s.tape}>
            <CreatePostContainer/>
            <PostsContainer/>
        </div>        
    );
};

export default Tape

