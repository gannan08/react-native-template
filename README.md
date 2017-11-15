# React Native Template
### A minimal, functional, extensible template for React Native Applications

## About

This application will provide all the necessary tools to build an enterprise ready native application. It uses
redux for state management as well as leveraging redux-thunk as a middleware for asynchronous operations. React Native
Router is used to manage the routing of the application. Network requests is handled by the axios Promise
based HTTP client. For configuration we leverage react-native-dotenv so that a .env file can be used to hold
configuration variables for the application. Expo is used to run the application for development and eslint is
used to ensure a cohesive style throughout the project.

Resources:

[React](https://reactjs.org/)

[React Native](https://facebook.github.io/react-native/)

[Redux](https://redux.js.org/)

[Redux-Thunk](https://github.com/gaearon/redux-thunk)

[Axios](https://github.com/axios/axios)

[ESLint](https://eslint.org/)

[Expo](https://expo.io/)

[React Native Router](https://github.com/aksonov/react-native-router-flux/tree/v3)

[React Native Dotenv](https://github.com/zetachang/react-native-dotenv)

### Project Structure

Project structure took hints from many articles, open source react/redux applications and
tutorials. The project took cues from everything "The Twelve-Factor App" guide to github issues.
After careful research, this project structure aims to provide high cohesion and low coupling through
separation of concerns and using a modular design.

Inspiration for Project Structure:

[React + Redux: Architecture Overview](https://medium.com/mofed/react-redux-architecture-overview-7b3e52004b6e)

[10 Tips for Better Redux Architecture](https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44)

[Three Rules For Structuring (Redux) Applications](https://jaysoo.ca/2016/02/28/organizing-redux-application/)

[How to Better Organize Your React Applications](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

[How to Use Redux on Highly Scalable Javascript Applications?](https://medium.com/@alexmngn/how-to-use-redux-on-highly-scalable-javascript-applications-4e4b8cb5ef38)

[Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)

[Putting API calls in the correct place in Redux Apps](https://github.com/reactjs/redux/issues/291)

[A Guide For Building A React Redux CRUD App](https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f)

[The Twelve Factor App](https://12factor.net)

## Commands

After you generate your project, these commands are available in `package.json`.


Run `npm install` to install the dependencies for the project.

### Commands provided by [create-react-native-app](https://github.com/react-community/create-react-native-app/blob/master/README.md):


#### `npm start`

Runs your app in development mode with an interactive prompt. To run it without a prompt, use the `--no-interactive` flag.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a **permanent** action. Please use a version control system, such as git, so you can revert back if necessary. An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.


## Develop locally


### React Native Setup
First, you will need to create an `.env` file that contains your configuration details.  In the top level of the project you can run

```bash
$ touch .env; cat .env.example > .env
```

In the `.env` file, fill out the necessary fields. Note when developing locally you may not be able to use your loopback address (127.0.0.1 or localhost) as the BACKEND_IP.  You will need to use your machines external IP address. Remember that the application is being run on either your phone or an emulator therefore there is no loopback address.

To run the application:
```bash
$ npm start
> react-native-template@0.1.0 start /users/user/react-native-template
> cross-env NODE_ENV=development react-native-scripts start

08:18:96 PM: Starting packager...
Packager started!

```

### Mock RESTful Server Setup

First, change directories into the `backend/` directory. Then run `npm install`.  Once all the dependencies are installed run `npm start`.
```bash
$ npm install
$ npm start

> mock-server@1.0.0 start /users/user/react-native-template/backend
> node server.js

JSON Server is running
```
