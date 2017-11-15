import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Font, AppLoading } from 'expo';
/**
 * We can't `import foo from './app'` so we use './app/index',
 * this is the shorthand for importing modules in javascript
 * Please see Github issues below:
 *   - https://github.com/facebook/react-native/issues/12608
 *   - https://github.com/facebook/react-native/issues/12539
 */
import { Router, store } from './app/index';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Pacifico: require('./app/assets/fonts/Pacifico.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf')
    });

    this.setState({ isReady: true });
  }


  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('main', () => App);
