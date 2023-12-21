import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {color} from '../Constants/Colors';

const SymptomsList = ({title, symtopAction, bgcolor, index, textColor}) => {
  return (
    <TouchableOpacity
      style={{
        height: 46,
        minWidth: 100,
        maxWidth: 800,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: color.primaryColor,
        backgroundColor: bgcolor,
      }}
      onPress={() => {
        symtopAction(index);
      }}>
      <Text style={{color: textColor}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SymptomsList;

const styles = StyleSheet.create({});
