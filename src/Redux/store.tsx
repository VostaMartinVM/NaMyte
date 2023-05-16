import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit"
import languageReducer from "./Slices/Languages"
import storage from "redux-persist/es/storage"
import { persistReducer } from "redux-persist"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"
import thunk from "redux-thunk"

const reducers = combineReducers({ language: languageReducer })

const persistConfig = { key: "route", storage }
const persistedReducer = persistReducer(persistConfig, reducers)
composeWithDevTools(applyMiddleware(logger))
const store = configureStore({ reducer: persistedReducer, middleware: [thunk] })

export type RootState = ReturnType<typeof store.getState>
export default store
