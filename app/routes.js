import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import Welcome from './scenes/welcome';
import Login from './scenes/login';
import Signup from './scenes/signup';
import NewPost from './scenes/newPost';
import Feed from './scenes/feed';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="welcome" component={Welcome} title="Welcome" initial />
    <Scene key="login" component={Login} title="Login" type={ActionConst.REPLACE} />
    <Scene key="signup" component={Signup} title="Create New Account" type={ActionConst.REPLACE} />
    <Scene key="feed" component={Feed} title="Your Feed" type={ActionConst.REPLACE} hideNavBar />
    <Scene key="newPost" component={NewPost} title="Make a new post" />
  </Scene>
);

export default () => (
  <Router scenes={scenes} />
);
