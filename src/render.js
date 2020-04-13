import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createPost} from './redux/state'

export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state} createPost={createPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}

