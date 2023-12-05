import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const SearchSection = () => {
  return (
    <View
      style={{
        width: '95%',
        backgroundColor: 'white',
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        marginTop: 20,
        bottom: 8,
      }}>
      <TextInput
        placeholder="Search"
        placeholderTextColor="lightgray"
        style={{padding: 10}}
      />
    </View>
  );
};

export default SearchSection;

const styles = StyleSheet.create({});
