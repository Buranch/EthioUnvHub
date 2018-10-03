import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import Question from './Question';
import { Button, Radio } from 'antd';


const AskandQuestion = () => (
  <div style={{ padding: '20px 0px', display: 'flex', flexDirection: 'column', flexGrow: 1, maxWidth: '900px', borderLeft: '1px solid #e8e8e8' }}>
    <div style={{ borderBottom: '1px solid #cdcdde', paddingLeft: '20px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '25px' }}> Top Questions </h2>
        <Link to='/ask'><Button size="large" icon="plus" type="primary">Ask Question</Button></Link>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
        <Radio.Group value="large">
          <Radio.Button value="large">Intersting</Radio.Button>
          <Radio.Button value="default">Hot</Radio.Button>
          <Radio.Button value="small">Week</Radio.Button>
        </Radio.Group>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </div>
  </div>
);

export default AskandQuestion;
