import React, { Component } from 'react';
import { Input, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

const Signup = () => (
  <React.Fragment>
    <div style={{ boxSizing: 'content-box' ,border: '1px solid #e4e6e8', backgroudColor: '#FFF', width: '280px', margin: '0 auto', padding: '30px', marginBottom: '20px'  }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Input
          style={{ marginBottom: '20px', height: '35px' }}
          placeholder="Enter your username"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Input
          style={{ marginBottom: '20px', height: '35px' }}
          placeholder="Enter your email"
          prefix={<Icon type="inbox" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Input
          style={{ marginBottom: '20px', height: '35px' }}
          placeholder="Enter your password"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Input
          style={{ marginBottom: '20px', height: '35px' }}
          placeholder="Confirm your password"
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button style={{ padding: '0 25px', height: '35px' }} type="primary">Sign up</Button>
        </div>
      </div>
    </div>
    <div style={{ boxSizing: 'content-box' , border: '1px solid #e4e6e8', backgroudColor: '#FFF', width: '280px', margin: '0 auto', padding: '30px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ marginRight: '3px' }}>Already have an account?</span>
        <Link to='/login'><span>Login</span></Link>
      </div>
    </div>
  </React.Fragment>
);

export default Signup;
