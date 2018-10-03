import React, {Component} from 'react';
import {Input, Icon, Button} from 'antd';
import Answer from './Answer';

const { TextArea } = Input;

const QuestionDetail = () => (
  <div style={{ padding: '24px 0px', display: 'flex', flexDirection: 'column', flexGrow: 1, borderLeft: '1px solid #e8e8e8' }}>
    <div style={{ padding: '0px 24px' ,display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '10px' ,paddingBottom: '5px', borderBottom: '1px solid #e4e6e8' ,display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>How can i use the AND operator in Laravel in my query</h2>
        <Button style={{ padding: '0 10px', height: '35px' }} type="primary"><Icon type="plus" theme="outlined" />Ask Question</Button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap-reverse' }}>
        <div style={{ paddingBottom: '10px' , display: 'flex', flexDirection: 'column', minWidth: '250px', width: 'calc(100% - 150px - 24px)' }}>
          <div style={{ marginBottom: '10px' , display: 'flex', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100px', width: '45px', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px' ,height: '33px' }}>
                <Icon style={{ fontSize: '25px', color: '#c9cbcf' }} type="caret-up" theme="filled" />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px' ,height: '33px' }}>
                <span style={{ fontSize: '25px' }}>1</span>
              </div>
              <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',width: '45px' ,height: '33px' }}>
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
          <div style={{ marginBottom: '10px' ,marginLeft: '45px' , display: 'flex' }}>
            <Button size="small" style={{ backgroundColor: '#E1ECF4', color: '#39739d', marginRight: '5px' }} type="secondary">software</Button>
            <Button size="small" style={{ backgroundColor: '#E1ECF4', color: '#39739d', marginRight: '5px' }} type="secondary">civil</Button>
          </div>
          <div style={{ marginBottom: '20px' , display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ width: '200px', backgroundColor: '#E1ECF4', padding: '3px', paddingBottom: '5px' }}>
              <p style={{ marginBottom: '3px' }}>asked Jan 29 '14 at 16:48</p>
              <div style={{ display: 'flex' }}>
                <div style={{ height: '32px', width: '32px', backgroundColor: '#393232' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '5px', marginTop: '-3px' }}>
                  <p style={{ fontSize: '13px', marginBottom: '0px', color: '#393232' }}>Henok Tesfaye </p>
                  <p style={{ fontSize: '12px', marginBottom: '0px', color: '#848d95' }}>450</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: '10px' ,paddingBottom: '5px', borderBottom: '1px solid #e4e6e8' ,display: 'flex', alignItems: 'center' }}>
            <h3 style={{ fontSize: '18px' }}>4 Answers</h3>
          </div>
          <Answer />
          <Answer />
          <span style={{ fontSize: '20px', color: '#393232' }}>Your Answer</span>
          <TextArea
            style={{ marginBottom: '35px' }}
            rows={7}
          />
          <div style={{ display: 'flex' }}>
            <Button style={{ padding: '0 10px', height: '40px' }} type="primary">Post Your Answer</Button>
          </div>
        </div>
        <div style={{ marginLeft: '24px' ,width: '150px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <span style={{ color: '##9199a1' }}>asked</span>
            <span style={{ marginLeft: '18px', color: '#3b4045' }}>today</span>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <span style={{ color: '##9199a1' }}>viewed</span>
            <span style={{ marginLeft: '10px', color: '#3b4045' }}>15 times</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QuestionDetail;
