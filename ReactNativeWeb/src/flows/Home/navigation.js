import React from 'react';
import Home from './Home';

import {Route} from 'react-router';

export const flowNames = {
  Home: 'Home',
};

export default function Navigation(navigator) {
  return <Route exact path="/" component={Home} />;
}
