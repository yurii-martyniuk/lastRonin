const UPDATE_MESSAGE_AREA = 'UPDATE_MESSAGE_AREA';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

let initialState = {
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
}

const  messengerReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_AREA: {
            return {
                ...state,
                newMessageData: action.text
            }
        }

        case ADD_NEW_MESSAGE:{
            let newMessage = {
                dialog : state.newMessageData
            };
            return{
                ...state,
                dialogData: [...state.dialogData, newMessage],
                newMessageData: ''
            }

        }

        default:
            return state
    }

}

export const updateMessageArea = (textData) => {
    return{
        type: UPDATE_MESSAGE_AREA,
        text: textData
    }
}
export const addNewMessage = () => {
    return {
        type: ADD_NEW_MESSAGE
    }
}

export default messengerReducer;