import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const AccountHeaderSection = () => {
  return (
    <View style={{flexDirection: 'row', padding: 8}}>
      <Image
        source={require('../../assets/images/Buddha.jpeg')}
        style={{width: 120, height: 120, borderRadius: 60}}
      />
      <View style={{justifyContent: 'center', paddingHorizontal: 10, gap: 10}}>
        <Text style={styles.textColor}>Vinoth kamli</Text>

        <Text style={styles.textColor}>Vinothkamlk573@gmail.com</Text>
        <Text style={styles.textColor}>7449269449</Text>
      </View>
    </View>
  );
};

export default AccountHeaderSection;

const styles = StyleSheet.create({
  textColor: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
