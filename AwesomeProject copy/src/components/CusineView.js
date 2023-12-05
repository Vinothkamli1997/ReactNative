import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CusineView = ({name, cusineImage, index}) => {
  let hide = index === 0 ? 'none' : 'block';

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 20,
        marginTop: 20,
      }}>
      <View style={{display: hide}}>
        <TouchableOpacity style={styles.cusineBgView}>
          <Image source={{uri: cusineImage}} style={styles.cusineImageView} />
          <Text
            style={{
              top: -20,
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
            }}>
            {name}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CusineView;

const styles = StyleSheet.create({
  cusineBgView: {
    width: 135,
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
    top: -25,
    right: -30,
    borderRadius: 50,
  },
});
