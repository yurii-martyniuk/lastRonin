const CREATE_POST = "CREATE_POST";
const CHANGE_POST = 'CHANGE_POST';

let initialState = {
    messageData: [
        {message: "Hi, I just try to use props"},
        {message: "And here too!"},
        {message: "It's all for New Balance"}
    ],
    newPostText: ''
}

const tapeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            let textData = {
                message: state.newPostText
            };
            state.messageData.push(textData);
            state.newPostText = '';
            return state;
        case CHANGE_POST:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }

}

export const addNewPost = () => {
    return{
        type: CREATE_POST
    };
}
export const  onChangeTextArea = (textData) => {
    return {
        type : CHANGE_POST,
        text: textData
    };
}

export default tapeReducer;