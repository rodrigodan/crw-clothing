import React from 'react';

import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HostsPage = () => (
  <h1>
    Hats Page
  </h1>
)

function App() {
  return (
    <div>

      {/* <HomePage /> */}

      <Switch>
        <Route exact path = '/' component = {HomePage} /> 
        <Route exact path = '/hats' component = {HostsPage} /> 
      </Switch>

    </div>
  );
}

export default App;
