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
    setTimeout(() => {
      // navigation.replace('OnBoarding');
      checkAsyncStorage();
    }, 1000);
  });

  const checkAsyncStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('someKey');

      console.log('Async Value', value);

      if (value === 'true') {
        navigation.replace('Home');
      } else {
        navigation.replace('OnBoarding');
      }
    } catch (error) {
      console.error('Error reading from AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.splashScreenView}>
      <Image
        source={require('../assets/images/walkThroughImage.jpg')}
        style={styles.splashImage}
      />
      <Text style={styles.titleText}>Elite cakes</Text>
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
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
