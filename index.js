/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import index from './src';
// import App from './App';
// import Login from './src/components/Login.js';

AppRegistry.registerComponent(appName, () => index);
