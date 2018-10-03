import React, { Component } from 'react';
import HomeInfo from './HomeInfo';
import Navbar from './Navbar';

const MainNav = () => (
  <div style={{ height: '50px' ,display: 'flex', flexDirection: 'column' }}>
    <Navbar />
    {/* HomeInfo will only visible to unauthenticated users */}
    {/* <HomeInfo /> */}
  </div>
);

export default MainNav;

