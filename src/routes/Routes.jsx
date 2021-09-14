import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import NavBar from '../components/NavBar';
import Get from '../pages/Get';
import Register from '../pages/Register';
import NavRouter from './NavRouter';

const Routes = () => (
  <Switch>
    <NavRouter path="/get">
      <Get />
    </NavRouter>
    <NavRouter path="/register">
      <Register />
    </NavRouter>
    <Route path="/">
      <NavBar />
      <App />
    </Route>
  </Switch>
);

export default Routes;
