import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from '../../Constants/Colors';
import {useNavigation} from '@react-navigation/native';

const HeaderSection = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{padding: 10}}>
        <Text
          style={{
            fontSize: 24,
            color: color.sapmleprimaryColor,
            fontWeight: 'bold',
          }}>
          Project Lists
        </Text>
        <Text style={{fontSize: 14, color: 'gray'}}>Pick Your Favourite</Text>
      </View>
      <TouchableOpacity
        style={{padding: 8, justifyContent: 'flex-start'}}
        onPress={() => navigation.navigate('Account')}>
        <Image
          source={require('../../assets/images/Cons3.jpg')}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({});
