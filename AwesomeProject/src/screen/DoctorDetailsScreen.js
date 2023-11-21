import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const DoctorDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.textView}>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
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
  },
});
