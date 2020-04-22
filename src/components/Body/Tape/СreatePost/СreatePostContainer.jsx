import React from "react";
import {addNewPost, onChangeTextArea} from "../../../../redux/tape-reducer";
import CreatePost from "./СreatePost";



const CreatePostContainer = (props) => {
    let state = props.store.getState();

    let alertText = () => {
        props.store.dispatch(addNewPost());
    }


    let onChangeArea = (textData) => {
        props.store.dispatch(onChangeTextArea(textData));

    }

    return(
       <CreatePost
           addNewPost={alertText}
           onChangeTextArea={onChangeArea}
           newPostText={state.tape.newPostText}
       />
    )
}

export default CreatePostContainer;