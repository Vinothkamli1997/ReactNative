import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CusineView = ({name, cusineImage, item}) => {
  return item.name !== 'ALL' ? (
    <View style={{flex: 1, paddingVertical: 20}}>
      <TouchableOpacity style={styles.cusineBgView}>
        <Image source={{uri: cusineImage}} style={styles.cusineImageView} />
        <Text style={{top: -20}}>{name}</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <></>
  );
};

export default CusineView;

const styles = StyleSheet.create({
  cusineBgView: {
    width: 130,
    height: 120,
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
    marginHorizontal: 10,
    alignItems: 'center',
  },
  cusineImageView: {
    width: 100,
    height: 100,
    top: -20,
    right: -25,
  },
});
