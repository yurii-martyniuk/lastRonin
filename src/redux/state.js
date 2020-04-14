import {rerenderTree} from "../render";

let state = {
    messenger: {
        dialogData : [
            {dialog: 'Hi, today i try to refract my coffee'},
            {dialog: 'And this moment is really easy'},
            {dialog: 'Just dream about Redux'},
            {dialog: 'I hope, that it will be easy like this'},
            {dialog: 'See you soon!'},
        ],
        senderData : [
            {id: 1, name: "Petr"},
            {id: 2, name: "Alex"},
            {id: 3, name: "Johan"},
        ]
    },

    tape: {
        messageData : [
            {message: "Hi, I just try to use props"},
            {message: "And here too!"},
            {message: "It's all for New Balance"}
        ],
        newPostText : ''
    }
}

window.state = state;

export let createPost = () => {

    let textData = {
        message: state.tape.newPostText
    };
    state.tape.messageData.push(textData)
    rerenderTree(state);
};

export let onChangePost = (text) => {
    state.tape.newPostText = text;
    rerenderTree(state);
}



export default state;