import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {Link, withRouter} from 'react-router-dom';
import {isUserAuthenticated, getTokenId, clearTokenAndUserId} from './authentication';
import {clearLocation} from './local';
import { setLocation } from './local';
import './navbar.css';
import axios from 'axios';

const {Header} = Layout;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.index = 1;
    this.changeIndex = this.changeIndex.bind(this);
  }

  componentWillMount() {
    this.changeIndex();
  }

  componentWillReceiveProps() {
    this.changeIndex();
  }

  changeIndex() {
    const pathName = this.props.history.location.pathname;
    this.index = pathName === '/meetups/add' ? 2 : (pathName === '/login' || pathName === '/signup') ? 3 : 1;
    // console.log(this.index);
  }

  logout() {
    axios.request({
      method: 'post',
      url: `http://localhost:3000/api/Users/logout?access_token=${getTokenId()}`,
    }).then(response => {
      clearTokenAndUserId();
      clearLocation();
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  login() {
    const pathName = this.props.history.location.pathname;
    if (pathName !== '/login') {
      setLocation(this.props.history.location.pathname);
    }
    this.props.history.push('/login');
  }

  render() {
    // console.log('Index: ' + this.index);
    return (
      <Header style={{display: 'flex', justifyContent: 'space-between'}}>
        <div className="logo"/>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[this.index.toString()]}
          style={{lineHeight: '64px'}}
        >
          <Menu.Item key="1"><Link to="/"> Meet ups </Link></Menu.Item>
          <Menu.Item key="2"><Link to="/meetups/add">Add Meetup</Link></Menu.Item>
          {
            !isUserAuthenticated() && <Menu.Item onClick={this.login.bind(this)} key="3">Login</Menu.Item>
          }
          {
            isUserAuthenticated() && <Menu.Item onClick={this.logout.bind(this)} key="3">Logout</Menu.Item>
          }
        </Menu>
      </Header>
    );
  }
}

export default withRouter(Navbar);
