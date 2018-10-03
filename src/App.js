import React from 'react';
import socketIOClient from 'socket.io-client';
import MainNav from './components/MainNav';
import MainContent from './components/MainContent';
import {Layout} from 'antd';
import 'antd/dist/antd.css';
// import './App.css';

const App = () => (
  <Layout style={{ backgroundColor: 'white' }} className="layout">
    <MainNav />
    <MainContent />
  </Layout>
);
export default App;
