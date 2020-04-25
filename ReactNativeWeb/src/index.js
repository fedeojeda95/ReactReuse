import {AppRegistry} from 'react-native';
import App from './App';

import {createBrowserApp} from '@react-navigation/web';

const Application = createBrowserApp(App);

AppRegistry.registerComponent('App', () => Application);

AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root'),
});
