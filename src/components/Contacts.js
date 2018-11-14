import React, { Component } from 'react'
import  Contact  from './Contact';
import { Consumer } from '../context';

export default class Contacts extends Component {


   


  render() {

    return (
        <Consumer>
            {value => {
                 const { contacts} = value;
                 console.log(contacts);
                return <React.Fragment>

                  <h1 className='text-center elegant-color text-white mb-3 pt-3 pb-3'>The Ultimate Contact Manager</h1>
                    
                {contacts.map( contact => (
                   
                    <Contact 
                    key={contact.id}
                    contact ={contact}
                    />
                ))}
              </React.Fragment>
            }}
        </Consumer>
    )
  }
}
