import React from 'react';
import TopMenu from './TopMenu';
import Logo from './Logo';

class Header extends React.Component {

  render() {
    return (
      <div className="Header">
          <Logo appName={this.props.appName} />
          <TopMenu />
      </div>
    )
  }
}

export default Header;
