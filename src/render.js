import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createPost, onChangePost} from './redux/state'

export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                createPost={createPost}
                onChangePost={onChangePost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}

