import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../../Constants/Colors';

const AddEventFirstList = ({name}) => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        bottom: 10,
        marginTop: 20,
      }}>
      <Image
        source={require('../../assets/images/Father.jpg')}
        style={{width: 110, height: 110, borderRadius: 55}}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 18,
          right: 8,
        }}>
        <AntDesign name={'pluscircle'} size={24} color={color.primaryColor} />
      </View>
      <Text
        style={{
          textAlign: 'center',
          color: 'gray',
          fontSize: 14,
          fontWeight: '600',
          marginTop: 5,
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default AddEventFirstList;

const styles = StyleSheet.create({});
