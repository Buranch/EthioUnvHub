import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import AddMeetup from './AddMeetup';
import EditMeetup from './EditMeetup';
import MeetupDetail from './MeetupDetail';


const MainAddEdit = (props) => {
  return (
    <div style={{ minHeight: '280px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Switch>
        <Route exact path='/meetups/add' component={AddMeetup} />
        <Route exact path='/meetups/edit/:id' component={EditMeetup} />
        <Route exact path='/meetups/:id' component={MeetupDetail} />
      </Switch>
    </div>
  )
}


export default MainAddEdit;
