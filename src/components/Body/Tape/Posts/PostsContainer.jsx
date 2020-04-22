import React from "react";
import Posts from "./Posts";
import StoreContext from "../../../../redux/StoreContext";

const PostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                return (
                    <Posts state={state}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default PostsContainer;