import React, {Component} from 'react';
import {Input} from 'antd';
import Tag from './Tag';

const Search = Input.Search;

const Tags = () => (
  <div style={{ padding: '25px 0px', display: 'flex', flexDirection: 'column', flexGrow: 1, borderLeft: '1px solid #e8e8e8' }}>
    <div style={{ padding: '0px 24px', display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ fontWeight: 'inherit' }}>Tags</h1>
      <p style={{ marginBottom: '20px' }}>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
      <Search
        placeholder="Filter by name"
        onSearch={value => console.log(value)}
        style={{ width: 200, marginBottom: '30px' }}
      />
      <div style={{ display: 'grid', width: '100%', gridGap: '8px', flexWrap: 'wrap', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
    </div>
  </div>
);

export default Tags;
