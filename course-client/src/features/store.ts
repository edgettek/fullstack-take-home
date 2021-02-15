import { combineReducers } from "redux";
import {coursesReducer} from "./courses/ducks";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    courses: coursesReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
