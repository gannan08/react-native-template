import { Actions } from 'react-native-router-flux';
import * as api from './api';
import { clear } from '../posts';

// Action Types
const CREATE_USER = 'users/CREATE_USER';
const LOGIN = 'users/LOGIN';
const LOGOUT = 'users/LOGOUT';

// Action Creators
export const createUser = user => ({ type: CREATE_USER, user });
export const login = user => ({ type: LOGIN, user });
export const logout = () => ({ type: LOGOUT });

// Reducer
export default reducer = (user = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.user;
    case LOGIN:
      return action.user;
    case LOGOUT:
      return {};
    default:
      return user;
  }
};

// Dispatcher
export const addUser = user => dispatch => (
  api.createUser({
    name: `${user.firstName} ${user.lastName}`,
    username: user.username,
    password: user.password
  })
    .then(createdUser => dispatch(createUser(createdUser)))
    .then(() => Actions.feed())
    .catch(err => console.error('Creating user unsuccessful', err))
);

export const authenticate = user => dispatch => (
  api.authenticateUser(user.username)
    .then((data) => {
      if (data === 'Username invalid') {
        return data;
      } else if (data.password === user.password) {
        dispatch(login({
          name: data.name,
          username: data.username
        }));
        return 'Login Succesful';
      }
      return 'Password invalid';
    })
    .catch(error => console.error('Login unsuccessful', error))
);

export const logoutUser = () => (dispatch) => {
  dispatch(logout());
  dispatch(clear());
  Actions.welcome();
};
