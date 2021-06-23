/*
    登录页面
*/
import React, { Component } from "react";
import { Form, Input, Button } from "antd";

import "./login.css";
class Login extends Component {
  layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  onFinish = () => {};
  onFinishFailed = () => {};
  handleSubmit = (event) => {};
  render() {
    return (
      <div>
        <div className="login">
          <h2>登录页面</h2>
          <Form
            {...this.layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                { required: true, message: "请输入您的用户名!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                { required: true, message: "请输入您的密码!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...this.tailLayout}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
// const WrappedNormalLoginForm = Form.create()(Login);
export default Login;
