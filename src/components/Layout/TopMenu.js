import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Menu, Modal, Button } from 'antd';
import { HomeOutlined, LoginOutlined, ExclamationCircleOutlined, DashboardOutlined, UserOutlined } from '@ant-design/icons';
import store from '../../store';

const { confirm } = Modal;
const { SubMenu } = Menu;

class TopMenu extends React.Component {

  constructor(props)
	{
		super(props);
		this.state = {
      login: this.parseState(store.getState().login),
      user: this.parseState(store.getState().user),
      current: 'mail',
		}
  }
  
  handleClick = e => {
    this.setState({ current: e.key });
  };

	parseState = (input) => {
		return typeof input == 'string' ? JSON.parse(input) : input;
  }
  
  handleLogout = e => {
    confirm({
      title: 'Are you sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'When clicked the OK button, You will be logged out.',
      onOk() {
        window.location.href = '/logout';
      },
      onCancel() {},
    });
  };


  render() {

    const { current } = this.state;

    if (this.state.login === true) {
      var links = (
        <Fragment>
            <Menu.Item key="myaccount" icon={<DashboardOutlined />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <SubMenu key="SubMenu" icon={<UserOutlined />} title={this.state.user.name}>
              <Menu.Item key="logout" icon={<LoginOutlined />}>
                <Button type="link" onClick={this.handleLogout}>
                  Logout
                </Button>
              </Menu.Item> 
            </SubMenu>
        </Fragment>
      );
    } else{
      links = (
        <Fragment>
          <Menu.Item key="login" icon={<LoginOutlined />}>
            <Link to="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="register" icon={<LoginOutlined />}>
            <Link to="/register">Register</Link>
          </Menu.Item>
        </Fragment>
      );
    }

    return (
      <div className="Menu" >
        <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          { links }
        </Menu>
      </div>
    )
  }
}

export default TopMenu;
