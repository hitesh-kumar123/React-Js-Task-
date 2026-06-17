import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../redux/authSlice";
import projectReducer from "../redux/projectSlice";
import boardReducer from "../redux/boardSlice";
import taskReducer from "../redux/taskSlice";
import userReducer from "../redux/userSlice";
import notificationReducer from "../redux/notificationSlice";

const rootReducer =
  combineReducers({
    auth: authReducer,

    projects:
      projectReducer,

    boards:
      boardReducer,

    tasks:
      taskReducer,

    users:
      userReducer,

    notifications:
      notificationReducer,
  });

export default rootReducer;