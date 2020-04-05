import React from "react";
import "./Nav.scss";
import Profile from "./Profile/Profile";
import Messages from "./Messages/Messages";

const Nav = () => {
    return(
        <nav>
            <Profile/>
            <Messages/>
        </nav>
    );
};

export default Nav;
