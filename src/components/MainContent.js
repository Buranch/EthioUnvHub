import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Question from './Question';
import Sidebar from './Sidebar';
import AskandQuestion from './AskandQuestions';
import LoginSignup from './LoginSignup';
import Tags from './Tags';
import Users from './Users';
import QuestionDetail from './QuestionDetail';
import Ask from './Ask';
import TagDetail from './TagDetail';
import UserProfile from './UserProfile';

class MainContent extends Component {

  render() {
    return (
      <div style={{ display: 'flex', padding: '0px 40px' }}>
        {/* <Questions /> */}
        <Sidebar />
        <Switch>
          <Route exact path='/' component={AskandQuestion} />
          <Route exact path='/tags' component={Tags} />
          <Route exact path='/login' component={LoginSignup} />
          <Route exact path='/signup' component={LoginSignup} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/ask' component={Ask} />
          <Route exact path='/questiondetail' component={QuestionDetail} />
          <Route exact path='/tagdetail' component={TagDetail} />
          <Route path='/profile' component={UserProfile} />
        </Switch>
      </div>
    )
  }
}

export default MainContent;

