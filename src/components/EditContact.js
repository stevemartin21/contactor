import React, { Component } from 'react';
import { Consumer } from '../context';
// import uuid from 'uuid';
import classnames from 'classnames';

// import {Link } from 'react-router-dom';

import axios from 'axios';

export default class EditContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
    
        const contact = res.data;
    
        this.setState({
          name: contact.name,
          email: contact.email,
          phone: contact.phone
        });
      }

    onSubmit = async  (dispatch, e) => {
        e.preventDefault();
        console.log(this.state);
        const {name, email, phone} = this.state;

        //  Check for missing elements

        if( name === ''){
            this.setState({errors: {name: 'Name is required'}})
            return
        }

        if( email === ''){
            this.setState({errors: {email: 'Email is required'}})
            return
        }

        if( phone === ''){
            this.setState({errors: {phone: 'Phone is required'}})
            return
        }

        const updContact = {
            name,
            email,
            phone
          };

        const { id} = this.props.match.params;

        const res = await axios.put(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            updContact
          );

          dispatch({ type: 'UPDATE_CONTACT', payload: res.data });


        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })

        this.props.history.push('/')
    }

    onChange = e => this.setState({[e.target.name] : e.target.value})


  render() {
      const { name, email, phone, errors} = this.state;

    return (

        <Consumer>

            {value => {
                const {dispatch } = value;
                return (
                <div className='card mb-3'>
                <div className='card-header'>Edit Contact</div>
                <div className='card-body'>
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                        <div className='form-group'>
                            <label htmlFor='name'>Name</label>
                            <input 
                             className={classnames('form-control form-control-lg',
                             {'is-invalid': errors.name})}
                            type='text'
                            placeholder='Enter Name'
                            name='name'
                            value={name}
                            onChange = {this.onChange}
                            error={errors.name}
                           />
                            {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input 
                           className={classnames('form-control form-control-lg',
                           {'is-invalid': errors.email})}
                            type='email'
                            placeholder='Enter Email'
                            name='email'
                            value={email}
                            onChange = {this.onChange}
                            error={errors.email}
                            >
                            </input>
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
        
                        <div className='form-group'>
                            <label htmlFor='phone'>Phone</label>
                            <input 
                            className={classnames('form-control form-control-lg',
                            {'is-invalid': errors.phone})}
                            type='text'
                            placeholder='Enter Phone'
                            name='phone'
                            value={phone}
                            onChange = {this.onChange}
                            error={errors.phone}
                            >
                            </input>
                            {errors.phone && <div className='invalid-feedback'>{errors.phone}</div>}
                        </div>
                        <input type='submit' className='btn btn-block btn-primary' value='Update Contact'></input>
                    </form>
                </div>
              </div>
                )
            }}
        </Consumer>
    )
    
  }
}
