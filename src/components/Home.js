import React from 'react';
import PageHeaderCommon from '../components/Layout/PageHeaderCommon';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <PageHeaderCommon title="Home" subTitle="Home page" />
        <p>This is home page</p>
      </div>
    )
  }
}

export default Home;
