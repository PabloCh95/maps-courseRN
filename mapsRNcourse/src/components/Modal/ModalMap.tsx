import React from 'react';
import {View, StyleSheet, Modal, Dimensions} from 'react-native';

export default function ModalMap({
  children,
  isVisible,
}: {
  children: JSX.Element;
  isVisible: boolean;
}) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.center}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#000',
    minWidth: Dimensions.get('window').width - 100,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
