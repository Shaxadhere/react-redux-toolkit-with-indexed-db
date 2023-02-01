import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./slices/userSlice";
import createIdbStorage from "@piotr-cz/redux-persist-idb-storage";

const rootReducer = combineReducers({
  user: userReducer
});

const persistConfig = {
  key: "root",
  storage: createIdbStorage({ name: "myApp", storeName: "keyval" }),
  serialize: false, // Data serialization is not required and disabling it allows you to inspect storage value in DevTools; Available since redux-persist@5.4.0
  deserialize: false // Required to bear same value as `serialize` since redux-persist@6.0
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
