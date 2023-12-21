import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [number, setnumber] = useState('');
  const navigation = useNavigation();

  const checkNumber = text => {
    // if (/^\d{0,10}$/.test(text)) {
    setnumber(text);
    // }
  };

  const checkConformBtn = number => {
    if (!/^\d{0,10}$/.test(number)) {
      Alert.alert('Enter a valid mobile number without special characters');
    } else if (number.length === 10) {
      navigation.navigate('OTPScreen', {number: number});
    } else if (number.length === 0) {
      Alert.alert('Enter Mobile number');
    } else {
      Alert.alert('Enter a valid 10-digit number');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/loginBgImg.png')}
        style={styles.imageView}
      />

      <View style={styles.loginBgView}>
        <Text style={styles.loginText}>Login</Text>

        <View style={styles.loginView}>
          <View style={styles.mobileTextField}>
            <TextInput
              onChangeText={checkNumber}
              value={number}
              keyboardType="numeric"
              placeholder="Enter phone number"
              style={{paddingHorizontal: 10}}
              maxLength={10}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={styles.continueBtn}
            onPress={() => checkConformBtn(number)}>
            <Text style={{color: '#ffff'}}>Continue</Text>
          </TouchableOpacity>

          <View style={styles.textView}>
            <Text style={styles.orText}>Or</Text>
            <Text style={styles.contentText}>
              Trouble Receiving OTP? Try Login through G+ button
            </Text>
          </View>

          <TouchableOpacity style={styles.googleBtn}>
            <AntDesign name="googleplus" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imageView: {width: '100%', height: '100%', position: 'absolute'},
  loginBgView: {
    width: '90%',
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  loginView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginLeft: 10,
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginTop: 8,
  },
  countryView: {
    width: 100,
    height: 50,
    backgroundColor: 'white',
    right: 10,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  mobileTextField: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  continueBtn: {
    backgroundColor: 'red',
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
  },
  googleBtn: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  textView: {justifyContent: 'center', alignItems: 'center'},
  orText: {fontSize: 12, marginTop: 8},
  contentText: {textAlign: 'center', fontSize: 14, marginTop: 8},
});
