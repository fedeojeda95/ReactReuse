import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeNavigation, {FlowNames} from '../Home';
import RepositoriesNavigation from '../RepositoriesList';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName={FlowNames.Home}>
      {HomeNavigation(Stack)}
      {RepositoriesNavigation(Stack)}
    </Stack.Navigator>
  );
}

export default Navigation;
