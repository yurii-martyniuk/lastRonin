import React from "react";
import "./Body.scss"
import CreatePost from "./СreatePost/СreatePost";
import Post from "./Post/Post";
const Body = () => {
    return(
        <div class="body">
            <CreatePost/>
            <Post/>
        </div>
    )
}

export default Body;