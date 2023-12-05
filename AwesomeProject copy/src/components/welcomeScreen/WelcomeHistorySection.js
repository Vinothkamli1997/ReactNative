import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WelcomeHistorySection = ({name, time, type, coins}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '95%',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 15,
        height: 80,
        borderRadius: 10,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        bottom: 10,
      }}>
      <Image
        source={require('../../assets/images/Earn.png')}
        style={{
          width: 50,
          height: 50,
          alignSelf: 'center',
          marginHorizontal: 10,
        }}
      />

      <View
        style={{
          flexGrow: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <View style={{gap: 5}}>
          <Text style={{fontWeight: 'bold', fontSize: 16, color: 'black'}}>
            {name}
          </Text>
          <Text style={{fontWeight: '300', fontSize: 12, color: 'black'}}>
            {time}
          </Text>
        </View>

        <View style={{paddingHorizontal: 10, alignItems: 'center', gap: 5}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 14,
              color: type === 'DEBIT' ? 'red' : 'green',
            }}>
            {type === 'DEBIT' ? '-' : '+'}
            {coins}
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 14,
              color: type === 'DEBIT' ? 'red' : 'green',
            }}>
            {type}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WelcomeHistorySection;

const styles = StyleSheet.create({});
