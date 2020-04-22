import React from "react";
import {addNewMessage, updateMessageArea} from "../../../../redux/messenger-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../../redux/StoreContext";

const DialogsContainer = (props) => {
    return(
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState();

                    let addMessageToTheDialog = () => { //добавляет значение полученые с changingWatcher в state
                        store.dispatch(addNewMessage())
                    }

                    let changingWatcher = (addText) => {  //наблюдает за изменениями в textarea
                        store.dispatch(updateMessageArea(addText))
                    }
                    return(<Dialogs
                        updateMessageArea={changingWatcher}
                        addNewMessage={addMessageToTheDialog}
                        dialogData={state.messenger.dialogData}
                        newMessageData={state.messenger.newMessageData}
                    />);
                }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;