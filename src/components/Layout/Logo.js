import React from 'react';
import { ShopTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
  render() {
    return (
      <div className="Logo"><Link to="/"><ShopTwoTone /> {this.props.appName}</Link></div>
    )
  }
}

export default Logo;
