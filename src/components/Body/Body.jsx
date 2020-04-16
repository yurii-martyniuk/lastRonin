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
                {/*<Route exact path="/" component={Tape} />*/}
                <Route path="/tape" render={ () => <Tape
                    messageData={props.messageData}
                    newPostText={props.newPostText}
                    dispatch={props.dispatch}
                />} />
                <Route path="/messenger" render={ () => <Messenger
                    dialogData={props.dialogData}
                    newMessageData={props.newMessageData}
                    senderData={props.senderData}
                    dispatch={props.dispatch}
                />} />
            </div>

    )
};

export default Body;