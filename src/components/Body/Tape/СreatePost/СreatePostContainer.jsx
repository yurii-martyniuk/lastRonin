import React from "react";
import {addNewPost, onChangeTextArea} from "../../../../redux/tape-reducer";
import CreatePost from "./СreatePost";
import StoreContext from "../../../../redux/StoreContext";


const CreatePostContainer = () => {


    return (
        <StoreContext.Consumer>
            {store => {
                let alertText = () => {
                    store.dispatch(addNewPost());
                }


                let onChangeArea = (textData) => {
                    store.dispatch(onChangeTextArea(textData));

                }
                return (
                    <CreatePost
                        addNewPost={alertText}
                        onChangeTextArea={onChangeArea}
                        newPostText={store.getState().tape.newPostText}
                    />
                )

            }
            }

        </StoreContext.Consumer>
    )

}

export default CreatePostContainer;