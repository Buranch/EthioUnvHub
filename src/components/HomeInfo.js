import React, { Component } from 'react';
import Background from '../images/home.png';

const HomeInfo = () => (
  <div style={{ top: '50px', padding: '0px 40px', position: 'relative', height: '300px', backgroundColor: '#00204A' }}>
    <div style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', paddingRight: '150px', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '635px' }}>
        <h1 style={{ color: 'white' }}>Learn, Share, Build</h1>
        <p style={{ fontSize: '17px', color: 'white' }}>Each month, over 50 Million Developers come to stack overflow to learn, Share
          their knowdldege, and build careers.
        </p>
        <p style={{ fontSize: '17px', color: 'white' }}>
          Join the worlds largest developer community
        </p>
      </div>
      <div style={{ height: '200px', width: '250px', backgroundSize: 'cover', backgroundImage: 'url('+ Background + ')' }}></div>
    </div>
  </div>
);

export default HomeInfo;

