import React from 'react';
import { Link } from 'react-router-dom';
// import store from '../../store';


class Menu extends React.Component {

  render() {
    return (
      <div className="Menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
      </div>
    )
  }
}

export default Menu;
