
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import authReducer from "./slice/authSlice";


let rootReducer = combineReducers({
  auth: authReducer,
});


let store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck:false}).concat(logger)
});


export default store;
