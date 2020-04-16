import {combineReducers, createStore} from "redux";
import messengerReducer from "./messenger-reducer";
import tapeReducer from "./tape-reducer";

let redusers = combineReducers({
    messenger : messengerReducer,
    tape : tapeReducer
})

let store = createStore(redusers)

export default store