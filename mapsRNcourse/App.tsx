/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Button} from 'react-native';
import Map from './src/components/Map/Map';
import ModalMap from './src/components/Modal/ModalMap';
import Panel from './src/components/Panel/Panel';
import Input from './src/components/Input/Input';
import List from './src/components/List/List';

export default function App(): JSX.Element {
  const [puntos, setPuntos] = useState([]);
  const [puntoTemp, setPuntoTemp] = useState({});
  const [nombre, setNombre] = useState('');
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto');
  const [isVisible, setIsVisible] = useState(false);
  const [pointFilter, setPointFilter] = useState(true);

  const togglePointsFilter = () => setPointFilter(!pointFilter);

  const handleLongPress = ({nativeEvent}: any) => {
    setVisibilityFilter('new_punto');
    setPuntoTemp(nativeEvent.coordinate);
    setIsVisible(true);
  };
  const handleChangeText = (text: any) => {
    setNombre(text);
  };

  const handleSubmit = () => {
    const newPuntos = {coordinate: puntoTemp, name: nombre};
    setPuntos(puntos.concat(newPuntos));
    setIsVisible(false);
    setNombre('');
  };

  const handleList = () => {
    setVisibilityFilter('all-puntos');
    setIsVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Map
          longPress={handleLongPress}
          puntos={puntos}
          pointFilter={pointFilter}
        />
        <Panel
          onPressLeft={handleList}
          textLeft="Lista"
          togglePointsFilter={togglePointsFilter}
        />
        <ModalMap isVisible={isVisible}>
          {visibilityFilter === 'new_punto' ? (
            <View style={styles.form}>
              <Input
                title="Nombre"
                placeholder="Nombre de la ubicacion"
                onChangeText={handleChangeText}
              />
              <Button title="Aceptar" onPress={handleSubmit} />
            </View>
          ) : (
            <>
              <List puntos={puntos} setIsVisible={setIsVisible} />
            </>
          )}
        </ModalMap>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  safeArea: {flex: 1},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
});
