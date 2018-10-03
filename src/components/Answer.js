import React, { Component } from 'react';
import { Icon, Divider } from 'antd';

const Answer = () => (
  <React.Fragment>
    <div style={{ marginBottom: '10px', display: 'flex', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100px', width: '45px', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '33px' }}>
          <Icon style={{ fontSize: '25px', color: '#c9cbcf' }} type="caret-up" theme="filled" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '33px' }}>
          <span style={{ fontSize: '20px' }}>12</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '33px' }}>
          <Icon style={{ fontSize: '25px', color: '#c9cbcf' }} type="caret-down" theme="filled" />
        </div>
      </div>
      <div style={{ paddingLeft: '10px', flexGrow: 1 }}>
        <p style={{ color: '#242729', fontSize: '15px' }}>
          I am trying to remove bottom border from parent div. I have written following HTML code but I think my approach is not right.
          rom parent div. I have written following HTML code but I think my approach is not right.
        </p>
      </div>
    </div>
    <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ width: '200px', backgroundColor: '#E1ECF4', padding: '3px', paddingBottom: '5px' }}>
        <p style={{ marginBottom: '3px' }}>answered Jan 29 '14 at 17:23</p>
        <div style={{ display: 'flex' }}>
          <div style={{ height: '32px', width: '32px', backgroundColor: '#194769' }}></div>
          <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '5px', marginTop: '-3px' }}>
            <p style={{ fontSize: '13px', marginBottom: '0px', color: '#393232' }}>Biruk Misanaw </p>
            <p style={{ fontSize: '12px', marginBottom: '0px', color: '#848d95' }}>1565</p>
          </div>
        </div>
      </div>
    </div>
    <Divider />
  </React.Fragment>
);

export default Answer;
