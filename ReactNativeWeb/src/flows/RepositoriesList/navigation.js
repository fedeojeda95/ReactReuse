import React from 'react';
import RepositoriesList from './RepositoriesList';
import {Route} from 'react-router';

export const flowNames = {
  RepositoriesList: '/repositories',
};

export default function Navigation() {
  return <Route path="/repositories" component={RepositoriesList} />;
}
