import React from 'react';
import Home from './Home';

export const flowNames = {
  Home: 'Home',
};

export default function Navigation(navigator) {
  return (
    <navigator.Screen
      name={flowNames.Home}
      component={Home}
      options={{headerShown: false}}
    />
  );
}
