import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
  List,
  Button,
  Icon,
  Text
} from 'native-base';

import SinglePost from './components/SinglePost';
import FeedNavbar from './components/FeedNavbar';
import { loadPosts } from '../../services/posts';
import { logoutUser } from '../../services/users';
import styles from './styles';

const mapStateToProps = ({ posts, user }) => ({ posts, user });

const mapDispatchToProps = { loadPosts, logoutUser };

const renderPost = (post, index) => (
  <SinglePost
    key={index}
    name={post.name}
    username={post.username}
    content={post.content}
  />
);

class Feed extends Component {
  componentDidMount() {
    this.props.loadPosts(this.props.user.username);
  }

  render() {
    const endMsg = this.props.posts.length === 0
      ? "There aren't any posts yet!"
      : "That's all the posts for now!";

    return (
      <Container>
        <FeedNavbar
          logout={this.props.logoutUser}
          refresh={this.props.loadPosts}
          username={this.props.user.username}
        />
        <Content>
          <List>
            {
              !!this.props.posts.length && this.props.posts.map(renderPost)
            }
          </List>
          <Text style={styles.end}>{endMsg}</Text>
        </Content>
        <Button
          rounded
          style={styles.button}
          onPress={() => Actions.newPost()}
        >
          <Icon
            name="create"
            style={{ padding: 5 }}
          />
        </Button>
      </Container>
    );
  }
}

Feed.defaultProps = {
  loadPosts: undefined,
  logoutUser: undefined,
  user: {},
  posts: []
};

Feed.propTypes = {
  loadPosts: PropTypes.func,
  logoutUser: PropTypes.func,
  user: PropTypes.shape({
    username: PropTypes.string,
    name: PropTypes.string
  }),
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string,
      username: PropTypes.string
    })
  )
};
export default connect(mapStateToProps, mapDispatchToProps)(Feed);
