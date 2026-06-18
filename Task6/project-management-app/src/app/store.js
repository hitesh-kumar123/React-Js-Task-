import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authReducer from "../redux/authSlice";
import projectReducer from "../redux/projectSlice";
import boardReducer from "../redux/boardSlice";
import taskReducer from "../redux/taskSlice";
import userReducer from "../redux/userSlice";
import notificationReducer from "../redux/notificationSlice";

import {
  persistStore,
  persistReducer,
} from "redux-persist";

import storage from "redux-persist/es/storage";

const rootReducer = combineReducers({
  auth: authReducer,
  projects: projectReducer,
  boards: boardReducer,
  tasks: taskReducer,
  users: userReducer,
  notifications: notificationReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "auth",
    "projects",
    "boards",
    "tasks",
    "users",
  ],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor =
  persistStore(store);