import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const TimeSlotSection = ({time}) => {
  return (
    <TouchableOpacity
      style={{
        width: 100,
        justifyContent: 'space-between',
        padding: 8,
        marginHorizontal: 10,
        borderRadius: 15,
        alignItems: 'center',
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
        backgroundColor: 'white',
      }}>
      <Text style={{gap: 10}}>{time}</Text>
    </TouchableOpacity>
  );
};

export default TimeSlotSection;

const styles = StyleSheet.create({});
