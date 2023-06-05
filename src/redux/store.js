import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import authReducer from './slice/authSlice';
import inspectionListReducer from './slice/inspectionListing';

let rootReducer = combineReducers({
  authReducer,
  inspectionListReducer,
});

let store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(logger),
});

export default store;