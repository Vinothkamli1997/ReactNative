import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import ForgotPasswordScreen from '../screen/ForgotPasswordScreen';
import SplashScreen from '../screen/SplashScreen';
import DrawerNavigation from './DrawerNavigation';
import DoctorDetailsScreen from '../screen/DoctorDetailsScreen';
import ProfileScreen from '../screen/ProfileScreen';
import EditProfile from '../screen/EditProfile';
import TopDoctor from '../screen/TopDoctor';
import TopTabBiew from '../screen/TopTabBiew';
import TabViewDoctorDetailsScree from '../screen/TabViewDoctorDetailsScree';

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="DoctorDetailsScreen"
        component={DoctorDetailsScreen}
      />
      <Stack.Screen name="Home" component={DrawerNavigation} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="TopDoctor" component={TopDoctor} />
      <Stack.Screen name="TopTabBiew" component={TopTabBiew} />
      <Stack.Screen
        name="TabViewDoctorDetailsScree"
        component={TabViewDoctorDetailsScree}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
