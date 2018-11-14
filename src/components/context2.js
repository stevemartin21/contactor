import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {

    state = {
        contacts: [
            {
                id:1,
                name: 'Bob Smith',
                email: 'bob@gmail.com',
                phone: '555-555-5555'
            },
            {
                id:2 ,
                name: 'Karen Smith',
                email: 'karen@gmail.com',
                phone: '555-555-5555'
            },
            {
                id:3,
                name: 'Larry Smith',
                email: 'larry@gmail.com',
                phone: '555-555-5555'
            },
        ]
    }

    render(){
        return <Context.Provider value={this.state}>
        {this.props.children}
        </Context.Provider>
    }
}

export const Consumer = Context.Consumer;