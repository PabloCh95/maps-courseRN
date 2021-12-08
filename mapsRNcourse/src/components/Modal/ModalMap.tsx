import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';

export default function ModalMap() {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.center}>
        <View style={styles.modalView}>
          <Text>Hello</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
