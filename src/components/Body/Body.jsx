import React from "react";
import s from  "./Body.module.scss"
import CreatePost from "./СreatePost/СreatePost";
import Posts from "./Posts/Posts";
import Dialogs from "./Dialogs/Dialogs";

const Body = () => {
    return(
        <div className={s.body}>
            {/*<CreatePost/>*/}
           {/* <Posts/>*/}
            <Dialogs/>
        </div>
    )
}

export default Body;