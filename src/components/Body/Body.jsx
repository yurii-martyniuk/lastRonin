import React from "react";
import s from  "./Body.module.scss"
import Tape from "./Tape/Tape";
import Messenger from "./Messenger/Messenger";
import {Route} from "react-router-dom";



const Body = (props) => {
    return(
            <div className={s.body}>
                {/*<Route exact path="/" component={Tape} />*/}
                <Route path="/tape" render={ () => <Tape
                    messageData={props.messageData}
                />} />
                <Route path="/messenger" render={ () => <Messenger
                    dialogData={props.dialogData}
                    senderData={props.senderData}
                />} />
            </div>

    )
};

export default Body;