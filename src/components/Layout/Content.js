import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../Login';
import Logout from '../Logout';
import Register from '../Register';
import Dashboard from '../Dashboard';
import Home from '../Home';
import NotFound from '../NotFound'; 
import ProtectedRoute from '../ProtectedRoute';
import PublicRoute from '../PublicRoute';

class Content extends React.Component {
  render() {
    return (
      <div className="Content">
        <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute path="/login" component={Login} />
              <Route path="/logout" component={Logout}/>
              <PublicRoute path="/register" component={Register} />
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <Route component={NotFound} />
          </Switch>
      </div>
    )
  }
}

export default Content;
