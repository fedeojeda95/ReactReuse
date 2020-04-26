import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeNavigation from '../Home';
import RepositoriesNavigation from '../RepositoriesList';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {HomeNavigation(Stack)}
        {RepositoriesNavigation(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
