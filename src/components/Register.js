import React from 'react';
import { Form, Input, Button, Row, Col, Card, notification } from 'antd';
import axios from 'axios';
import qs from 'qs';
import PageHeaderCommon from '../components/Layout/PageHeaderCommon';

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
      showMessage: false,
      loading: '' 
    } 
  }

  formRef = React.createRef();

  onFinish = (values) => {
    console.log('Success:', values);
    this.setState({ loading: 'loading' });
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
        this.setState({ loading: '' });
        notification.success({
          message: 'Success',
          description:
            res.data.message
        });
        console.log(res);
        console.log(res.data);
        
        //Reset form
        this.formRef.current.resetFields();
        this.props.history.push("/login");

      }, (error) => {
        this.setState({ loading: '' });
        notification.error({
          message: 'Error',
          description:
            error.response.data.email
        });
        console.log(error.response.data.email);
        console.log('In error');
        console.log(error.response.data);
    });
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    return(
      <div>
      <PageHeaderCommon title="Register" subTitle="Register page" />
      <Row gutter={[16, 16]}>
      <Col span={8}></Col>
      <Col span={8}>
        <Card style={{ width: 450 }}>
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
        hasFeedback
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
        hasFeedback
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="password_confirmation"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
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
    </Card>
    </Col>
    </Row>
    </div>
    )
  }
}

export default Register;
