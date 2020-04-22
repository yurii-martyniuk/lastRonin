import React from "react";
import Posts from "./Posts/Posts";
import s from "./Tape.module.scss"
import CreatePostContainer from "./СreatePost/СreatePostContainer";

const Tape = (props) => {
    return(
        <div className={s.tape}>
            <CreatePostContainer
                store={props.store}
            />
            <Posts
                store={props.store}
            />
        </div>        
    );
};

export default Tape

