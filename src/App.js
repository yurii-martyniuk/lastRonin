import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import User from "./components/User/User";
import Nav from "./components/Nav/Nav";
import {BrowserRouter} from "react-router-dom";
import {onChangePost} from "./redux/state";


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
                    messageData={props.state.tape.messageData}
                    newPostText={props.state.tape.newPostText}
                    createPost={props.createPost}
                    onChangePost={props.onChangePost}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
