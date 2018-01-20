const css = require('./scss/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import {App} from 'Components/app';

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('app'))
