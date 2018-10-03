import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Tag = () => (
    <div style={{ padding: '8px 4px 12px 4px' ,display: 'flex', flexDirection: 'column' ,minWidth: '250px', height: '135px', borderBottom: '1px solid #e4e6e8' }}>
        <Link to='/tagdetail'><Button size="large" style={{ backgroundColor: '#E1ECF4', color: '#39739d', alignSelf: 'flex-start', height: '25px', marginBottom: '5px' }} type="secondary">Javascript</Button></Link>
        <p style={{ fontSize: '13px', marginBottom: '0px' }}>JavaScript (not to be confused with Java) is a high-level, dynamic, multi-paradigm, weakly-typed language used for both client-</p>
    </div>
);

export default Tag;