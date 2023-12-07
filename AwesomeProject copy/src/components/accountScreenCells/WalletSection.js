import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color} from '../../Constants/Colors';
import {useNavigation} from '@react-navigation/native';

const WalletSection = ({name, image, path}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        width: 70,
        height: 70,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        bottom: 8,
        gap: 5,
      }}
      onPress={() => {
        navigation.navigate(path);
      }}>
      <AntDesign name={image} size={20} color={color.primaryColor} />
      <Text style={{fontSize: 10, fontWeight: 'bold'}}>{name}</Text>
    </TouchableOpacity>
  );
};

export default WalletSection;

const styles = StyleSheet.create({});
