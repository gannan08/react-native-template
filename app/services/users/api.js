import axios from 'axios';
import * as utils from './utils';
import config from '../../config';

const { backend } = config;

export const createUser = user => (
  axios.post(`http://${backend.ip}:${backend.port}/users`, user)
    .then(res => utils.formatUser(res.data))
);

export const authenticateUser = username => (
  axios.get(`http://${backend.ip}:${backend.port}/users?username=${username}`)
    .then(res => res.data[0])
);
