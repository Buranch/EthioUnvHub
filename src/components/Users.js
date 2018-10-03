import React, {Component} from 'react';
import {Input} from 'antd';
import User from './User';

const Search = Input.Search;

const Tags = () => (
  <div style={{ padding: '25px 0px', display: 'flex', flexDirection: 'column', flexGrow: 1, borderLeft: '1px solid #e8e8e8' }}>
    <div style={{ padding: '0px 24px', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ fontWeight: 'inherit' }}>Users</h1>
      <Search
        placeholder="Filter by name"
        onSearch={value => console.log(value)}
        style={{ width: 200, marginBottom: '30px' }}
      />
      <div style={{ display: 'grid', width: '100%', gridGap: '8px', flexWrap: 'wrap', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  </div>
);

export default Tags;
