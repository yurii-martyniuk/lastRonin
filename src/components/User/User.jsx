import React from "react";
import './User.scss';
import Avatar from "./Avatar/Avatar";
import Data from "./Data/Data";

const User = () => {
    return(
        <div className="user">
            <Avatar/>
            <Data/>
        </div>
    )
}

export default User;