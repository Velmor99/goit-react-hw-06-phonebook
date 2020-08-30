import { combineReducers } from 'redux';
import { ADD_CONTACT, REMOVE_CONTACT, FILTER } from '../actionTypes';
import { createReducer } from '@reduxjs/toolkit';

const itemsTestReducer = createReducer([], {
	[ADD_CONTACT]: (state, action) => action.payload.contact.name === '' || action.payload.contact.number === '' ? (state) : [ ...state, action.payload.contact ],
	[REMOVE_CONTACT]: (state, action) => state.filter((contact) => contact.id !== action.payload)
});

const filter = createReducer('', {
	[FILTER]: (state, action) => action.payload
});

export default combineReducers({
	items: itemsTestReducer,
	filter
});
