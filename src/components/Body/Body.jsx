import React from "react";
import s from  "./Body.module.scss"
import CreatePost from "./СreatePost/СreatePost";
import Posts from "./Posts/Posts";

const Body = () => {
    return(
        <div className={s.body}>
            <CreatePost/>
            <Posts/>
        </div>
    )
}

export default Body;