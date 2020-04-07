import React from "react";
import s from "./Nav.module.scss";
import {NavLink} from "react-router-dom";
// import Profile from "./Profile/Profile";
// import Messages from "./Messages/Messages";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/tape" className={s.link} activeClassName={s.active}>
                Tape
            </NavLink>
            <NavLink to="/messenger" className={s.link} activeClassName={s.active}>
                Messenger
            </NavLink>
        </nav>
    );
};

export default Nav;
