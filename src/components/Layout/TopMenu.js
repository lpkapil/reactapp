import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Menu, Modal, Button } from 'antd';
import { HomeOutlined, LoginOutlined, ExclamationCircleOutlined, DashboardOutlined, UserOutlined } from '@ant-design/icons';
import store from '../../redux/store';
import { connect } from 'react-redux';

const { confirm } = Modal;
const { SubMenu } = Menu;

// const mapStateToProps = (state, ownProps) => ({
//   // ... computed data from state and optionally ownProps
  
// });

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   // ... normally is an object full of action creators
// });

function mapStateToProps(state) {
  //This function gets State from Redux Store
  // Equal to store.getState()
  // We can return an object, which will be props of the connected class component

  console.log('inside mapStatetoProps');
  console.log(state);
  return {'storestate': state};
}
function mapDispatchToProps(dispatch) {
  console.log('inside mapDispatchToProps');
  console.log(dispatch);
  return {};
}

class TopMenu extends React.Component {

  constructor(props)
	{
		super(props);
		this.state = {
      login: this.parseState(store.getState().login),
      user: this.parseState(store.getState().user),
      current: 'mail',
    };
    console.log('Topmenu consturctor props');
    console.log('Props set in mapStateToProps are available here to use');
    console.log(this.props);
  }
  
  handleClick = e => {
    this.setState({ current: e.key });
  };

	parseState = (input) => {
		return typeof input == 'string' ? JSON.parse(input) : input;
  }
  
  handleLogout = () => {
    // this won't be accessible in confirm so make it's reference 
    let self = this;
    confirm({
      title: 'Are you sure?',
      icon: <ExclamationCircleOutlined />,
      content: 'When clicked the OK button, You will be logged out.',
      onOk() {
        window.location.href = '/logout';
      },
      onCancel() {
        console.log('Test sending data to parent component using callback');
        self.props.testStateUplift();
      },
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

export default connect(mapStateToProps, mapDispatchToProps)(TopMenu);
