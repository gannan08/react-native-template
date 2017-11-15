/* eslint-disable no-unused-vars */
import { BACKEND_IP, BACKEND_PORT } from 'react-native-dotenv';
import _ from 'lodash';

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    backend: {
      ip: BACKEND_IP || 'localhost',
      port: BACKEND_PORT || 3000
    }
  },
  development: {},
  production: {}
};

const finalConfig = _.merge(config.all, config[config.all.env]);
export default finalConfig;
