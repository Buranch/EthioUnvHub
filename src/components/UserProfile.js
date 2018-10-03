import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Avatar, Icon } from 'antd';
import ShortQuestions from './ShortQuestions';
import ShortAnswers from './ShortAnswers';

const activeStyle = {
    borderBottom: '4px solid #f29c11'
}

class UserProfile extends Component {
    render() {
        const pathName = this.props.history.location.pathname;
        return (
            <div style={{ padding: '24px 0px', display: 'flex', flexDirection: 'column', flexGrow: 1, borderLeft: '1px solid #e8e8e8' }}>
                <div style={{ padding: '0px 20px', marginBottom: '10px' }}>
                    <h2>Henok Tesfaye's Profile</h2>
                </div>
                <div style={{ marginBottom: '10px' ,padding: '25px 30px', borderTop: '1px solid #e4e6e8', borderBottom: '1px solid #e4e6e8' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ marginRight: '10px' }}>
                                <Avatar size={70} icon="user" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>   
                                <h3 style={{ marginBottom: '7px' }}>Henok Tesfaye</h3>
                                <div style={{ display: 'flex', marginBottom: '3px' }}>
                                    <Icon theme= "filled" type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />
                                    <span style={{ fontSize: '13px', marginTop: '-3px', marginLeft: '5px' }}>debre Tabor, around selasie church</span>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <Icon type="inbox" style={{ color: 'rgba(0,0,0,.25)' }} />
                                    <span style={{ fontSize: '13px', marginTop: '-3px', marginLeft: '5px' }}>henoktes72@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ minWidth: '250px', justifyContent:'space-between' ,display: 'flex', alignItems: 'center', height: '64px', paddingRight: '20px' }}>
                            <div style={{ paddingLeft: '5px', borderLeft: '4px solid #78829d', display: 'flex', flexDirection:'column', justifyContent:'center', marginRight: '10px' }}>
                                <span>Questions</span>
                                <h1 style={{ color: '#78829d', marginBottom: '0px', lineHeight: 1 }}>14</h1>
                            </div>
                            <div style={{ paddingLeft: '5px', borderLeft: '4px solid #78829d', display: 'flex', flexDirection:'column', justifyContent:'center' }}>
                                <span>Answers</span>
                                <h1 style={{ color: '#78829d', marginBottom: '0px', lineHeight: 1 }}>34</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', padding: '0px 30px' }}>
                    <div style={ pathName === '/profile' ? {...activeStyle, marginRight: '30px', paddingBottom: '8px'} : {marginRight: '30px', paddingBottom: '8px'}}>
                        <Link style={{ textDecoration: 'none' }} to='/profile'><p style={{ marginBottom: '0px', textDecoration: 'none !important' }}>Questions</p></Link>
                    </div>
                    <div style={ pathName === '/profile/answers' ? {...activeStyle, paddingBottom: '8px'}: {paddingBottom: '8px'}}>
                        <Link style={{ textDecoration: 'none' }} to='/profile/answers'><p style={{ marginBottom: '0px' }}>Answers</p></Link>
                    </div>
                </div>
                <Switch>
                    <Route exact path='/profile/answers' component={ShortAnswers} />
                    <Route exact path='/profile' component={ShortQuestions} />
                </Switch>
            </div>
        );
    }
}

export default UserProfile;
