import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Text,
  Button
} from 'native-base';
import { View } from 'react-native';
import TextField from '../../components/TextField';
import styles from './styles';

import { createPost } from '../../services/posts';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = { createPost };

class NewPost extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      error: ''
    };
  }
  onSubmit() {
    if (this.state.content) {
      this.props.createPost({
        user: this.props.user,
        content: this.state.content
      });
    } else {
      this.setState({ error: 'You have to write something!' });
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.formMsg}>{this.state.error}</Text>
          <View style={styles.input}>
            <TextField
              big
              name="What's up?"
              value={this.state.post}
              onChangeText={text => this.setState({ content: text })}
            />
            <Button
              rounded
              style={styles.button}
              onPress={() => this.onSubmit()}
            >
              <Text>Post</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

NewPost.defaultProps = {
  createPost: undefined,
  user: {}
};

NewPost.propTypes = {
  createPost: PropTypes.func,
  user: PropTypes.shape({
    username: PropTypes.string,
    name: PropTypes.string
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
