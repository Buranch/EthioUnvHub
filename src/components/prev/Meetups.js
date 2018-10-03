import React, {Component} from 'react';
import axios from 'axios';
import {List, notification} from 'antd';
import {Link} from 'react-router-dom';
import socketIOClient from 'socket.io-client';


const openNotificationWithIcon = (type, user) => {
  notification[type]({
    message: `User ${user} added`,
  });
};


class Meetups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetups: [],
      endPont: 'http://localhost:3000',
    }

    this.socket = socketIOClient(this.state.endPont);
  }

  componentWillMount() {
    this.getMeetups();
  }

  componentDidMount() {
    const userName = (this.props.location.state && this.props.location.state.username) || '';
    if (userName) {
      openNotificationWithIcon(this.props.location.state.message, userName);
    }

    this.socket.on('cu', id => {
      console.log('cu event with id: ' + id);
      this.getMeetups();
    })

    this.socket.on('delete', id => {
      console.log('delete event with id: ' + id);
      this.getMeetups();
    })
  }

  componentWillUnmount() {
    this.socket.close();
  }

  getMeetups() {
    axios.get('http://localhost:3000/api/meetups')
      .then(response => {
        this.setState({meetups: response.data});
      })
  }

  render() {
    const {meetups} = this.state;
    return (
      <React.Fragment>
        <h1>Meet ups</h1>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={meetups}
          renderItem={item => (<List.Item><Link to={`/meetups/${item.id}`}>{item.name}</Link></List.Item>)}
        />
      </React.Fragment>
    );
  }
}

export default Meetups;
