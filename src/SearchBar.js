import React, { Component } from 'react';
import ListContacts from './ListContacts'
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  const {contacts, updateQuery, query} = props;
  
  return (
    <div className="list-contacts-top">
        <input className="search-contacts" type="text" placeholder="Search Contacts" 
        value={query}
        onChange={(e) => updateQuery(e)}>
        </input>
    </div>
  )
}

ListContacts.propTypes = {

}

export default SearchBar;
