import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MultiAddOnSection = () => {
  return (
    <View style={{gap: 8, margin: 5}}>
      <View
        style={{
          flex: 1,
          paddingVertical: 20,
        }}>
        <View>
          <TouchableOpacity style={styles.cusineBgView}>
            <Image
              source={require('../../assets/images/Buddha.jpeg')}
              style={styles.cusineImageView}
            />
            <Text
              style={{
                top: -20,
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              name
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                top: -15,
                gap: 8,
              }}>
              <Text style={{color: 'black'}}>$10</Text>
              <TouchableOpacity>
                <AntDesign name={'checkcircle'} size={20} color={'red'} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MultiAddOnSection;

const styles = StyleSheet.create({
  cusineBgView: {
    width: 135,
    height: 130,
    borderRadius: 10,
    backgroundColor: 'white',

    shadowColor: 'black',

    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,

    elevation: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cusineImageView: {
    width: 90,
    height: 90,
    top: -20,
    borderRadius: 50,
  },
});
