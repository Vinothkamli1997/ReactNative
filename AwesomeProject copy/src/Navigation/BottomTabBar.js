import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomePage from '../screen/YumboxScreens/HomePage';
import WelcomeScreen from '../screen/YumboxScreens/WelcomeScreen';
import MenuScreen from '../screen/YumboxScreens/MenuScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AccountScreen from '../screen/YumboxScreens/AccountScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import CartSCreen from '../screen/YumboxScreens/CartSCreen';
import SampleHomeScreen from '../screen/sampleProjectScreens/SampleHomeScreen';
import {color} from '../Constants/Colors';
import SampleAccountScreen from '../screen/sampleProjectScreens/SampleAccountScreen';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: color.sapmleprimaryColor,
        inactiveTintColor: 'gray',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={SampleHomeScreen}
        options={({route}) => ({
          tabBarIcon: ({size, focused}) => {
            return (
              <AntDesign
                name="home"
                size={18}
                color={focused ? color.sapmleprimaryColor : 'gray'}
              />
            );
          },
        })}
      />

      {/* <Tab.Screen
        name="Menu"
        component={MenuScreen}
        initialParams={{cat_ID: '-1'}}
        options={({route}) => ({
          tabBarIcon: ({size, focused}) => {
            return (
              <AntDesign
                name="appstore-o"
                size={18}
                color={focused ? 'red' : 'gray'}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Wallet"
        component={WelcomeScreen}
        options={({route}) => ({
          tabBarIcon: ({size, focused}) => {
            return (
              <Entypo
                name="wallet"
                size={18}
                color={focused ? 'red' : 'gray'}
              />
            );
          },
        })}
      />

      <Tab.Screen
        name="Cart"
        component={CartSCreen}
        options={({route}) => ({
          tabBarIcon: ({size, focused}) => {
            return (
              <FontAwesome
                name="shopping-bag"
                size={18}
                color={focused ? 'red' : 'gray'}
              />
            );
          },
        })}
      /> */}

      <Tab.Screen
        name="Account"
        component={SampleAccountScreen}
        options={({route}) => ({
          tabBarIcon: ({size, focused}) => {
            return (
              <FontAwesome
                name="user-o"
                size={18}
                color={focused ? color.sapmleprimaryColor : 'gray'}
              />
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
