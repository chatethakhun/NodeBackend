import React from 'react';
import { render } from 'react-dom';
import './index.css';

import { browserHistory } from 'react-router';

//import Routes from './routes';
// import { createStore } from 'react-redux'


import HomePage from './containers/HomePage'

render(
      <HomePage />
  ,document.getElementById('root'));


//Routes history={browserHistory}