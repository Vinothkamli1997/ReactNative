import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import ReferAndEarnHeader from '../../components/referAndEarnScreenCells/ReferAndEarnHeader';

const MyReferralScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TitleSection title={'Refer And Earn'} />
      <ReferAndEarnHeader />
    </View>
  );
};

export default MyReferralScreen;

const styles = StyleSheet.create({});
