import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../redux/authSlice";
import projectReducer from "../redux/projectSlice";
import boardReducer from "../redux/boardSlice";
import taskReducer from "../redux/taskSlice";


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    boards: boardReducer,
    tasks: taskReducer,

});
console.log(projectReducer);

export default rootReducer;
