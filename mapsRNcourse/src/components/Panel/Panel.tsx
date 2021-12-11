import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default function Panel({
  onPressLeft,
  textLeft,
  togglePointsFilter,
}: {
  onPressLeft: () => void;
  textLeft: string;
  togglePointsFilter: () => void;
}): JSX.Element {
  return (
    <View style={styles.container}>
      <Button onPress={onPressLeft} title={textLeft} />
      <Button title="Mostrar/Ocultar" onPress={togglePointsFilter} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
