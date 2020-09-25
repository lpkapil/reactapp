import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import qs from 'qs';

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

  onFinish = (values) => {
    console.log('Success:', values);

    axios.post(
      'http://lumenauthapp.com/api/login', 
      qs.stringify({ 
        email: values.email, 
        password: values.password
      }))
      .then(res => {
        console.log(res);
        console.log(res.data);
    }, (error) => {
      console.log('In error');
      console.log(error.response.data);
    });
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return(
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
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
    )
  }
}

export default Login;
