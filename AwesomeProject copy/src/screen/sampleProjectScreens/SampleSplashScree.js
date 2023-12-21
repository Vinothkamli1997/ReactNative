import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SampleSplashScree = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      // navigation.replace('OnBoarding');
      checkAsyncStorage();
    }, 1000);
  }, []);

  const checkAsyncStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('someKey');

      if (value === 'true') {
        navigation.replace('SampleHome');
      } else {
        navigation.replace('SampleLogin');
      }
    } catch (error) {
      console.error('Error reading from AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.splashScreenView}>
      <Image
        source={require('../../assets/images/Cons2.jpg')}
        style={styles.splashImage}
      />
      <Text style={styles.titleText}>Constructions</Text>
    </View>
  );
};

export default SampleSplashScree;

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
    color: 'black',
  },
});
