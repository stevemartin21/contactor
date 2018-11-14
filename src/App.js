import React, { Component } from 'react';
// import { Button } from "mdbreact";
// import logo from './logo.png';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import  Contacts  from './components/Contacts';
import  About  from './components/About';
import  Header  from './components/Header';
import  FooterComp  from './components/Footer';
import  AddContact  from './components/AddContact';
import  EditContact  from './components/EditContact';
import  NotFound  from './components/NotFound';

import { Provider } from './context';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
      <div className="App  ">
        <Header branding='Contact Manager' />
        <div className='container'>
            <Switch>
              <Route exact path='/' component={Contacts} />
              <Route exact path='/contact/add' component={AddContact} />
              <Route exact path='/contact/edit/:id' component={EditContact} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound} />
            </Switch>
        </div>
        <FooterComp />
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;