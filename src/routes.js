import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Locations from './pages/Locations';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/locations' component={Locations}/>
      </Switch>
    </Router>
  )
}