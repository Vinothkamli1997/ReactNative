import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CenterTitle = ({title}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
        {title}
      </Text>
    </View>
  );
};

export default CenterTitle;

const styles = StyleSheet.create({});
