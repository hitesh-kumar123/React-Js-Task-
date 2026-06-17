import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../redux/authSlice";
import projectReducer from "../redux/projectSlice";
import boardReducer from "../redux/boardSlice";
import taskReducer from "../redux/taskSlice";
import notificationReducer
    from "../redux/notificationSlice";
import userReducer
    from "../redux/userSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    boards: boardReducer,
    tasks: taskReducer,
    notifications:
        notificationReducer,

    users: userReducer,

});
console.log(projectReducer);

export default rootReducer;
