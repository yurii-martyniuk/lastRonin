import React from "react";
import Posts from "./Posts/Posts";
import CreatePost from "./СreatePost/СreatePost";

import s from "./Tape.module.scss"

const Tape = () => {
    return(
        <div className={s.tape}>
            <CreatePost/>
            <Posts/>
        </div>        
    );
};

export default Tape

