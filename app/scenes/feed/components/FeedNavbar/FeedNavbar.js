import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  Button,
  Icon,
  Header,
  Title,
  Left,
  Right,
  Body } from 'native-base';


const FeedNavbar = props => (
  <Header>
    <Left>
      <Button
        transparent
        onPress={() => props.logout()}
      >
        <Text>Log out</Text>
      </Button>
    </Left>
    <Body>
      <Title>Your feed</Title>
    </Body>
    <Right>
      <Button
        transparent
        onPress={() => props.refresh(props.username)}
      >
        <Icon name="refresh" />
      </Button>
    </Right>
  </Header>
);


FeedNavbar.defaultProps = {
  logout: undefined,
  username: '',
  refresh: undefined
};

FeedNavbar.propTypes = {
  logout: PropTypes.func,
  username: PropTypes.string,
  refresh: PropTypes.func
};

export default FeedNavbar;
