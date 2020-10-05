import React from 'react';
import PageHeaderCommon from '../components/Layout/PageHeaderCommon';
import { Button, notification, Modal, Space, Divider } from 'antd';
import { SmileOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

class Dashboard extends React.Component {

  openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. ',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

  showPromiseConfirm() {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  }

  render() {
    return (
      <div className="Dashboard">
        <PageHeaderCommon title="Dashboard" subTitle="Dashboard page UI elements demo" />
        <Divider orientation="left" plain>Toast Notification</Divider>
        <Button type="primary" onClick={this.openNotification}>
          Open
        </Button>
        <Divider orientation="left" plain>Model With promise</Divider>
        <Space>
        <Button onClick={this.showPromiseConfirm}>Open</Button>
        </Space>
      </div>
    )
  }
}

export default Dashboard;
