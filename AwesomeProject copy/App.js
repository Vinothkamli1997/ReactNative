import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/Navigation/AuthStack';
import {Provider} from 'react-redux';
import store from './src/redux/Store';
import {color} from './src/Constants/Colors';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={color.sapmleprimaryColor} />
        <AuthStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
