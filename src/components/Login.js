import React from 'react';
import { Form, Input, Button, Row, Col, Card, notification } from 'antd';
import PageHeaderCommon from '../components/Layout/PageHeaderCommon';
import axios from 'axios';
import qs from 'qs';
import store from '../store';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class Login extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      loading: ''
    }
  }
  
  onFinish = (values) => {
    
    this.setState({ loading: 'loading' });
    console.log('Success:', values);

    axios.post(
      'http://lumenauthapp.com/api/login', 
      qs.stringify({ 
        email: values.email, 
        password: values.password
      }))
      .then(res => {

        this.setState({ loading: '' });
        
        //update redux state
        store.dispatch({type: 'LOGIN', value: true, token: res.data.token, user: res.data.user});

        //store in localstorage
        localStorage.setItem("login", true);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        this.setState({
          login: true,
          token: res.data.token
        });
        

        console.log(res.data.user);
        window.location.href = '/dashboard';

        // this.props.history.push("/dashboard");
        

    }, (error) => {
      this.setState({ loading: '' });
      console.log(error.response.data.message);
      notification.error({
        message: 'Error',
        description:
          error.response.data.message
      });
      //update redux state
      // store.dispatch({type: 'LOGIN', value: false, token: null});

      //store in localstorage
      // localStorage.setItem("login", false);
      // localStorage.setItem("token", null);

      //logging
      // console.log('In error');
      // console.log(error.response.data);
    });
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return(
      <div>
      <PageHeaderCommon title="Login" subTitle="Login page" />
      <Row gutter={[16, 16]}>
      <Col span={8}></Col>
      <Col span={8}>
        <Card style={{ width: 400 }}>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
              size: 'small',
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Email is required.'
                },
                {
                  type: 'email',
                  message: 'Please enter a valid email.'
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Password is required.'
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" loading={this.state.loading}>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
      <Col span={8}></Col>
    </Row>
    </div>
    )
  }
}

export default Login;
