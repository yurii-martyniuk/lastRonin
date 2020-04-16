import React from "react";
import s from "./Messenger.module.scss"
import Dialogs from "./Dialogs/Dialogs";
import Senders from "./Senders/Senders";



const Messenger = (props) => {
    return(
        <div className={s.messenger}>
            <Senders senderData={props.senderData}/>
            <Dialogs
                dialogData={props.dialogData}
                newMessageData={props.newMessageData}
                dispatch={props.dispatch}
            />
        </div>
    )
};

export default Messenger

