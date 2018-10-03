import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Layout} from 'antd';
import Meetups from './Meetups';
import MeetupDetail from './MeetupDetail';
import AddMeetup from './AddMeetup';
import EditMeetup from './EditMeetup';
import MainLogin from './MainLogin';

const {Content} = Layout;

const Main = () => (
  <Content style={{padding: '0 50px'}}>
    <div style={{background: '#fff', padding: 24, minHeight: 280}}>
      <Switch>
        <Route exact path='/' component={Meetups} />
        <Route exact path='/login' component={MainLogin} />
        <Route exact path='/signup' component={MainLogin} />
        <Route exact path='/meetups/add' component={AddMeetup} />
        <Route exact path='/meetups/edit/:id' component={EditMeetup} />
        <Route exact path='/meetups/:id' component={MeetupDetail} />
      </Switch>
    </div>
  </Content>
);

export default Main;
