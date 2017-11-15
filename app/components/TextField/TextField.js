import React from 'react';
import PropTypes from 'prop-types';
import { Item, Label, Input } from 'native-base';
import styles from './styles';

const TextField = props => (
  <Item stackedLabel>
    <Label>{props.name}</Label>
    <Input
      {...props}
      autoCapitalize="none"
      style={props.big ? styles.big : styles.small}
      maxLength={props.big ? 140 : 30}
      multiline={props.big}
      numberOfLines={props.big ? 5 : 1}
    />
  </Item>
);

TextField.defaultProps = {
  big: false,
  name: ''
};

TextField.propTypes = {
  big: PropTypes.bool,
  name: PropTypes.string
};

export default TextField;
