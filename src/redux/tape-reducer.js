const CREATE_POST = "CREATE_POST";
const CHANGE_POST = 'CHANGE_POST';

const tapeReducer = (state, action) => {
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



export default tapeReducer;