import messengerReducer from "./messenger-reducer";
import tapeReducer from "./tape-reducer";

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
            newMessageData : '',
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
    subscribe(observer) {
        this._rerenderTree = observer
    },
    dispatch(action) {
        this._state.messenger = messengerReducer(this._state.messenger, action)
        this._state.tape = tapeReducer(this._state.tape, action)

        this._rerenderTree(this._state);
    }


}





export default store;