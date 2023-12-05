import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WelcomeScreenHeaderSection = ({balance, usedCoin, usedAmount}) => {
  return (
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
          My Wallet
        </Text>

        <View
          style={{
            width: '90%',
            height: 150,
            backgroundColor: 'white',
            borderRadius: 20,
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <View style={{justifyContent: 'center', paddingHorizontal: 10}}>
            <Image
              source={require('../../assets/images/Earn.png')}
              style={{width: 80, height: 80, borderRadius: 20}}
            />
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Balance
            </Text>
            <Text
              style={{
                textAlign: 'center',
                color: 'black',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              {balance}
            </Text>
          </View>
          <View
            style={{gap: 20, justifyContent: 'center', paddingHorizontal: 10}}>
            <View>
              <Text style={{textAlign: 'center'}}>Total Earned Coins</Text>
              <Text style={{textAlign: 'center'}}>{usedCoin}</Text>
            </View>

            <View>
              <Text style={{textAlign: 'center'}}>Used Coins</Text>
              <Text style={{textAlign: 'center'}}>{usedAmount}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreenHeaderSection;

const styles = StyleSheet.create({});
