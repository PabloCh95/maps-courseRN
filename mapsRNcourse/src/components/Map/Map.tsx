import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default function Map(props: any): JSX.Element {
  const {longPress, puntos, pointFilter} = props;

  return (
    <MapView style={styles.map} onLongPress={longPress}>
      {pointFilter &&
        puntos.map((x: any) => {
          return (
            <>
              <Marker coordinate={x.coordinate} title={x.name} />
            </>
          );
        })}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('window').height - 150,
    width: '100%',
  },
});
