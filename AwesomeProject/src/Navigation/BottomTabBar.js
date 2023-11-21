import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screen/HomeScreen';
import RegisterScreen from '../screen/RegisterScreen';
import ProfileScreen from '../screen/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: '#2D2E8B',
        inactiveTintColor: 'green',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
          tabBarIcon: ({color, size, focused}) => {
            return (
              <FontAwesome
                name="home"
                size={size}
                color={focused ? color : 'black'}
              />
            );
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({route}) => ({
          tabBarIcon: ({color, size, focused}) => {
            return (
              <FontAwesome
                name="user-o"
                size={size}
                color={focused ? color : 'black'}
              />
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
