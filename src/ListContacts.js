import React from 'react';

const ListshowingContacts = (props) => {
  console.log(props);
  const{showingContacts, contacts, clearQuery} = props
  console.log("the showingContacts are!!");
  console.log(showingContacts);
  const getlist = showingContacts.map(contact =>{
    return (
      <div key={contact.id}>
        <ol>
          <li className="contact-list-item">
            <div className="contact-avatar" style={{
              backgroundImage: `url(${contact.avatarURL})`
            }}>
            </div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <button className='contact-remove' onClick={() => props.deleteContact(contact)}></button>
          </li>  
        </ol>
      </div>
    )
  });

  return (
    <div>
      {contacts.length !== showingContacts.length &&(
        <div>
          <p className="contacts-length" onClick={(e) => clearQuery(e)}>Showing {showingContacts.length} of {contacts.length}. click to reset!</p>
        </div>
      )}
      <ol className="contact-list">
        {getlist}
      </ol>
    </div>
  );

}
  
  export default ListshowingContacts;