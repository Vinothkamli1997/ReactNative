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
import MyReferralScreen from '../screen/YumboxScreens/MyReferralScreen';
import AddEventScreen from '../screen/YumboxScreens/AddEventScreen';
import CardManagementScreen from '../screen/YumboxScreens/CardManagementScreen';
import AboutUsScreen from '../screen/YumboxScreens/AboutUsScreen';
import HelpCenterScreen from '../screen/YumboxScreens/HelpCenterScreen';
import MyFavouriteScreen from '../screen/YumboxScreens/MyFavouriteScreen';
import NewProfileScreen from '../screen/YumboxScreens/NewProfileScreen';
import CakeDetailsScreen from '../screen/YumboxScreens/CakeDetailsScreen';
import CakeAddOnScreen from '../screen/YumboxScreens/CakeAddOnScreen';
import CartSCreen from '../screen/YumboxScreens/CartSCreen';
import ApplyCouponScreen from '../screen/YumboxScreens/ApplyCouponScreen';
import OrderSummaryScreen from '../screen/YumboxScreens/OrderSummaryScreen';
import SampleSplashScree from '../screen/sampleProjectScreens/SampleSplashScree';
import SampleLoginScreen from '../screen/sampleProjectScreens/SampleLoginScreen';
import SampleOtpScreen from '../screen/sampleProjectScreens/SampleOtpScreen';
import SampleHomeScreen from '../screen/sampleProjectScreens/SampleHomeScreen';
import SampleProjectList from '../screen/sampleProjectScreens/SampleProjectList';
import SampleProjectListScreen from '../screen/sampleProjectScreens/SampleProjectListScreen';
import SampleAccountScreen from '../screen/sampleProjectScreens/SampleAccountScreen';

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="SplashNew"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="OTPScreen" component={OtpScreen} />
      <Stack.Screen name="SampleHome" component={BottomTabBar} />
      <Stack.Screen name="FlavourScreen" component={FlavourScreen} />
      <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="MyReferralScreen" component={MyReferralScreen} />
      <Stack.Screen name="AddEventScreen" component={AddEventScreen} />
      <Stack.Screen
        name="CardManagementScreen"
        component={CardManagementScreen}
      />
      <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
      <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
      <Stack.Screen name="MyFavouriteScreen" component={MyFavouriteScreen} />
      <Stack.Screen name="NewProfileScreen" component={NewProfileScreen} />
      <Stack.Screen name="CakeDetailsScreen" component={CakeDetailsScreen} />
      <Stack.Screen name="CakeAddOnScreen" component={CakeAddOnScreen} />
      <Stack.Screen name="CartSCreen" component={CartSCreen} />
      <Stack.Screen name="ApplyCouponScreen" component={ApplyCouponScreen} />
      <Stack.Screen name="OrderSummaryScreen" component={OrderSummaryScreen} />

      {/* New Sample Project */}
      <Stack.Screen name="SplashNew" component={SampleSplashScree} />
      <Stack.Screen name="SampleLogin" component={SampleLoginScreen} />
      <Stack.Screen name="SampleOtpScreen" component={SampleOtpScreen} />
      <Stack.Screen
        name="SampleAccountScreen"
        component={SampleAccountScreen}
      />

      {/* <Stack.Screen name="SampleHome" component={SampleHomeScreen} /> */}
      <Stack.Screen
        name="SampleProjectListScreen"
        component={SampleProjectListScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
