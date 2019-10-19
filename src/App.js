import React from 'react';

import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shop/shop.component'

import SignAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-up';

import {auth} from '../src/firebase/firebase.utils';

import Header from './components/header/header.component'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user});
      console.log(user)
    })
  }

  componentWillAmount(){
    this.unsubscribeFromAuth();
  }

  render(){

    return (
      <div>
  
        {/* <HomePage /> */}
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path = '/' component = {HomePage} /> 
          <Route exact path = '/shop' component = {ShopPage} /> 
          <Route exact path = '/signin' component = {SignAndSignUpPage} /> 
        </Switch>
  
      </div>
    );
  }
}

export default App;
