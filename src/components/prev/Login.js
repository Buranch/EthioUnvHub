import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {setTokenAndUserId} from  './authentication';
import {getLocation} from './local';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.loginUser = this.loginUser.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loginUser(user) {
    axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/Users/login',
      data: user,
    }).then(response => {
      const {id, userId} = response.data;
      setTokenAndUserId(id, userId);
      const prevLocation = getLocation();
      if (prevLocation) {
        this.props.history.push(prevLocation);
      }
      else {
        this.props.history.push('/');
      }
    }).catch(err => console.log(err));
  }

  handleSubmit(e) {
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    this.loginUser(user);
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
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input onChange={e => this.handleInputChange(e, 'email')} prefix={<Icon type="inbox" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
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
            <Link to='/signup' style={{ paddingBottom: '10px' }}>Register now</Link>
          </div>
          <Button style={{ height: '35px' }} type="primary" block htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
