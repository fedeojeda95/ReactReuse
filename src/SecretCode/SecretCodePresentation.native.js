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
      <View>
        <Text>Secret Code Generator!</Text>
        <Text>Value to generate secret code:</Text>
        <TextInput
          placeholder="write here your value.."
          value={keyword}
          onChangeText={valueHasChanged}
        />
        <Text>
          {formIsValid
            ? `Secret code: ${secretCode}`
            : 'Write a text to see the secret text generated!'}
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SecretCodeGenerator;
