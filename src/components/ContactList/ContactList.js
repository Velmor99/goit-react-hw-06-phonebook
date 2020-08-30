import React from 'react';
import styles from './list.module.css'
import List from '../Lists/Lists'
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import contactsActions from '../../redux/contacts/contactActions';

function ContactList({ filteredArr }) {
	return (
		<TransitionGroup component="ul" className={styles.contactList}>
			{filteredArr.map((item) => {
				return (
					<CSSTransition key={item.id}
					timeout={250}
					classNames={styles}
					unmountOnExit
					>
                    <List 
					id={item.id}
					/>
					</CSSTransition>
					
				);
			})}
		</TransitionGroup>
	);
}

const mapStateToProps = state => ({
	filteredArr: state.contacts.items.filter((contact) => contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase()))
})

const mapDispatchToProps = {
	hclick: contactsActions.removeContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
