import React, { Component } from 'react';
import { Button, Divider } from 'antd';
import { Link } from 'react-router-dom';

const Question = () => (
  <React.Fragment>
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px 0px', paddingLeft: '15px' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ marginBottom: '0px', fontWeight: 'bold' }}>0</p>
          <p style={{ fontSize: '11px', color: '#9199a1' }}>votes</p>
        </div>
        <div style={{ marginRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ marginBottom: '0px', fontWeight: 'bold' }}>1</p>
          <p style={{ fontSize: '11px', color: '#9199a1' }}>answers</p>
        </div>
        <div style={{ marginRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ marginBottom: '0px', fontWeight: 'bold' }}>12</p>
          <p style={{ fontSize: '11px', color: '#9199a1' }}>views</p>
        </div>
      </div>
      <div style={{ flexGrow: 1, display: 'flex', paddingLeft: '20px', flexDirection: 'column' }}>
        <Link to='/questiondetail'><h2>Convert MySql group concat string to JSON object structure via PHP</h2></Link>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <Link to='/tagdetail'><Button size="small" style={{ backgroundColor: '#E1ECF4', marginRight: '5px' }} type="secondary">ui</Button></Link>
            <Link to='/tagdetail'><Button size="small" style={{ backgroundColor: '#E1ECF4', marginRight: '5px' }} type="secondary">reactjs</Button></Link>
            <Link to='/tagdetail'><Button size="small" style={{ backgroundColor: '#E1ECF4', marginRight: '5px' }} type="secondary">javascript</Button></Link>
          </div>
          <p style={{ fontSize: '12px', color: '#9199a1' }}>Modified 41 seconds ago</p>
        </div>
      </div>
    </div>
    <Divider style={{ margin: '0px' }} type="horizontal" />
  </React.Fragment>
);

export default Question;
