import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const DoctorDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text>Learn JustifyCenter</Text>
      </View>
      <Text>Learn JustifyCenter</Text>
    </View>
  );
};

export default DoctorDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    width: '100%',
    height: 220,
    backgroundColor: 'yellow',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
  },
});
