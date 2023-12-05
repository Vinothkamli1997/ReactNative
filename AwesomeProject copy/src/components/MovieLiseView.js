import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const MovieLiseView = ({
  name,
  bgcolor,
  index,
  action,
  borderColor,
  titleColor,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          height: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 12,
          marginHorizontal: 5,
          paddingHorizontal: 10,
          marginTop: 12,
          borderWidth: borderColor,
          backgroundColor: bgcolor,
        }}
        onPress={() => {
          action(index);
        }}>
        <Text style={{color: titleColor}}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieLiseView;

const styles = StyleSheet.create({});
