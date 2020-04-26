import React from 'react';

import {flowNames} from './flowNames';
import RepositoriesList from '../RepositoriesList';

export default function Navigation(navigator) {
  const {
    RepositoriesList: {mobile: screenName},
  } = flowNames;

  return (
    <navigator.Screen
      name={screenName}
      component={RepositoriesList}
      options={{
        title: 'Repositores',
      }}
    />
  );
}
