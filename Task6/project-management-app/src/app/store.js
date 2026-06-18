// import { configureStore, combineReducers } from "@reduxjs/toolkit";

// import authReducer from "../redux/authSlice";
// import projectReducer from "../redux/projectSlice";
// import boardReducer from "../redux/boardSlice";
// import taskReducer from "../redux/taskSlice";
// import userReducer from "../redux/userSlice";
// import notificationReducer from "../redux/notificationSlice";

// import storage from "redux-persist/lib/storage";

// import {
//   persistReducer,
//   persistStore,
// } from "redux-persist";

// const rootReducer = combineReducers({
//   auth: authReducer,
//   projects: projectReducer,
//   boards: boardReducer,
//   tasks: taskReducer,
//   users: userReducer,
//   notifications: notificationReducer,
// });

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(
//   persistConfig,
//   rootReducer
// );

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);

import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../redux/authSlice";
import projectReducer from "../redux/projectSlice";
import boardReducer from "../redux/boardSlice";
import taskReducer from "../redux/taskSlice";
import userReducer from "../redux/userSlice";
import notificationReducer from "../redux/notificationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
    boards: boardReducer,
    tasks: taskReducer,
    users: userReducer,
    notifications: notificationReducer,
  },
});