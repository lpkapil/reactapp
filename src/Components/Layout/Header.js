import React from 'react';
import Menu from './Menu';
import Logo from './Logo';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
          <Logo />
          <Menu />
      </div>
    )
  }
}

export default Header;
