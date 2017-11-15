import { Actions } from 'react-native-router-flux';
import * as api from './api';

// Action Types
const INITIALIZE = 'posts/INITIALIZE_POSTS';
const CREATE = 'posts/CREATE_POST';
const CLEAR = 'posts/CLEAR';

// Action Creators
const init = posts => ({ type: INITIALIZE, posts });
const create = post => ({ type: CREATE, post });
export const clear = () => ({ type: CLEAR });

// Reducer
export default (posts = [], action) => {
  switch (action.type) {
    case INITIALIZE:
      return action.posts;
    case CREATE:
      return [action.post, ...posts];
    case CLEAR:
      return [];
    default:
      return posts;
  }
};

// Dispatchers
export const loadPosts = username => dispatch => (
  api.getPosts(username)
    .then(posts => dispatch(init(posts)))
    .catch(err => console.error('Could not load posts', err))
);

export const createPost = post => dispatch => (
  api.createPost({
    name: post.user.name,
    username: post.user.username,
    title: `${post.user.username}-post`,
    content: post.content
  }, post)
    .then(createdPost => dispatch(create(createdPost)))
    .then(() => Actions.feed({ type: 'popAndReplace' }))
    .catch(error => console.error('Post unsuccessful', error))
);

