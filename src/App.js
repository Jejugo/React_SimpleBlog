import React, { Component } from 'react';
import ListContacts from './ListContacts'
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

class App extends Component {

  state = {
    contacts: [
      {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "@karen_isgrigg",
        "avatarURL": "http://localhost:5000/karen.jpg"
      },
      {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "@richardkalehoff",
        "avatarURL": "http://localhost:5000/richard.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "@tylermcginnis",
        "avatarURL": "http://localhost:5000/tyler.jpg"
      }
     ],

     query: ''

  }

  deleteContact = (contact) => {
    this.setState({
      contacts: this.state.contacts.filter(c => {
        return c.id !== contact.id;
      })
    });
  }
  
  componentDidUpdate() {
    console.log("renderizando...");
    console.log(this.state);
  }


  updateQuery = (e) =>{
    this.setState({
      query: e.target.value
    });
  }

  render() {
    const {query, contacts} = this.state

    const showingContacts = query === ''
    ? contacts : contacts.filter(c =>(
      c.name.toLowerCase().includes(query.toLowerCase())
    ));

    console.log("showing contacts are...");
    console.log(showingContacts);

    return (
      <div>
        <SearchBar contacts={this.state.contacts} updateQuery={this.updateQuery} query={this.state.query}></SearchBar>
        <ListContacts contacts={showingContacts} deleteContact={this.deleteContact}></ListContacts>
      </div>
    );
  }
} 

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

export default App;
