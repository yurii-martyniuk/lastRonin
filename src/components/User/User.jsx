import React from "react";
import s from './User.module.scss';
import Avatar from "./Avatar/Avatar";
import Data from "./Data/Data";

const User = () => {
    return(
        <div className={s.user}>
            <Avatar/>
            <Data/>
        </div>
    )
}

export default User;