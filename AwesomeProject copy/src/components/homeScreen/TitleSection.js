import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const TitleSection = ({title, showAllAction}) => {
  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
        {title}
      </Text>
      <TouchableOpacity onPress={showAllAction}>
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'red'}}>
          Show All
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TitleSection;

const styles = StyleSheet.create({});
