import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="Dashboard">
        <Link to="/logout">Logout</Link>
        <p>Protected dashboard page content</p>
      </div>
    )
  }
}

export default Dashboard;
