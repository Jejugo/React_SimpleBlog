import React, { Component } from 'react';
import ListContacts from './ListContacts'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

const SearchBar = (props) => {
  const {updateQuery, query} = props;
  
  return (
    <div className="list-contacts-top">
        <input className="search-contacts" type="text" placeholder="Search Contacts" 
        value={query}
        onChange={(e) => updateQuery(e)}>
        </input>
        <Link to="/create" className='add-contact'></Link>
    </div>
  )
}

ListContacts.propTypes = {

}

export default SearchBar;
