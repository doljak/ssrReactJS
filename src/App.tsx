import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Todo from './todo';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/todo" component={Todo} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default App;
