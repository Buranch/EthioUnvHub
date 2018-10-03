import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { getTokenId, getUserId } from './authentication';

const FormItem = Form.Item;

class EditMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: '',
      address: '',
      id: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMeetup = this.getMeetup.bind(this);
  }

  componentWillMount() {
    this.getMeetup();
  }


  getMeetup() {
    let meetupId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(response => {
        const {name, city, address, id} = response.data;
        console.log("meetup id: "+id);
        this.setState({
          name,
          city,
          address,
          id,
        });
      });
  }

  editMeetup(newMeetup) {
    let meetupId = this.state.id;
    axios.request({
      method: 'put',
      url: `http://localhost:3000/api/meetups/${meetupId}?access_token=${getTokenId()}`,
      data: newMeetup,
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  handleSubmit(e) {
    const {name, city, address} = this.state;
    const userId = getUserId();
    const newMeetup = {
      name,
      city,
      address,
      userId,
    };
    this.editMeetup(newMeetup);
    e.preventDefault();
  }

  handleInputChange(e, feild) {
    this.setState({[feild]: e.target.value}, ()=> {
      // console.log(this.state);
    });
  }

  render() {
    const {name, city, address} = this.state;
    return (
      <div>
        <Link to='/'><Button type="primary" icon="arrow-left" size='large'>Back</Button></Link>
        <h1>Edit meetup</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            <Input value={name} onChange={(e) => this.handleInputChange(e, 'name')} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Name" />
          </FormItem>
          <FormItem>
            <Input value={city} onChange={(e) => this.handleInputChange(e, 'city')} prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="City" />
          </FormItem>
          <FormItem>
            <Input value={address} onChange={(e) => this.handleInputChange(e, 'address')} prefix={<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="Address" />
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

export default EditMeetup;
