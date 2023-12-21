import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {color} from '../../Constants/Colors';

const OtpField = ({mobileNumber}) => {
  const phnnumber = mobileNumber?.number;
  const navigation = useNavigation();

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: 4});
  const [props, getCell] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleCodeChange = code => {
    setValue(code);
  };

  const validation = async () => {
    console.log('first');
    if (value.length === 4) {
      await AsyncStorage.setItem('someKey', 'true');
      // navigation.replace('Home');
      navigation.replace('SampleHome');
    } else {
      Alert.alert('Enter 4 digit');
    }
  };

  const renderCell = ({index, symbol, isFocused}) => (
    <Text key={index} style={[styles.cell, isFocused && styles.focusCell]}>
      {symbol || (isFocused ? <Cursor /> : null)}
    </Text>
  );

  const Cursor = () => <View style={styles.cursor} />;

  return (
    <View style={{marginHorizontal: 30}}>
      <Text style={styles.contextText}>We have sent verification code to</Text>
      <Text style={styles.mobileNumText}>+91 {phnnumber}</Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={handleCodeChange}
        cellCount={4}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={styles.contentText2}>
          Didn't you receive any code? Click
        </Text>
        <TouchableOpacity style={styles.resentBtn}>
          <Text style={{color: 'white'}}>Resend</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.confirmBtn} onPress={() => validation()}>
        <Text style={{color: 'white'}}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpField;

const styles = StyleSheet.create({
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    margin: 4,
    borderRadius: 8,
    backgroundColor: '#00000010',
    padding: 5,
    marginTop: 20,
  },
  focusCell: {
    borderColor: color.sapmleprimaryColor,
    textAlign: 'center',
  },
  cursor: {
    width: 2,
    height: 20,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contextText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
    fontSize: 14,
  },
  mobileNumText: {
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
    fontSize: 14,
  },
  contentText2: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
  },
  resentBtn: {
    width: 80,
    height: 30,
    backgroundColor: color.sapmleprimaryColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmBtn: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.sapmleprimaryColor,
    width: '80%',
    height: 50,
    marginTop: 40,
    borderRadius: 10,
  },
  codeFieldRoot: {
    borderColor: 'red',
  },
});
