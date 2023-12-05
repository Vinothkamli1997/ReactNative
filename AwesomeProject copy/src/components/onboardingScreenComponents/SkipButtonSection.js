import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const SkipButtonSection = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.skipView}
      onPress={() => {
        navigation.replace('Login');
      }}>
      <View style={styles.skipBtn}>
        <Text style={styles.skipText}>Skip</Text>
      </View>
      <View style={styles.skipBtn}>
        <AntDesign name={'right'} size={20} style={styles.skipImage} />
      </View>
    </TouchableOpacity>
  );
};

export default SkipButtonSection;

const styles = StyleSheet.create({
  skipBtn: {
    marginTop: 20,
  },
  skipView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  skipText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
  },
  skipImage: {
    color: 'red',
  },
});
