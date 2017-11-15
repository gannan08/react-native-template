import axios from 'axios';
import * as utils from './utils';
import config from '../../config';

const { backend } = config;

export const getPosts = username => (
  axios.get(`http://${backend.ip}:${backend.port}/posts?username=${username}`)
    .then(res => (res.data ? utils.formatPosts(res.data.sort(utils.postSorter)) : []))
);

export const createPost = (data, originalPost) => (
  axios.post(`http://${backend.ip}:${backend.port}/posts`, data)
    .then(res => utils.formatPost(res.data, originalPost))
);
