import React from "react";
import s from "./Messenger.module.scss"
import Senders from "./Senders/Senders";
import DialogsContainer from "./Dialogs/DialogsContainer";



const Messenger = (props) => {
    return(
        <div className={s.messenger}>
            <Senders store={props.store}/>
            <DialogsContainer
                store={props.store}
            />
        </div>
    )
};

export default Messenger

