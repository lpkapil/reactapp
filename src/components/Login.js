import React from 'react';
import { Form, Input, Button } from 'antd';
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

    }
  }

  onFinish = (values) => {
    
    console.log('Success:', values);

    axios.post(
      'http://lumenauthapp.com/api/login', 
      qs.stringify({ 
        email: values.email, 
        password: values.password
      }))
      .then(res => {

        //update redux state
        store.dispatch({type: 'LOGIN', value: true, token: res.data.token});

        //store in localstorage
        localStorage.setItem("login", true);
        localStorage.setItem("token", res.data.token);

        this.setState({
          login: true,
          token: res.data.token
        });


        console.log('After login history object');
        console.log(this.props.history);

        this.props.history.push("/dashboard");
        

        //redirect to dashboard
        //logging
        // console.log(res);
        // console.log(res.data);

    }, (error) => {
      alert(error.response.data.message);
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
