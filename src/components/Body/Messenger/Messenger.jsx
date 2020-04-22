import React from "react";
import s from "./Messenger.module.scss"
import DialogsContainer from "./Dialogs/DialogsContainer";
import SendersContainer from "./Senders/SendersContainer";



const Messenger = (props) => {
    return(
        <div className={s.messenger}>
            <SendersContainer/>
            <DialogsContainer/>
        </div>
    )
};

export default Messenger

