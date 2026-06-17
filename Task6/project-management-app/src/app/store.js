import {
    configureStore,
} from "@reduxjs/toolkit";

import * as createWebStorageImport from "redux-persist/lib/storage/createWebStorage";

import {
    persistStore,
    persistReducer,
} from "redux-persist";

import rootReducer from "./rootReducer";

const createWebStorage = createWebStorageImport?.default ?? createWebStorageImport;
const storage = createWebStorage("local");

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

        reducer:
            persistedReducer,

        middleware:
            (
                getDefaultMiddleware
            ) =>
                getDefaultMiddleware({
                    serializableCheck:
                        false,
                }),
    });

export const persistor =
    persistStore(store);