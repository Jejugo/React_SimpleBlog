import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ImageInput from './ImageInput'
import serializeForm from 'form-serialize';

class CreateContact extends Component {

  handleSubmit = (e) => {
      e.preventDefault();
      const values = serializeForm(e.target, {hash: true});
      
      if (this.props.addContact){
          this.props.addContact(values);
      }
  }
  render() {
        return (
            <div className="">
                <Link className='close-create-contact' to='/'></Link>
                <form onSubmit={this.handleSubmit} className="create-contact-form">
                    <ImageInput className="create-contact-avatar-input" name='avatarURL' maxHeight={64}></ImageInput>
                    <div className='create-contact-details'>
                        <input type='text' name='name' placeholder='Name'></input>
                        <input type='text' name='handle' placeholder='Handle'></input>
                        <button>Add Contact</button>
                    </div>
                </form>
            </div>
        )
    }
}

CreateContact.propTypes = {

}

export default CreateContact;
