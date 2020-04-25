import React from 'react';
import {NativeRouter} from 'react-router-native';

import HomeNavigation from '../Home';
import RepositoriesNavigation from '../RepositoriesList';

function Navigation() {
  return (
    <NativeRouter>
      {HomeNavigation()}
      {RepositoriesNavigation()}
    </NativeRouter>
  );
}

export default Navigation;
