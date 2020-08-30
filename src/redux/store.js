import { combineReducers } from 'redux';
import contactsReducer from './reducers/contactsReducers';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	contacts: contactsReducer
});

const store = configureStore({
	reducer: rootReducer
});

export default store;
