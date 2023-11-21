import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const App = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.backButtonView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/images/backButton2.png')}
              style={styles.backButton}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerImageView}>
          <Image
            source={require('../assets/images/lockImage.png')}
            style={styles.headerImage}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
          <Text style={styles.contentText}>
            Don't worry! It occurs. Please enter the email{'\n'} address linked
            with your account.
          </Text>
        </View>

        <View style={styles.loginView}>
          <TouchableOpacity style={styles.emailView}>
            <Text style={styles.emailText}>email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.phoneView}>
            <Text style={styles.phoneText}>Phone</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.emailTextFieldView}>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Enter Your Email"
            style={styles.emailTextField}
          />
        </View>
        <TouchableOpacity style={styles.sendCodeBtn}>
          <Text style={styles.sendCodeText}>Send Code</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default App;

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
  headerImageView: {
    alignSelf: 'center',
    marginTop: 100,
  },
  headerImage: {
    width: 200,
    height: 200,
  },
  textView: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  forgotText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    marginTop: 18,
    color: '#8391A1',
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 25,
  },
  loginView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  emailView: {
    width: 110,
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2D2E8B',
  },
  phoneView: {
    width: 110,
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBEEF3',
    borderRadius: 10,
  },
  emailText: {
    color: '#ffffff',
  },
  phoneText: {
    color: '#6A728D',
  },
  emailTextFieldView: {
    width: '100%',
    height: 55,
    marginTop: 30,
    marginLeft: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  emailTextField: {
    width: '80%',
    padding: 10,
    backgroundColor: '#F7F8F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#E8ECF4',
    borderWidth: 1,
  },
  sendCodeBtn: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    backgroundColor: '#2D2E8B',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  sendCodeText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
