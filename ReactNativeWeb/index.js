import 'react-native-gesture-handler';

require('react-native').unstable_enableLogBox();

import {AppRegistry} from 'react-native';
import App from './src/App';
import React from 'react';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';

function Application() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Application);
