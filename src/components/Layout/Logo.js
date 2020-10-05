import React from 'react';
import { SmileTwoTone } from '@ant-design/icons';

class Logo extends React.Component {
  render() {
    return (
      <div className="Logo"><SmileTwoTone /> {this.props.appName}</div>
    )
  }
}

export default Logo;
