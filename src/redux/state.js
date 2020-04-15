let store = {
    _state: {
        messenger: {
            dialogData: [
                {dialog: 'Hi, today i try to refract my coffee'},
                {dialog: 'And this moment is really easy'},
                {dialog: 'Just dream about Redux'},
                {dialog: 'I hope, that it will be easy like this'},
                {dialog: 'See you soon!'},
            ],
            senderData: [
                {id: 1, name: "Petr"},
                {id: 2, name: "Alex"},
                {id: 3, name: "Johan"},
            ]
        },

        tape: {
            messageData: [
                {message: "Hi, I just try to use props"},
                {message: "And here too!"},
                {message: "It's all for New Balance"}
            ],
            newPostText: ''
        }
    },
    getState(){
        return this._state
    },
    _rerenderTree(){
        console.log("rerender!")
    },
    createPost() {

        let textData = {
            message: this._state.tape.newPostText
        };
        this._state.tape.messageData.push(textData)
        this._rerenderTree(this._state);
    },
    onChangePost(text) {
        this._state.tape.newPostText = text;
        this._rerenderTree(this._state);
    },
    subscribe(observer) {
        this._rerenderTree = observer
    }
}


export default store;