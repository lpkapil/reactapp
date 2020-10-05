import React from 'react';
import PageHeaderCommon from '../components/Layout/PageHeaderCommon';
import { Modal, Divider } from 'antd';
// import { Button } from 'antd';
// import { ExclamationCircleOutlined } from '@ant-design/icons';
import UserListing from './UserListing';

const { confirm } = Modal;

class Dashboard extends React.Component {

  // showPromiseConfirm() {
  //   confirm({
  //     title: 'This is test conform modal?',
  //     icon: <ExclamationCircleOutlined />,
  //     content: 'This is test modal message content',
  //     onOk() {
  //       return new Promise((resolve, reject) => {
  //         setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
  //       }).catch(() => console.log('Oops errors!'));
  //     },
  //     onCancel() {},
  //   });
  // }

  render() {
    return (
      <div className="Dashboard">
        <PageHeaderCommon title="Dashboard" subTitle="Dashboard page UI elements demo" />
        {/* <Divider orientation="left" plain>Model With promise</Divider>
        <Button onClick={this.showPromiseConfirm}>Open</Button> */}
        <Divider orientation="left" plain>Server Side Table</Divider>
        <UserListing />
      </div>
    )
  }
}

export default Dashboard;
