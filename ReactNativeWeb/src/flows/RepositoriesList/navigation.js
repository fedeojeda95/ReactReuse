import React from 'react';
import RepositoriesList from './RepositoriesList';

export const flowNames = {
  RepositoriesList: 'RepositoriesList',
};

export default function Navigation(navigator) {
  return (
    <navigator.Screen
      name={flowNames.RepositoriesList}
      component={RepositoriesList}
      options={{
        title: 'Repositories',
      }}
    />
  );
}
