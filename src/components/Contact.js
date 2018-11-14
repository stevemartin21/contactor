import React, { Component } from 'react'
import { Consumer } from '../context';

import axios from 'axios';

import { Link } from 'react-router-dom'


 class Contact extends Component {

    state = {

        ShowContactInfo: true

    }

    onShowClick()  {
        console.log(this.state);
        this.setState({ShowContactInfo: !this.state.ShowContactInfo})
    }

    onDeleteClick = async (id, dispatch) => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({ type: 'DELETE_CONTACT', payload: id });
      } catch (e) {
        dispatch({ type: 'DELETE_CONTACT', payload: id });
      }
    }

  render() {
    const {id, name, email, phone} = this.props.contact;

    const {ShowContactInfo} = this.state;
    return (

      <Consumer >
        {value => {
          const { dispatch } = value;
          return (
            <div className='card card-body mb-3 unique-color text-white'>
            <h4>{name} <i onClick={this.onShowClick.bind(this)} style={{cursor: 'pointer'}} className='fa fa-sort-down'></i>
            
            <i className=' fa fa-times  float-right white-text' onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
            <Link to={`contact/edit/${id}`}>
            <i className='fa fa-pencil-square-o float-right mr-3 white-text '></i>
            </Link>
            </h4>
            {ShowContactInfo ? (
                <ul className='list-group'>
                <li className='list-group-item green darken-4 ' >{email}</li>
                <li className='list-group-item success-color-dark'>{phone}</li>
            </ul>
            ) : null}
            
          </div>
          )
        }}
      </Consumer>
    
    )
  }
}

export default Contact;