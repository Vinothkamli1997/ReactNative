import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const WelcomeSection = ({name, coin}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.welcomeBgView}
      onPress={() => {
        navigation.navigate('Wallet');
      }}>
      <View style={styles.imageAndContentView}>
        <Image
          source={require('../../assets/images/Buddha.jpeg')}
          style={styles.image}
        />
        <View>
          <Text style={styles.text1}>{name}</Text>
          <Text style={styles.text2}>you have {coin} SUPER COINS</Text>
        </View>
      </View>
      <View>
        <AntDesign name="arrowright" size={26} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default WelcomeSection;

const styles = StyleSheet.create({
  welcomeBgView: {
    width: '95%',
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 8,
    flexDirection: 'row',

    shadowColor: 'black',
    shadowOffset: {
      width: 0.0,
      height: 0.0,
    },

    shadowOpacity: 0.3,
    elevation: 3,
  },
  imageAndContentView: {flexDirection: 'row', alignItems: 'center', gap: 10},
  image: {width: 60, height: 60, borderRadius: 30},
  text1: {fontSize: 16, fontWeight: 'bold', color: 'black'},
  text2: {fontSize: 14, fontWeight: '400', color: 'black'},
});
