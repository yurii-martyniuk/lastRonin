import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import StoreContext from "./redux/StoreContext";


export let rerenderTree = (state) => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>,
        document.getElementById('root')
    );

}

rerenderTree(store.getState());
store.subscribe(() => {
    rerenderTree(store.getState());
});


// eslint-disable-next-line no-undef

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
