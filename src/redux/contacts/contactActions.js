import { v4 as uuidv4 } from 'uuid';
import { ADD_CONTACT, REMOVE_CONTACT, FILTER } from '../actionTypes';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction(ADD_CONTACT, (name, number) => ({
	payload: { contact: { id: uuidv4(), name: name, number: number } }
}));

const removeContact = createAction(REMOVE_CONTACT);

const changeFilter = createAction(FILTER);

export default {
	addContact,
	removeContact,
	changeFilter
};
