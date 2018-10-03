import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const MainLogin = (props) => {
  return (
    <div style={{ minHeight: '280px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/Signup' component={Signup} />
      </Switch>
    </div>
  )
}


export default MainLogin;
