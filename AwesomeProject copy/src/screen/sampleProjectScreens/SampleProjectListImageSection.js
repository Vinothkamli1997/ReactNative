import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const SampleProjectListImageSection = ({nameee, imagesss}) => {
  return (
    <View
      style={{
        minWidth: '40%',
        maxWidth: 230,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        alignSelf: 'center',
        gap: 5,
        top: 8,
      }}>
      <Image
        source={imagesss}
        style={{
          width: 160,
          height: 160,
          alignSelf: 'center',
          marginTop: -10,
          borderRadius: 20,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      />
      <Text style={{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
        {nameee}
      </Text>
    </View>
  );
};

export default SampleProjectListImageSection;

const styles = StyleSheet.create({
  bg: {
    minWidth: '40%',
    maxWidth: 230,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
