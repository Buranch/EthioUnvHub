import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Button, List, Modal, Alert} from 'antd';
import { isUserAuthenticated, getTokenId, isHisOwnPost } from './authentication';
import socketIOClient from 'socket.io-client';

const confirm = Modal.confirm;

class MeetupDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: '',
      showInfo: false,
      endPont: 'http://localhost:3000',
    }

    this.socket = socketIOClient(this.state.endPont);
    this.showInfo = this.showInfo.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.showDeleteConfirm = this.showDeleteConfirm.bind(this);
  }

  componentWillMount() {
    this.getMeetup();
  }

  componentDidMount() {
    this.socket.on('cu', id => {
      if (id === this.state.details.id) {
        console.log('cu event with id: ' + id);
        this.getMeetup();
      }
    })

    this.socket.on('delete', id => {
      console.log("input id: "+id);
      console.log("state id: "+this.state.details.id);
      if (id === this.state.details.id) {
        this.props.history.push('/');
      }
    })
  }
  showDeleteConfirm() {
    confirm({
      title: 'Are you sure delete this meetup?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        this.onDelete();
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  getMeetup() {
    let meetupId = this.state.details.id || this.props.match.params.id;
    axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
      .then(response => {
        this.setState({details: response.data});
      })
      .catch((err) => {
        console.log("ERR: "+err);
        this.props.history.push('/');
      });
  }

  onDelete() {
    let meetupId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/meetups/${meetupId}?access_token=${getTokenId()}`)
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  showInfo() {
    this.setState({showInfo: true}, () => {
      this.timeout = setTimeout(() => {
        this.setState({showInfo: false})
      }, 3000);
    })
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
    this.socket.close();
  }

  render() {
    const {details} = this.state;
    let cstDetails = [];
    cstDetails.push(details);

    var editButton, deleteButton;

    if (isUserAuthenticated()) {
      if (isHisOwnPost(cstDetails[0].userId)) {
        editButton = <Link to={`/meetups/edit/${cstDetails[0].id}`}> <Button type="primary" icon="edit">Edit</Button></Link>;
        deleteButton = <Button onClick={this.showDeleteConfirm} type="danger" icon="delete">Delete</Button>;
      }
    }
    else {
      // some nice feature
      // editButton = <Link to='/login'> <Button type="primary" icon="edit">Edit</Button></Link>;
      // deleteButton = <Button onClick={this.showInfo} type="danger" icon="delete">Delete</Button>
    }


    return (
      <div>
        <Link to='/'><Button type="primary" icon="arrow-left" size='large'>Back</Button></Link>
        <h1>{cstDetails[0].name}</h1>
        {
          this.state.showInfo && <Alert style={{ marginBottom: '10px' }} message="You need to login first" type="warning" showIcon />
        }
        <List
          bordered
          dataSource={cstDetails}
          renderItem={item => (
            <React.Fragment>
              <List.Item>City: {item.city}</List.Item>
              <List.Item>Address: {item.address}</List.Item>
            </React.Fragment>
          )}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
          {
            editButton
          }
          {
            deleteButton
          }
        </div>
      </div>
    );
  }
}

export default MeetupDetail;
