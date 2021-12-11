import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default function Input({title, ...rest}: {title: string}): JSX.Element {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...rest} />
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    height: 50,
  },
});
