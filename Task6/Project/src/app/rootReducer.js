import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./features/auth/authSlice";
import projectReducer from "./features/projects/projectSlice";
import boardReducer from "./features/boards/boardSlice";
import taskReducer from "./features/tasks/taskSlice";
import userReducer from "./features/users/userSlice";
import notificationReducer from "./features/notifications/notificationSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectReducer,
    boards: boardReducer,
    tasks: taskReducer,
    users: userReducer,
    notifications: notificationReducer,
});

export default rootReducer;