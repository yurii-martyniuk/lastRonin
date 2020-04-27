import {combineReducers, createStore} from "redux";
import messengerReducer from "./messenger-reducer";
import tapeReducer from "./tape-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    messenger : messengerReducer,
    tape : tapeReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)



export default store