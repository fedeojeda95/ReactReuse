import React from 'react';
import {Route} from 'react-router';

import Home from '../Home';

export default function Navigation(navigator) {
  return <Route exact path="/" component={Home} />;
}
