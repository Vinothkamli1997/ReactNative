import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountHeaderSection = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    getDataFromStorage();
  }, []);

  const getDataFromStorage = async () => {
    try {
      // Retrieve the stored values from AsyncStorage
      const storedName = await AsyncStorage.getItem('storedName');
      const storedNumber = await AsyncStorage.getItem('storedNumber');

      setName(storedName);

      setNumber(storedNumber);

      console.log(' Name:', storedName);
      console.log('Number:', storedNumber);
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
    }
  };

  return (
    <View style={{flexDirection: 'row', padding: 8}}>
      <Image
        source={require('../../assets/images/Programmer.jpg')}
        style={{width: 120, height: 120, borderRadius: 60}}
      />
      <View style={{justifyContent: 'center', paddingHorizontal: 10, gap: 10}}>
        <Text style={styles.textColor}>{name}</Text>

        {/* <Text style={styles.textColor}>Vinothkamlk573@gmail.com</Text> */}
        <Text style={styles.textColor}>{number}</Text>
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
