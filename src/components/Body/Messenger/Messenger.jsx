import React from "react";
import s from "./Messenger.module.scss"
import Dialogs from "./Dialogs/Dialogs";
import Senders from "./Senders/Senders";

const Messenger = () => {
    return(
        <div className={s.messenger}>
            <Senders/>
            <Dialogs/>
        </div>
    )
};

export default Messenger

