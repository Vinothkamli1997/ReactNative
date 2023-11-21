import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.headerImageView}>
        <Image
          source={require('./src/assets/images/LogoInstagram.png')}
          style={styles.headerImage}
        />
      </View>
      <View style={styles.emailView}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email"
          style={styles.email}
        />
      </View>
      <View style={styles.passwordView}>
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          style={styles.password}
        />
        <TouchableOpacity style={styles.eyeIconView}>
          <Image
            style={styles.eyeIcon}
            source={require('./src/assets/images/eyeIcon.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgetView}>
        <Text style={styles.forgetText}>Forgetten Passowrd?</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity style={styles.loginView}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerView}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.socialLoginView}>
        <Image
          source={require('./src/assets/images/facebook_ic.png')}
          style={styles.fbImage}
        />
        <TouchableOpacity>
          <Text style={styles.fbText}>Login with facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomDividerView} />

      <View style={styles.createAccount}>
        <Text style={styles.dontAccountText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '80%',
    height: 120,
    marginTop: 150,
  },
  emailView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  email: {
    width: '90%',
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.2,
    padding: 10,
  },
  passwordView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  password: {
    width: '90%',
    height: 50,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.2,
    padding: 10,
  },
  forgetText: {
    textAlign: 'right',
    marginRight: 30,
    marginTop: 20,
    color: '#0097FD',
    fontWeight: 'bold',
    fontSize: 12,
  },
  loginView: {
    marginTop: 20,
    backgroundColor: '#0097FD',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    alignSelf: 'center',
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  divider: {
    height: 1,
    flex: 1,
    backgroundColor: 'gray',
    marginHorizontal: 20,
  },
  socialLoginView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  fbImage: {
    width: 30,
    height: 30,
  },
  fbText: {
    color: '#0097FD',
    fontSize: 12,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  bottomDividerView: {
    backgroundColor: 'gray',
    width: '100%',
    height: 1,
    marginTop: 160,
  },
  createAccount: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    marginTop: 20,
    marginLeft: 8,
    color: '#0097FD',
    fontWeight: 'bold',
  },
  dontAccountText: {
    marginTop: 20,
  },
  eyeIconView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 36,
    top: 34,
  },
  eyeIcon: {
    width: 25,
    height: 25,
  },
});
