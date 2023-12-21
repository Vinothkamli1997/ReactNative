import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {
  GOOGLEUSERINFO,
  PROFILEINFO,
  USEREMAIL,
  USERID,
  USERINFO,
} from '../redux/Action';

import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const LoginScreen = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const [email, setEmail] = useState('');
  const [password, setPwd] = useState('');
  // const [num, setNum] = useState('101');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('customerID', value.toString());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Configure Google Sign-In
    GoogleSignin.configure({
      clientId:
        '152977427144-0rims7le1vksljg0it96okn0m4iq5btk.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    });
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const hasPlayServices = await GoogleSignin.hasPlayServices();
      if (!hasPlayServices) {
        console.error('Google Play Services are not available or outdated.');
        return;
      } else {
        const userInfo = await GoogleSignin.signIn();
        const {email, givenName, familyName, photo} = userInfo.user;

        console.error('Google given name.', givenName);

        if (photo !== null && photo !== undefined) {
          setImage(photo);
          await AsyncStorage.setItem('ProfileImage', photo);
        } else {
        }

        if (photo) {
          await AsyncStorage.setItem('ProfileImage', photo);
        }

        await AsyncStorage.setItem('ProfileImage', photo);
        await AsyncStorage.setItem('ProfileName', givenName);
        await AsyncStorage.setItem('ProfileLastName', familyName);
        await AsyncStorage.setItem('ProfileEmail', email);

        let payload = {
          name: givenName,
          image: photo,
          email: email,
          lastname: familyName,
        };

        dispatch({type: GOOGLEUSERINFO, payload: payload});

        // Remove the following line as you don't need to set 'customerID' here.
        // AsyncStorage.setItem('customerID', 'true');

        console.log('Before navigation');
        navigation.navigate('Home', {photoURL: photo});
        console.log('After navigation');
      }
    } catch (error) {
      // Handle errors
      console.error('Google Sign-In Error:', error);
    }
  };

  const navigation = useNavigation();

  const isEmailValid = async () => {
    if (!email) {
      Alert.alert('Login Failed', 'Enter Emial', [
        {
          text: 'Ok',
        },
      ]);
    } else if (!emailRegex.test(email)) {
      Alert.alert('Login Failed', 'Enter Valid Email', [
        {
          text: 'ok',
        },
      ]);
    } else if (!password) {
      Alert.alert('Login Failed', 'Enter Password', [
        {
          text: 'ok',
        },
      ]);
    } else if (/^\s+$/.test(password)) {
      Alert.alert('Login Failed', 'Password cannot be empty', [
        {
          text: 'OK',
        },
      ]);
    } else if (/\s/.test(password)) {
      Alert.alert('Login Failed', 'Password cannot contain spaces', [
        {
          text: 'OK',
        },
      ]);
    } else if (password.length < 8) {
      Alert.alert('Login Failed', 'Enter 8 digit password', [
        {
          text: 'ok',
        },
      ]);
    } else {
      await AsyncStorage.setItem('customerID', 'true');

      // dispatch({type: GOOGLEUSERINFO, payload: {email: email}});
      await AsyncStorage.setItem('UserName', email);

      let payload = {
        name: '',
        image: '',
        email: email,
        lastname: '',
      };

      dispatch({type: GOOGLEUSERINFO, payload: payload});

      setEmail('');
      setPwd('');

      navigation.replace('Home');
    }
  };

  return (
    <View style={styles.bgScreen}>
      {/* <TouchableOpacity style={styles.back}>
        <Image
          style={styles.backArrowImage}
          source={require('../assets/images/back.png')}
        />
      </TouchableOpacity> */}
      <View style={styles.imageBgView}>
        <Image
          style={styles.centerImage}
          source={require('../assets/images/Jesta.png')}
        />

        <Text style={styles.welcomeText}>
          Welcome back! glad to see you, Again!
        </Text>
        <View style={styles.loginSection}>
          <TextInput
            style={styles.email}
            onChangeText={setEmail}
            value={email}
            placeholder="Enter your email"
          />
        </View>
        <View style={styles.passwordField}>
          <TextInput
            style={styles.email}
            onChangeText={setPwd}
            value={password}
            placeholder="Enter your password"
          />
          <TouchableOpacity style={{position: 'absolute', top: 40, right: 10}}>
            <Image
              source={require('../assets/images/eyeIcon.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
          <Text style={styles.forget}> Forger password?</Text>
        </TouchableOpacity>

        <View style={styles.loginBtnView}>
          <TouchableOpacity style={styles.loginBtn} onPress={isEmailValid}>
            <Text style={styles.loginText}> Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <View style={styles.divider} />
          <Text style={styles.text}>Or Login with</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.socialLoginView}>
          <TouchableOpacity style={styles.socialImageView}>
            <Image
              source={require('../assets/images/facebook_ic.png')}
              style={styles.fb}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialImageView}
            onPress={() => {
              handleGoogleSignIn();
            }}>
            <Image
              source={require('../assets/images/google_ic.png')}
              style={styles.fb}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.registerView}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={styles.regiterText}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  bgScreen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  back: {
    borderRadius: 10,
    backgroundColor: 'white',
    marginLeft: 10,
    marginTop: 10,
  },
  backArrowImage: {
    width: 40,
    height: 40,
  },
  imageBgView: {
    width: '100%',
    height: '100%',
  },

  centerImage: {
    width: 120,
    height: 120,
    marginTop: 5,
    marginLeft: 10,
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 28,
    marginLeft: 15,
    marginTop: 15,
  },
  email: {
    width: '90%',
    height: 50,
    backgroundColor: '#E8ECF4',
    marginTop: 25,
    padding: 8,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 6,
  },
  loginSection: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  passwordField: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  forget: {
    marginTop: 20,
    textAlign: 'right',
    marginRight: 15,
    fontSize: 12,
  },
  loginBtnView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: '#2D2E8B',
    width: '80%',
    height: 45,
    marginTop: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E8ECF4',
    marginHorizontal: 15,
  },
  text: {
    fontSize: 12,
  },
  socialLoginView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  socialImageView: {
    width: 120,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 5,
  },
  fb: {
    width: 30,
    height: 30,
  },
  registerView: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
  },
  regiterText: {
    fontSize: 14,
    color: '#2D2E8B',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
