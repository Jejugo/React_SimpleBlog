import React from 'react';

const ListContacts = (props) => {
  console.log(props);
  const{contacts} = props
  console.log("the contacts are!!");
  console.log(contacts);
  const getlist = contacts.map(contact =>{
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
    <ol className="contact-list">
      {getlist}
    </ol>
  );

}
  
  export default ListContacts;