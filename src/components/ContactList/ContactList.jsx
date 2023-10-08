import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button onClick={() => deleteContact(contact.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
