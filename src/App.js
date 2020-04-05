import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import User from "./components/User/User";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <User/>
      <Nav/>
      <Body/>
    </div>
  );
}

export default App;
