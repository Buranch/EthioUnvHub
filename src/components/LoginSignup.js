import React from 'react';
import {Switch, Route, Link, withRouter} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

const activeStyle = {
  border: '1px solid transparent',
  borderColor: '#e4e6e8', 
  borderBottomColor: '#fff', 
  marginBottom: '-1px',
}

const notActive = {
}

const defaultStyle = {
  padding: '0px 10px' ,  
  height: '100%',  
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center'
}

class LoginSignup extends React.Component {
  render() {
    const pathName = this.props.history.location.pathname;
    console.log(pathName);
    return (
      <div style={{ padding: '25px 0px', display: 'flex', flexDirection: 'column', flexGrow: 1, borderLeft: '1px solid #e8e8e8' }}>
        <div style={{ padding: '0px 24px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ borderBottom: '1px solid #e4e6e8', height: '40px', marginBottom: '10px', display: 'flex' }}>
            <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <div style={pathName === '/login' ? {...activeStyle, ...defaultStyle} : {...notActive, ...defaultStyle}}>
                <Link style={{ textDecoration: 'none' }} to='/login'><span style={{ fontWeight: 450 , color: '#242729', fontSize: '12px' }}>Log in</span></Link>
              </div>
              <div style={pathName === '/signup' ? {...activeStyle, ...defaultStyle} : {...notActive, ...defaultStyle}}>
                <Link style={{ textDecoration: 'none' }} to='/signup'><span style={{ fontWeight: 450 , color: '#242729', fontSize: '12px' }}>Sign up</span></Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '50px' }}>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </div>
      </div>
    );
  }
}


export default withRouter(LoginSignup);
