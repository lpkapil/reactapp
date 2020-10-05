import React from 'react';
import { ShopTwoTone } from '@ant-design/icons';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
      <p><ShopTwoTone /> {this.props.appName} Copyright &copy; 2020</p>
      </div>
    )
  }
}

export default Footer;
