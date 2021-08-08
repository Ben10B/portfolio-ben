import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      {/* <Route exact path="/web"/>
      <Route exact path="/graphic"/>
      <Route exact path="/media"/> */}
    </Switch>
  )
}
export default Routes;