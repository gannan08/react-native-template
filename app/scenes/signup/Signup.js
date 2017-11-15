import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  Container,
  Content,
  Button,
  Text,
  Form
} from 'native-base';
import TextField from '../../components/TextField';
import styles from './styles';
import { addUser } from '../../services/users';

const mapDispatchToProps = { addUser };

const validate = (form) => {
  let errorMessage = '';
  if (form.username.includes(' ')) {
    errorMessage = 'Username cannot contain spaces';
  }
  if (form.password.includes(' ')) {
    errorMessage = 'Password cannot contain spaces';
  }
  // exclude checking to see if error is filled, so slice 0-4
  Object.keys(form).slice(0, 4).map((field) => {
    if (!form[field]) {
      errorMessage = 'All fields must be filled';
    }
  });
  return errorMessage;
};

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      error: ''
    };
  }

  onSubmit() {
    const error = validate(this.state);
    if (error) {
      this.setState({ error });
    } else {
      this.props.addUser(this.state);
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Form style={styles.mar10}>
            <TextField
              name="First Name"
              value={this.state.firstName}
              onChangeText={text => this.setState({ firstName: text })}
            />
            <TextField
              name="Last Name"
              value={this.state.lastName}
              onChangeText={text => this.setState({ lastName: text })}
            />
            <TextField
              name="Username"
              value={this.state.username}
              onChangeText={text => this.setState({ username: text })}
            />
            <TextField
              secureTextEntry
              name="Password"
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
          </Form>
          <Button
            block
            style={styles.mar10}
            onPress={() => this.onSubmit()}
          >
            <Text>Create account</Text>
          </Button>
          <Text style={styles.formMsg}>{this.state.error}</Text>
          <Button
            transparent
            style={styles.loginBtn}
            onPress={() => Actions.login()}
          >
            <Text style={styles.loginTxt}>Already have an account?</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

Signup.defaultProps = {
  addUser: undefined
};

Signup.propTypes = {
  addUser: PropTypes.func
};

export default connect(null, mapDispatchToProps)(Signup);
