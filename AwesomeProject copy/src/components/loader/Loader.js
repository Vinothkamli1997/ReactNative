import React, {useState, useEffect} from 'react';
import {Modal, View, ActivityIndicator, StyleSheet} from 'react-native';

export const Loader = ({loading}) => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setColorIndex(prevIndex => (prevIndex === 0 ? 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [loading]);

  const getColor = () => {
    return colorIndex === 0 ? '#018CCE' : '#3E53A0';
  };

  return (
    <Modal
      transparent={true}
      visible={loading}
      animationType="fade"
      style={{alignSelf: 'center'}}>
      <View style={styles.modalView}>
        <View style={styles.loaderView}>
          <ActivityIndicator size={'large'} color={getColor()} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loaderView: {
    position: 'absolute',
    padding: 3,
    borderRadius: 10,
  },
});
