import React from 'react';

import {flowNames} from './flowNames';
import Home from '../Home';

export default function Navigation(navigator) {
  const {
    Home: {mobile: screenName},
  } = flowNames;

  console.log('SCREEN NAME:');
  console.log(screenName);

  return (
    <navigator.Screen
      name={screenName}
      component={Home}
      options={{headerShown: false}}
    />
  );
}
