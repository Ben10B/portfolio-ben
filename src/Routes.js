import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home';
import WebPage from './pages/web';
import GraphicPage from './pages/graphic';
import MediaPage from './pages/media';
import Project from './pages/project';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/web" component={WebPage}/>
      <Route exact path="/graphic" component={GraphicPage}/>
      <Route exact path="/media" component={MediaPage}/>
      <Route path="/:type/project/:title" component={Project}/>
    </Switch>
  )
}
export default Routes;