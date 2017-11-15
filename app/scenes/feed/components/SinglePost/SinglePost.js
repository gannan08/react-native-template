import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Text, Body } from 'native-base';
import { View } from 'react-native';
import styles from './styles';

const SinglePost = props => (
  <ListItem>
    <Body>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.username}>@{props.username}</Text>
      </View>
      <Text style={styles.content}>{props.content}</Text>
    </Body>
  </ListItem>
);


SinglePost.defaultProps = {
  name: '',
  username: '',
  content: ''
};

SinglePost.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  content: PropTypes.string
};

export default SinglePost;
