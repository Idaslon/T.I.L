import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Rocket from './pages/Rocket'

const routes = () => (
  <Switch>
    <Route path='/home' component={Home}/>
    <Route path='/rocket'component={Rocket} />
  </Switch>
)


export default routes;
