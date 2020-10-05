import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, LoginOutlined } from '@ant-design/icons';

import store from '../../store';

class TopMenu extends React.Component {

  constructor(props)
	{
		super(props);
		this.state = {
      login: this.parseState(store.getState().login),
      current: 'mail',
		}
  }
  
  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

	parseState = (input) => {
		return typeof input == 'string' ? JSON.parse(input) : input;
	}


  render() {

    const { current } = this.state;

    if (this.state.login === true) {
      var links = (
        <Fragment>
            <Menu.Item key="myaccount">
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="logout">
              <Link to="/logout">Logout</Link>
            </Menu.Item>
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
          <Menu.Item key="home" icon={<AppstoreOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          { links }
        </Menu>
      </div>
    )
  }
}

export default TopMenu;
