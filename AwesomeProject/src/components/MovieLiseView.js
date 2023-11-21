import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import HeaderTitle from './HeaderTitle';

const MovieLiseView = ({title, item, index}) => {
  {
    // console.log('asdfghjkasdfghjkesdfgbh', item.cuisine_name);
  }

  let bgColor;
  if (item.id === 11) {
    bgColor = 'pink';
  } else if (item.completed) {
    bgColor = 'green';
  } else {
    bgColor = 'red';
  }

  return (
    <View>
      <TouchableOpacity
        style={{
          height: 40,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 8,
          backgroundColor: bgColor,
          marginHorizontal: 5,
          paddingHorizontal: 10,
        }}>
        <Text style={{color: 'black'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieLiseView;

const styles = StyleSheet.create({});
