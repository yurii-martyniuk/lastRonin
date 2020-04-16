import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import User from "./components/User/User";
import Nav from "./components/Nav/Nav";
import {BrowserRouter} from "react-router-dom";
import store, {onChangePost} from "./redux/store";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <User/>
                <Nav/>
                <Body
                    dialogData={props.state.messenger.dialogData}
                    senderData={props.state.messenger.senderData}
                    newMessageData={props.state.messenger.newMessageData}
                    messageData={props.state.tape.messageData}
                    newPostText={props.state.tape.newPostText}
                    dispatch={props.dispatch}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
