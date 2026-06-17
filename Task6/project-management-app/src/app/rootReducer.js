import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../redux/authSlice";
import projectReducer from "../redux/projectSlice";
import boardReducer from "../redux/boardSlice";


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    boards: boardReducer,

});
console.log(projectReducer);

export default rootReducer;