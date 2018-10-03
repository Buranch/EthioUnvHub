import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';


const FormItem = Form.Item;

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser(user) {
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/Users',
      data: user,
    }).then(response => {
      const { username } = this.state;
      const message = (response.data['id'] ? 'success' : 'error');
      this.props.history.push({
        pathname: '/',
        state: { message, username }
      });
    }).catch(err => console.log(err));
  }

  handleSubmit(e) {
    const { username, email, password } = this.state;
    const user = {
      username,
      email,
      password,
    };
    this.registerUser(user);
    e.preventDefault();
  }

  handleInputChange(e, feild) {
    this.setState({ [feild]: e.target.value }, () => {
      // console.log(this.state);
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form style={{ width: '300px' }} onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input onChange={e => this.handleInputChange(e, 'username')} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input onChange={e => this.handleInputChange(e, 'email')} prefix={<Icon type="inbox" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input onChange={e => this.handleInputChange(e, 'password')} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to='/login' style={{ paddingBottom: '10px' }}>Login</Link>
        </div>
        <Button style={{ height: '35px' }} type="primary" block htmlType="submit" className="login-form-button">
            Register
        </Button>
    </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Signup);

export default WrappedNormalLoginForm;
