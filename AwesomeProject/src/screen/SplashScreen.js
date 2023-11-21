import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {USEREMAIL} from '../redux/Action';

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('customerID');
      console.log('login ID', value);

      if (value === 'true') {
        dispatch({type: USEREMAIL, payload: {userName: value}});

        navigation.replace('Home');
      } else {
        navigation.replace('Login');
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigation.replace('Login');
  //     }, 2000);
  //   });

  return (
    <View style={styles.splashScreenView}>
      <Image
        source={require('../assets/images/Jesta.png')}
        style={styles.splashImage}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  splashScreenView: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
