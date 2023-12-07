import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screen/YumboxScreens/LoginScreen';
import SplashScreen from '../screen/SplashScreen';
import ProfileScreen from '../screen/ProfileScreen';
import OnBoardingScreen from '../screen/YumboxScreens/OnBoardingScreen';
import OtpScreen from '../screen/YumboxScreens/OtpScreen';
import BottomTabBar from './BottomTabBar';
import FlavourScreen from '../screen/YumboxScreens/FlavourScreen';
import OrderHistoryScreen from '../screen/YumboxScreens/OrderHistoryScreen';
import AccountScreen from '../screen/YumboxScreens/AccountScreen';

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="OTPScreen" component={OtpScreen} />
      <Stack.Screen name="Home" component={BottomTabBar} />
      <Stack.Screen name="FlavourScreen" component={FlavourScreen} />
      <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
