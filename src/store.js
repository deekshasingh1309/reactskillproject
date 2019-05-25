import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import users from "./redux/users/userReducer";
import Job from "./redux/jobs/jobReducer";


export default createStore(
    combineReducers({
        user:users,
        jobs:Job

    }),
    applyMiddleware(thunk)
);

