import React from "react";
import Home from 'Components/home';
import {About} from 'Components/about';
import { Switch, Route, Link } from 'react-router-dom';

export default class App extends React.Component {
 

  render() {
    console.log(store)
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    )
  }
}