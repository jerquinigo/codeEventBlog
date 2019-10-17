import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
//Component Imports
import Feed from './components/Feed';
import Login from './components/Login';
import {PrivateRoute} from './utils/AuthRouting.js'

import './App.css';

class App extends Component {

  state = {
    test:""
  }

  render(){

  return (
    <div className="App">
      <Switch>
      <Route path='/login' component={Login} />
      <PrivateRoute exact path="/feed" component={Feed}/>


      </Switch>
      
    </div>
  );
}

}

export default App;


{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
</header> */}