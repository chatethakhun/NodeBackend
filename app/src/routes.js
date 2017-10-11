import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App/App';
import Home from './components/Home/Home';
import Pages from './components/Page/Pages';


const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path='/'
           component={App}>
      <IndexRoute component={Home} />
      <Route path='pages'
           component={Pages} />
    </Route>
  </Router>

);

export default Routes;