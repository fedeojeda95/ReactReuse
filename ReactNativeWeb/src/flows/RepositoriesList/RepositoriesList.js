import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {useHistory} from 'react-router';

const styles = StyleSheet.create({
  backButton: {margin: 10, fontSize: 18, fontWeight: '200'},
  mainText: {marginTop: 40, textAlign: 'center', fontSize: 32},
});

function RepositoriesList() {
  const history = useHistory();
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => {
            history.goBack();
          }}>
          <Text style={styles.backButton}>{'<- Back'}</Text>
        </TouchableOpacity>
        <Text style={styles.mainText}>Repositories!</Text>
        <Text style={styles.mainText}>{Platform.OS}</Text>
      </View>
    </SafeAreaView>
  );
}
export default RepositoriesList;
