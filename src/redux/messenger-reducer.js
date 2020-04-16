const UPDATE_MESSAGE_AREA = 'UPDATE_MESSAGE_AREA';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

const  messengerReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_AREA:
            state.newMessageData = action.text
            return state
        case ADD_NEW_MESSAGE:
            let newMessage = {
                dialog : state.newMessageData

            };
            state.dialogData.push(newMessage)
            state.newMessageData = ''
            return state
        default:
            return state
    }

}


export default messengerReducer;