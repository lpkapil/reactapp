import React from 'react';
import store from '../store';
import { Route, Redirect } from 'react-router-dom';

class Logout extends React.Component {
  
  constructor(props)
  {
      super(props);
      store.dispatch({type: 'LOGOUT', value: false, token: null});
      localStorage.removeItem("login");
      localStorage.removeItem("token");
  }   
  render() {
    return(
        <Route>
            <Redirect to="/" />
        </Route>
    )
  }
}

export default Logout;
