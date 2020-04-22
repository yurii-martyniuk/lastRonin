import React from "react";
import {addNewMessage, updateMessageArea} from "../../../../redux/messenger-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {


    let state = props.store.getState();
    console.log(state)

    let addMessageToTheDialog = () => { //добавляет значение полученые с changingWatcher в state
        props.store.dispatch(addNewMessage())
    }

    let changingWatcher = (addText) => {  //наблюдает за изменениями в textarea
        props.store.dispatch(updateMessageArea(addText))
    }

    return(<Dialogs
        updateMessageArea={changingWatcher}
        addNewMessage={addMessageToTheDialog}
        dialogData={state.messenger.dialogData}
        newMessageData={state.messenger.newMessageData}
    />);
};

export default DialogsContainer;