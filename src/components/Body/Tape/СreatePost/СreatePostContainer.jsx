import React from "react";
import {addNewPost, onChangeTextArea} from "../../../../redux/tape-reducer";
import CreatePost from "./СreatePost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.tape.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addNewPost());
        },

        onChangeTextArea: (textData) => {
            dispatch(onChangeTextArea(textData));
        }
    }
}

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost)

export default CreatePostContainer;