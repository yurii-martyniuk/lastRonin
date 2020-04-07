import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import User from "./components/User/User";
import Nav from "./components/Nav/Nav";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <User/>
                <Nav/>
                <Body/>
            </div>
        </BrowserRouter>
    );
}

export default App;
