import 'react-native-gesture-handler';

require('react-native').unstable_enableLogBox();

import {AppRegistry} from 'react-native';
import App from './src/App';
import React from 'react';
import {name as appName} from './app.json';

function Application() {
  return <App />;
}

AppRegistry.registerComponent(appName, () => Application);
