import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const HeaderSection = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          Elite Cakes
        </Text>
        <Text style={{fontSize: 14, color: 'gray'}}>For Elite ones</Text>
      </View>
      <View style={{padding: 8, justifyContent: 'flex-start'}}>
        <Image
          source={require('../../assets/images/Buddha.jpeg')}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
          }}
        />
      </View>
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({});
