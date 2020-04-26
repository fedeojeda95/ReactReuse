import React from 'react';
import {Route} from 'react-router';

import RepositoriesList from '../RepositoriesList';

export default function Navigation() {
  return <Route path="/repositories" component={RepositoriesList} />;
}
