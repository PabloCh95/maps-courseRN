import React from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Button,
} from 'react-native';

export default function List({
  puntos,
  setIsVisible,
}: {
  puntos: any;
  setIsVisible: React.SetStateAction<boolean>;
}): JSX.Element {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={puntos}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.name}
        />
      </View>
      <View style={styles.button}>
        <Button title="Cerrar" onPress={() => setIsVisible(false)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {paddingBottom: 15},
  list: {
    height: Dimensions.get('window').height - 250,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 50,
    justifyContent: 'center',
    padding: 15,
  },
});
