import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
//Component Imports
import Feed from './components/Feed';
import Login from './components/Login';

import './App.css';

class App extends Component {

  state = {
    test:""
  }

  render(){

  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Feed} />
      <Route path='/login' component={Login} />


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