import React from 'react';
import styles from './filter.module.css';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactActions';

function Filter({ value, onChangeFilter }) {
	return (
		<form className={styles.form}>
			<label className={styles.label}>
				Find contacts by name
				<br />
				<input
					className={styles.filterInput}
					type="text"
					value={value}
					onChange={(e) => onChangeFilter(e.target.value)}
				/>
			</label>
		</form>
	);
}

const mapDispatchToProps = {
	onChangeFilter: contactsActions.changeFilter
};
const mapStateToProps = (state) => ({
	value: state.contacts.filter
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
