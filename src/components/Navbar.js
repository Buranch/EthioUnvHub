import React, { Component } from 'react';
import {Button} from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div style={{ padding: '0px 35px' ,zIndex: 1050, display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#F6F6F6', boxShadow:'0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1)' ,height: '50px', position: 'fixed', width: '100%'}}>
    <div style={{ height: '50px' ,width: '100%' ,display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ height: '100%', display:'flex', alignItems: 'center' }}>
        <div style={{ height: '100%' ,width: '50px', backgroundColor: '#393232' }}>

        </div>
        <Link to='/'><h2 style={{ marginBottom: '0px', paddingLeft: '5px' }}>Stack Overflow</h2></Link>
      </div>
      <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '40px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg  aria-hidden="true" className="svg-icon iconInbox" width="20" height="18" viewBox="0 0 20 18"><path d="M15.19 1H4.63c-.85 0-1.6.54-1.85 1.35L0 10.79V15c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-4.21l-2.87-8.44A2 2 0 0 0 15.19 1zm-.28 10l-2 2h-6l-2-2H1.96L4.4 3.68A1 1 0 0 1 5.35 3h9.12a1 1 0 0 1 .95.68L17.86 11h-2.95z"></path>
          </svg>
        </div>
        <div style={{ width: '40px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg aria-hidden="true" className="svg-icon iconAchievements" width="18" height="18" viewBox="0 0 18 18"><path d="M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3zM3 7c-.5 0-1-.5-1-1V4h1v3zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1zM16 6c0 .5-.5 1-1 1V4h1v2z"></path></svg>
        </div>
        <Link to='/login'><Button style={{ backgroundColor: '#f6f6f6', border: '0px solid red' }}>Login</Button></Link>
        <Link to='/signup'><Button type="primary">Sign Up</Button></Link>
      </div>
    </div>
  </div>
);

export default Navbar;

