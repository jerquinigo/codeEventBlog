import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
//Component Imports
import Feed from './components/Feed';
import Login from './components/Login';
import {PrivateRoute} from './utils/AuthRouting.js'

import './App.css';

export default function App () {
  const [ state, setState ]  = useState(null);
  return (
    <div className="App">
      <div>Hello, Welcome to codeEventBlog (we camelCase in these parts)</div>
      <Switch>
      <Route path='/login' component={Login} />
      <PrivateRoute exact path="/feed" component={Feed}/>


      </Switch>
      
    </div>
  
  )

}
