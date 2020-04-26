import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import useNavigator from '../../hooks/useNavigator';

import {FlowNames} from '../RepositoriesList';
import styles from './styles';

function Home() {
  const {goTo} = useNavigator();

  const navigateToRepositoriesList = useCallback(
    () => goTo(FlowNames.RepositoriesList),
    [goTo],
  );

  const title = (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Github browser</Text>
      <Text style={styles.subtitle}>Small app to browse github repos</Text>
    </View>
  );

  const startButton = (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={navigateToRepositoriesList}>
      <Text style={styles.button}>Go!</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {title}
      {startButton}
    </View>
  );
}

export default Home;
