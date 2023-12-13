import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const CakeDeatailsImageSection = ({dishImage}) => {
  const navigation = useNavigation();

  return (
    <View style={{width: '100%'}}>
      <View>
        <Image
          source={{uri: dishImage}}
          style={{
            width: '95%',
            height: 350,
            borderRadius: 20,
            marginTop: 5,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            padding: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: 12,
            left: 20,
          }}
          onPress={() => navigation.goBack()}>
          <AntDesign name={'arrowleft'} size={25} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            padding: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            marginTop: 12,
            right: 20,
          }}>
          <AntDesign name={'hearto'} size={25} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            padding: 5,
            backgroundColor: 'white',
            borderRadius: 10,
            right: 20,
            marginTop: 60,
          }}>
          <AntDesign name={'sharealt'} size={25} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CakeDeatailsImageSection;

const styles = StyleSheet.create({});
