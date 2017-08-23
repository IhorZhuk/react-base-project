const css = require('./scss/app.scss');

import React from 'react';
import {render} from 'react-dom';
import {Sample} from 'sample'

class App extends React.Component {
  render() {
    return(
      <div><Sample/></div>
    )
  }
}

render(<App/>, document.getElementById('app'))