import React from 'react';
import PageHeaderCommon from '../components/Layout/PageHeaderCommon';

class NotFound extends React.Component {
  render() {
    return (
      <div className="NotFound">
      <PageHeaderCommon title="404 Not Found" subTitle="404 Not Found page" />
        <p>404, The page your are looking for is not found.</p>
      </div>
    )
  }
}

export default NotFound;
