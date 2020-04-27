import React from "react";
import {addNewMessage, updateMessageArea} from "../../../../redux/messenger-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        dialogData : state.messenger.dialogData,
        newMessageData : state.messenger.newMessageData
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateMessageArea : (addText) => {
            dispatch(updateMessageArea(addText))
        },
        addNewMessage: () => {
            dispatch(addNewMessage())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;