import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import HomeNavigation from '../Home';
import RepositoriesNavigation from '../RepositoriesList';

function Navigation() {
  return (
    <BrowserRouter>
      {HomeNavigation()}
      {RepositoriesNavigation()}
    </BrowserRouter>
  );
}

export default Navigation;
