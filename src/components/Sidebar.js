import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';


const Sidebar = () => (
  <div style={{ width: '164px', padding: '20px 0px' }}>
    <Menu
      style={{ width: '164px' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <Menu.Item key="1">
        <Link to='/'>
          <Icon type="home" />
          <span>Home</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to='/tags'>
          <Icon type="tags" />
          <span>Tags</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to='/users'>
          <Icon type="team" />
          <span>Users</span>
        </Link>
      </Menu.Item>
    </Menu>
  </div>
);

export default Sidebar;
