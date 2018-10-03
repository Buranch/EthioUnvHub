import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { isUserAuthenticated, getTokenId, getUserId } from './authentication';

const FormItem = Form.Item;

class AddMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: '',
      address: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addMeetup(newMeetup) {
    axios.request({
      method: 'post',
      url: `http://localhost:3000/api/meetups?access_token=${getTokenId()}`,
      data: newMeetup,
    }).then(response => {
      console.log('response: ' + response);
      this.props.history.push('/');
      console.log('response2: ' + response);
    }).catch(err => console.log(err));
  }

  handleSubmit(e) {
    if (isUserAuthenticated()) {
      const { name, city, address } = this.state;
      const userId = getUserId();
      const newMeetup = {
        name,
        city,
        address,
        userId,
      };
      this.addMeetup(newMeetup);
    }
    else {
      this.props.history.push('/login');
    }
    e.preventDefault();
  }

  handleInputChange(e, feild) {
    this.setState({[feild]: e.target.value}, ()=> {
      // console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        <Link to='/'><Button type="primary" icon="arrow-left" size='large'>Back</Button></Link>
        <h1>Add meetup</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            <Input onChange={(e) => this.handleInputChange(e, 'name')} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />
          </FormItem>
          <FormItem>
            <Input onChange={(e) => this.handleInputChange(e, 'city')} prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="City" />
          </FormItem>
          <FormItem>
            <Input onChange={(e) => this.handleInputChange(e, 'address')} prefix={<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="Address" />
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default AddMeetup;
