import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Loader = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setColorIndex(prevIndex => (prevIndex === 0 ? 1 : 0));
      }, 1000); // Adjust the interval as needed
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

export default Loader;

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
