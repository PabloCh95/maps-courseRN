/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Modal, Text} from 'react-native';
import Map from './src/components/Map/Map';
import ModalMap from './src/components/Modal/ModalMap';

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Map />
        <ModalMap />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {flex: 1},

  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
