import React from 'react';
import { Form, Input, Button, Row, Col, Card, notification } from 'antd';
import axios from 'axios';
import qs from 'qs';
import PageHeaderCommon from '../components/Layout/PageHeaderCommon';
import { SmileOutlined } from '@ant-design/icons';

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
        notification.open({
          message: 'Success',
          description:
            res.data.message,
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
        console.log(res);
        console.log(res.data);
        
        //Reset form
        this.formRef.current.resetFields();
        this.props.history.push("/login");

      }, (error) => {
        this.setState({ loading: '' });
        notification.open({
          message: 'Error',
          description:
            error.response.data.email,
          icon: <SmileOutlined style={{ color: '#108ee9' }} />,
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
    </Card>
    </Col>
    </Row>
    </div>
    )
  }
}

export default Register;
