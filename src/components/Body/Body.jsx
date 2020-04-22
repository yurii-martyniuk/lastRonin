import React from "react";
import s from  "./Body.module.scss"
import Tape from "./Tape/Tape";
import Messenger from "./Messenger/Messenger";
import {Route} from "react-router-dom";
import {onChangePost} from "../../redux/store";
import App from "../../App";



const Body = (props) => {
    return(
            <div className={s.body}>
                <Route path="/tape" render={ () => <Tape
                    store={props.store}
                />} />
                <Route path="/messenger" render={ () => <Messenger
                    store={props.store}
                />} />
            </div>

    )
};

export default Body;