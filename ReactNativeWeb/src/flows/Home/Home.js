import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {FlowNames} from '../RepositoriesList';
import styles from './styles';

function Home(props) {
  const {navigation} = props;
  const navigateToRepositoriesList = useCallback(
    () => navigation.navigate(FlowNames.RepositoriesList),
    [navigation],
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
