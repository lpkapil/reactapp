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

class Register extends React.Component {

  constructor(props){  
    super(props);
    this.state = {  
      message: '',
      showMessage: false 
    } 
  }

  formRef = React.createRef();

  onFinish = (values) => {
    console.log('Success:', values);

    axios.post(
      'http://lumenauthapp.com/api/register', 
      qs.stringify({ 
        name: values.name,
        email: values.email, 
        password: values.password,
        password_confirmation: values.password
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        
        alert(res.data.message);
        
        //Reset form
        this.formRef.current.resetFields();

      }, (error) => {
        alert(error.response.data.email);
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
      ref={this.formRef}
    >
    <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Name is required.'
          },
        ]}
      >
        <Input />
      </Form.Item>
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
          Register
        </Button>
      </Form.Item>
    </Form>
    )
  }
}

export default Register;
