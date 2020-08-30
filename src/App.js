import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import styles from './styles/title.module.css';
import filtercss from './components/Lists/filter.module.css';
// import Notification from './components/notification/notification';
// import notify from './styles/notify.module.css';
import { CSSTransition } from 'react-transition-group';

class App extends Component {
	// state = {
	// 	notification: false,
	// 	emptyField: false
	// };

	// componentDidMount() {
	// 	const localStorContacts = localStorage.getItem('contacts');

	// 	if (localStorContacts) {
	// 		this.setState({
	// 			contacts: JSON.parse(localStorContacts)
	// 		});
	// 	}
	// }

	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevState !== this.state.contacts) {
	// 		localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
	// 	}
	// }

	// notifyShow = () => {
	// 	this.setState({
	// 		notification: true
	// 	});
	// 	setTimeout(
	// 		() =>
	// 			this.setState({
	// 				notification: false
	// 			}),
	// 		1500
	// 	);
	// };

	// fieldShow = () => {
	// 	this.setState({
	// 		emptyField: true
	// 	});
	// 	setTimeout(
	// 		() =>
	// 			this.setState({
	// 				emptyField: false
	// 			}),
	// 		1500
	// 	);
	// };

	render() {
		return (
			<>
				{/* <CSSTransition in={this.state.notification === true} timeout={250} classNames={notify} unmountOnExit>
					<Notification text={'this name is already in contacts'} />
				</CSSTransition>
				<CSSTransition in={this.state.emptyField === true} timeout={250} classNames={notify} unmountOnExit>
					<Notification text={'One of the fields is not filled'} />
				</CSSTransition> */}
				<div>
					<CSSTransition in={true} classNames={styles} timeout={700} appear={true} unmountOnExit>
						<h2 className={styles.title}>Phonebook</h2>
					</CSSTransition>
					<ContactForm />
					<CSSTransition in={true} appear={true} classNames={filtercss} timeout={250} unmountOnExit>
						<Filter />
					</CSSTransition>
					<ContactList />
				</div>
			</>
		);
	}
}

export default App;
