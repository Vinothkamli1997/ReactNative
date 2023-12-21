import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SampleProjectList = ({name, duration, image}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.bg}
      onPress={() => navigation.navigate('SampleProjectListScreen')}>
      <View style={{gap: 5}}>
        <Image
          source={image}
          style={{
            width: 100,
            height: 100,
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
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <Text style={{textAlign: 'center', fontSize: 12}}>Course Title:</Text>
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', color: 'black'}}>
            {name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SampleProjectList;

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
