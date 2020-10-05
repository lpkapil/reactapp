import React from 'react';
import { ShopTwoTone } from '@ant-design/icons';

class Logo extends React.Component {
  render() {
    return (
      <div className="Logo"><ShopTwoTone /> {this.props.appName}</div>
    )
  }
}

export default Logo;
