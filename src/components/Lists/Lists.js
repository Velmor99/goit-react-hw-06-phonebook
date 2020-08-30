import React from 'react';
import styles from '../ContactList/list.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactActions';

const List = ({ id, name, number, click }) => {
	return (
		<li key={id} className={styles.list}>
			{name}: {number}
			<button className={styles.delete} onClick={click} />
		</li>
	);
};

const mapStateToProps = (state, ownProps) => {
	const item = state.contacts.items.find((item) => item.id === ownProps.id);
	return {
		...item
	};
};
const mapDispatchToProps = (dispatch, ownProps) => ({
	click: () => dispatch(contactsActions.removeContact(ownProps.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
