import React, { Component } from 'react';
import ListContacts from './ListContacts'
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import CreateContact from './CreateContact'
import * as ContactsAPI from '../src/utils/ContactsAPI'
import {Route} from 'react-router-dom'

class App extends Component {

  state = {
    contacts: [],
    query: '',

  }

  componentDidMount() {
    ContactsAPI.getAll()
      .then(contacts => {
        this.setState(() =>({
          contacts
        }));
      });
    
  }

  deleteContact = (contact) => {
    this.setState({
      contacts: this.state.contacts.filter(c => {
        return c.id !== contact.id;
      })
    });

    ContactsAPI.remove(contact)
  }

  addContact = (contact) => {
    ContactsAPI.create(contact)
    .then((contact) => {
      this.setState((previousState) => ({
        contacts: previousState.contacts.concat([contact])
      }));
    });
  }

  updateQuery = (e) =>{
    this.setState({
      query: e.target.value
    });
  }

  clearQuery = (e) => {
    e.target.value = ''
    this.updateQuery(e);
  }

  render() {
    const {query, contacts, screen} = this.state

    const showingContacts = query === ''
    ? contacts : contacts.filter(c =>(
      c.name.toLowerCase().includes(query.toLowerCase())
    ));


    return (
      <div>
        <Route exact path='/' render={() => (
          <div>
          <SearchBar contacts={this.state.contacts} updateQuery={this.updateQuery} query={this.state.query}></SearchBar>
          <ListContacts showingContacts={showingContacts} deleteContact={this.deleteContact} contacts={this.state.contacts} clearQuery={this.clearQuery}></ListContacts>
        </div>
        )}></Route>
        <Route path='/create' render={({history}) => (
          <CreateContact addContact={(contact) => {
            this.addContact(contact)
            history.push('/')
          }}></CreateContact>
        )}>
        </Route>
      </div>
    );
  }
} 

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default App;
