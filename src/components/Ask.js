import React, {Component} from 'react';
import {Input, Button, Mention} from 'antd';
const { TextArea } = Input;

const { toString, toContentState } = Mention;

function onChange(contentState) {
  console.log(toString(contentState));
}

function onSelect(suggestion) {
  console.log('onSelect', suggestion);
}

const Ask = () => (
  <div style={{ flexGrow: 1 ,display: 'flex', justifyContent: 'center', borderLeft: '1px solid #e8e8e8' }}>
    <div style={{ maxWidth: '700px' ,padding: '25px 0px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <div style={{ padding: '0px 24px', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ fontWeight: 'inherit', marginBottom: '30px' }}>Ask a question</h1>
        <span style={{ fontSize: '15px' }}>Title</span>
        <Input
          style={{ marginBottom: '20px' }}
          placeholder="What is your question? Be specfic."
        />
        <span style={{ fontSize: '15px' }}>Body</span>
        <TextArea
          style={{ marginBottom: '20px' }}
          rows={7}
        />
        <span style={{ fontSize: '15px' }}>Tags</span>
        <Mention
          placeholder="input @ to mention tag"
          style={{ width: '100%'}}
          onChange={onChange}
          suggestions={['software', 'civil', 'chemical', 'biomedical', 'electrical', 'mechanical', 'engineering']}
          onSelect={onSelect}
        />
        <div style={{ display: 'flex', marginTop: '35px' }}>
          <Button style={{ padding: '0 10px', height: '40px' }} type="primary">Post Your Question</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Ask;
