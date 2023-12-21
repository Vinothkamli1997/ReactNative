import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AccountHeaderSection from '../../components/accountScreenCells/AccountHeaderSection';
import LogoutSection from '../../components/accountScreenCells/LogoutSection';

const SampleAccountScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <AccountHeaderSection />
      <LogoutSection />
    </View>
  );
};

export default SampleAccountScreen;

const styles = StyleSheet.create({});
