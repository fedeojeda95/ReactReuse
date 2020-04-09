import React from 'react';
import {View, Text, TextInput, SafeAreaView} from 'react-native';

function SecretCodeGenerator({
  onKeywordChange,
  formIsValid,
  secretCode,
  keyword,
}) {
  function valueHasChanged(text) {
    onKeywordChange(text);
  }

  return (
    <SafeAreaView>
      <View
        style={{alignContent: 'center', justifyContent: 'center', margin: 15}}>
        <Text style={{fontSize: 26, textAlign: 'center', marginBottom: 25}}>
          Secret Code Generator!
        </Text>
        <Text style={{fontSize: 18, marginBottom: 15}}>
          Value to generate secret code:
        </Text>
        <TextInput
          style={{
            fontSize: 16,
            marginBottom: 15,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginRight: 40,
          }}
          placeholder="write here your value.."
          value={keyword}
          onChangeText={valueHasChanged}
        />
        <Text style={{fontSize: 18, marginBottom: 15}}>
          {formIsValid
            ? `Secret code: ${secretCode}`
            : 'Write a text to see the secret text generated!'}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SecretCodeGenerator;
