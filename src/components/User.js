import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Background from '../images/home.png';


const User = () => (
  <div style={{ padding: '8px 4px 12px 4px' ,display: 'flex' ,minWidth: '250px', height: '80px', borderBottom: '1px solid #e4e6e8' }}>
    <div style={{ backgroundSize: 'cover', backgroundImage: 'url('+ Background + ')', width: '50px', height: '48px'}}>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' ,flexGrow: 1, paddingRight: '10px', paddingLeft: '5px' }}>
      <Link to='/profile' style={{ textDecoration: 'none' }}><p style={{ fontSize: '15px', marginBottom: '0px', color: '#07C' }}>Bura Henok </p></Link>
      <p style={{ fontSize: '12px', marginBottom: '0px', color: '#6a737c' }}>Addis Ababa</p>
      <p style={{ fontSize: '12px', color: '#848d95' }}>450</p>
    </div>
  </div>
);

export default User;
