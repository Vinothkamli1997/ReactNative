import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {color} from '../Constants/Colors';
import ProfileSectionView from '../components/ProfileSectionView';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const ProfileScreen = () => {
  const [img, setImg] = useState(null);
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const userName = useSelector(state => state.userEmail.userName);
  const cusine = useSelector(state => state.cusineList.cusine);

  const navigation = useNavigation();

  const getImageProfile = async () => {
    await AsyncStorage.getItem('ProfileImage')
      .then(uri => {
        setImg(uri);
      })
      .catch(error => {
        console.error('Error reading image URI from AsyncStorage:', error);
      });

    AsyncStorage.getItem('ProfileName')
      .then(givenName => {
        setName(givenName);
      })
      .catch(error => {
        console.error('Error reading Given Name from AsyncStorage:', error);
      });

    AsyncStorage.getItem('ProfileLastName')
      .then(lastName => {
        setLastName(lastName);
      })
      .catch(error => {
        console.error('Error reading Given Name from AsyncStorage:', error);
      });

    AsyncStorage.getItem('ProfileEmail')
      .then(email => {
        setEmail(email);
      })
      .catch(error => {
        console.error('Error reading Given Name from AsyncStorage:', error);
      });
  };

  const initialLoad = async () => {
    setName(userName);
    console.log('Updated Name', userName);
    console.log('use redux and store cusine aray', cusine);
  };

  useEffect(() => {
    // Retrieve the image URI from AsyncStorage
    getImageProfile();
    initialLoad();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View
          style={{
            width: 110,
            height: 110,
            borderRadius: 110,
            backgroundColor: '#8888',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <View style={styles.imageSection}>
            <Image source={{uri: img}} style={styles.image} />
          </View>
        </View>

        <View
          style={{
            width: 50,
            height: 30,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            top: -18,
            borderRadius: 5,
          }}>
          <Text style={{color: '#2D2E8B', fontWeight: 'bold', fontSize: 12}}>
            73%
          </Text>
        </View>

        <View style={styles.profileSection}>
          <Text style={styles.textSection}>{email}</Text>
          <Text style={styles.textSection}>
            {name} {lastName}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.completeProfileView}
          onPress={() => navigation.navigate('DoctorDetailsScreen')}>
          <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
            Complete your profile
          </Text>
        </TouchableOpacity>

        <View style={{top: 10, marginTop: 10, marginHorizontal: 10}}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              borderWidth: 1,
              padding: 8,
              borderRadius: 20,
              borderColor: '#8888',
              marginBottom: 8,
            }}>
            <View
              style={{
                width: '50%',
                borderRightWidth: 1,
                borderBottomWidth: 1,
                borderColor: '#8888',
              }}>
              <View style={{width: '100%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../assets/images/HeartRate.png')}
                    style={{width: 38, height: 38}}
                  />
                  <Text
                    style={{
                      color: color.titleColor,
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    Personal Info
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 10,
                    textAlign: 'left',
                    fontWeight: '500',
                    lineHeight: 16,
                    marginBottom: 10,
                    top: 5,
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and
                </Text>
              </View>
            </View>

            <View
              style={{
                width: '50%',
                borderBottomWidth: 1,
                borderColor: '#8888',
              }}>
              <View style={{width: '100%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../assets/images/HeartRate.png')}
                    style={{width: 38, height: 38}}
                  />
                  <Text
                    style={{
                      color: color.titleColor,
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    Personal Info
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 10,
                    textAlign: 'left',
                    fontWeight: '500',
                    lineHeight: 16,
                    paddingHorizontal: 10,
                    top: 5,
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and{' '}
                </Text>
              </View>
            </View>

            <View
              style={{
                width: '50%',
                borderRightWidth: 1,
                borderColor: '#8888',
              }}>
              <View style={{width: '100%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../assets/images/HeartRate.png')}
                    style={{width: 38, height: 38}}
                  />
                  <Text
                    style={{
                      color: color.titleColor,
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    Personal Info
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 10,
                    marginHorizontal: 10,
                    textAlign: 'left',
                    fontWeight: '500',
                    lineHeight: 16,
                    top: 5,
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and{' '}
                </Text>
              </View>
            </View>

            <View
              style={{
                borderWidth: 0,
                width: '50%',
              }}>
              <View style={{width: '100%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../assets/images/HeartRate.png')}
                    style={{width: 38, height: 38}}
                  />
                  <Text
                    style={{
                      color: color.titleColor,
                      fontWeight: '600',
                      fontSize: 18,
                    }}>
                    Personal Info
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 10,
                    marginHorizontal: 10,
                    textAlign: 'left',
                    fontWeight: '500',
                    lineHeight: 16,
                    top: 5,
                  }}>
                  Lorem Ipsum is simply dummy text of the printing and{' '}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: 10,
              marginBottom: 10,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#8888',
              width: '100%',
              height: 404,
              bottom: 10,
            }}>
            <ProfileSectionView
              name={'Notification'}
              iconName={'bells'}
              iconColor={'#2D2E8B'}
            />
            <ProfileSectionView
              name={'Security'}
              iconName={'bells'}
              iconColor={'#2D2E8B'}
            />
            <ProfileSectionView
              name={'Help'}
              iconName={'infocirlce'}
              iconColor={'#2D2E8B'}
            />
            <ProfileSectionView
              name={'Invite Friends'}
              iconName={'adduser'}
              iconColor={'#2D2E8B'}
            />
            <ProfileSectionView
              name={'Logout'}
              iconName={'logout'}
              iconColor={'#FF3359'}
            />
          </View>

          <Modal
            animationType="slide"
            transparen={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                alignSelf: 'center',
                height: '100%',
                width: '100%',
                bottom: 20,
              }}>
              <View
                style={{
                  backgroundColor: 'green',
                  padding: 20,
                  borderRadius: 10,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'column',
                  width: 200,
                }}>
                <TouchableOpacity>
                  <Text>Are Your Want sure logout</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>okay</Text>
                </TouchableOpacity>

                <Text onPress={() => setModalVisible(false)}>Cancel</Text>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageSection: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileSection: {
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 8,
  },
  textSection: {
    color: 'black',
    fontFamily: 'Urbanist-Black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  completeProfileView: {
    width: '60%',
    backgroundColor: '#2D2E8B',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: 10,
    borderRadius: 8,
  },
  cartView: {
    width: '95%',
    height: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    top: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8888',
    flexDirection: 'row',
  },
  innerCartView: {
    width: '50%',
  },
});
