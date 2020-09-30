import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
  render() {
    return (
      <div className="Logo">
        <Link to="/">Logo</Link>
      </div>
    )
  }
}

export default Logo;
