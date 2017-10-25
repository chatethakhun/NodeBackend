import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

<<<<<<< HEAD
import App from './components/App/App';
import Home from './components/Home/Home';
import Pages from './components/Page/Pages';
import Form from './components/Form/Form';
=======
import App from './components/App';
>>>>>>> j01


const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path='/'
           component={App}>
<<<<<<< HEAD
      <IndexRoute component={Home} />
      <Route path='pages'
           component={Pages} />
      <Route path='form'
           component={Form} />
=======
>>>>>>> j01
    </Route>
  </Router>

);

export default Routes

// <IndexRoute component={App} />