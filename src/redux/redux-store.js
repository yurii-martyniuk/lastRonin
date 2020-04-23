import {combineReducers, createStore} from "redux";
import messengerReducer from "./messenger-reducer";
import tapeReducer from "./tape-reducer";

let reducers = combineReducers({
    messenger : messengerReducer,
    tape : tapeReducer
})

let store = createStore(reducers)



export default store