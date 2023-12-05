import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EarningSection = ({id, name, description, subTitle}) => {
  const imageSource = () => {
    switch (id) {
      case 'Welcome Bonus':
        return require('../../assets/images/welcome.png');
      case '2':
        return require('../../assets/images/special.png');
      case '3':
        return require('../../assets/images/profile_earn.png');
      case '4':
        return require('../../assets/images/Earn.png');
      case '5':
        return require('../../assets/images/special.png');
      case '6':
        return require('../../assets/images/Thumsup.jpeg');
      default:
        return require('../../assets/images/Earn.png');
    }
  };

  return (
    <View
      style={{
        width: '95%',
        minHeight: 80,
        maxHeight: 100,
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: 15,
        borderRadius: 10,
        flexDirection: 'row',
        bottom: 10,

        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <View style={{justifyContent: 'center', marginHorizontal: 10}}>
        <Image
          source={imageSource()}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      </View>

      <View style={{justifyContent: 'center', flex: 1, gap: 5}}>
        <Text
          style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}
          numberOfLines={2}
          ellipsizeMode="tail">
          {name}
        </Text>
        <Text
          style={{fontSize: 12, color: 'black'}}
          numberOfLines={2}
          ellipsizeMode="tail">
          {description}
        </Text>
        <Text
          style={{fontSize: 12, color: 'black'}}
          numberOfLines={2}
          ellipsizeMode="tail">
          {subTitle}
        </Text>
      </View>
    </View>
  );
};

export default EarningSection;

const styles = StyleSheet.create({});
