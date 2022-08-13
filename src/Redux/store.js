import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import userReducer from "./userReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    users: userReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
));

window.store = store


export default store