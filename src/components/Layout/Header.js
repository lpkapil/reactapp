import React from 'react';
import TopMenu from './TopMenu';
import Logo from './Logo';

class Header extends React.Component {

  /**
   * State uplift from child handler
   */
  stateUpLiftHandler = () => {
    console.log('Recieved state lift from child to parent call');
  }

  render() {
    return (
      <div className="Header">
          <Logo appName={this.props.appName} />
          <TopMenu testStateUplift={this.stateUpLiftHandler} />
      </div>
    )
  }
}

export default Header;
