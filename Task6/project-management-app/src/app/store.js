import { configureStore } from "@reduxjs/toolkit";

import storageImport from "redux-persist/lib/storage";

import {
    persistStore,
    persistReducer,
} from "redux-persist";

import rootReducer from "./rootReducer";

const storage = storageImport?.default ?? storageImport;

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer =
    persistReducer(
        persistConfig,
        rootReducer
    );


export const store =
    configureStore({
        reducer: persistedReducer,

        middleware: (
            getDefaultMiddleware
        ) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    });

export const persistor =
    persistStore(store);