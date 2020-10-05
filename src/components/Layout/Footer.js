import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
      <p>{this.props.appName} Copyright &copy; 2020</p>
      </div>
    )
  }
}

export default Footer;
