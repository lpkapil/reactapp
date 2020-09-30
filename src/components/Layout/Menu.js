import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

  render() {

    return (
      <div className="Menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>
            </ul>
      </div>
    )
  }
}

export default Menu;
