import React from "react";
import s from  "./Body.module.scss"
import Tape from "./Tape/Tape";
import Messenger from "./Messenger/Messenger";
import {Route} from "react-router-dom";

const Body = () => {
    return(

            <div className={s.body}>
                <Route path="/tape" component={Tape} />
                <Route path="/messenger"component={Messenger} />
            </div>

    )
};

export default Body;