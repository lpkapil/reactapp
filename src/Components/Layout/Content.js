import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Register from '../Register';
import Dashboard from '../Dashboard';
import Home from '../Home';
import NotFound from '../NotFound';

class Content extends React.Component {
  render() {
    return (
      <div className="Content">
        <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route component={NotFound} />
          </Switch>
      </div>
    )
  }
}

export default Content;
