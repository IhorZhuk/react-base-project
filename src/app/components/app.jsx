import React from "react";
import Home from 'Components/home';
import Header from 'Components/header';
import About from 'Components/about';
import { Switch, Route} from 'react-router-dom';

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    )
  }
}