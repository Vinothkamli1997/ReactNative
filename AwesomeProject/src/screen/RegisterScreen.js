import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const [password, setPassword] = useState('');
  const [conformPassword, setconformPassword] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.backButtonView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/backButton2.png')}
            style={styles.backButton}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.headerTextView}>
        <Text style={styles.headerText}>Hello! Register to get started</Text>
      </View>

      <View style={styles.textFieldView}>
        <TextInput
          style={styles.inputFields}
          onChangeText={setuserName}
          value={userName}
          placeholder="User name"
          placeholderTextColor={'gray'}
        />
        <View style={styles.textFieldView}>
          <TextInput
            style={styles.inputFields}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor={'gray'}
          />
        </View>

        <View style={styles.textFieldView}>
          <TextInput
            style={styles.inputFields}
            onChangeText={setMobileNum}
            value={mobileNum}
            placeholder="Mobile Number"
            placeholderTextColor={'gray'}
          />
        </View>
        <View style={styles.textFieldView}>
          <TextInput
            style={styles.inputFields}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor={'gray'}
          />
        </View>
        <View style={styles.textFieldView}>
          <TextInput
            style={styles.inputFields}
            onChangeText={setconformPassword}
            value={conformPassword}
            placeholder="Confirm Password"
            placeholderTextColor={'gray'}
          />
        </View>
      </View>

      <View style={styles.registerBtnView}>
        <TouchableOpacity>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginView}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backButton: {
    width: 45,
    height: 45,
    marginTop: 10,
    marginLeft: 10,
  },
  headerTextView: {
    width: '80%',
    marginLeft: 10,
    marginTop: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  textFieldView: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  inputFields: {
    backgroundColor: '#E8ECF4',
    width: '90%',
    height: 50,
    borderRadius: 10,
    padding: 10,
  },
  registerBtnView: {
    width: '80%',
    height: 50,
    marginTop: 20,
    backgroundColor: '#2D2E8B',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 23,
  },
  registerText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  loginView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loginText: {
    color: '#2D2E8B',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
  },
});
