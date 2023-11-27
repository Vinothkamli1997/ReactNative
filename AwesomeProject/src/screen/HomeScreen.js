import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {color} from '../Constants/Colors';
import HeaderTitle from '../components/HeaderTitle';
import {Dropdown} from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native-paper';
import MovieLiseView from '../components/MovieLiseView';
import CategoryItem from '../components/CategoryItem';
import SymptomsList from '../components/SymptomsList';
import HosList from '../components/HosList';
import {catDetails} from '../data/CategoryList';
import {symp} from '../data/SymptomsArray';
import {hosDetails} from '../data/Hospitals';
import {getList} from '../api/EndPoints';
import CusineView from '../components/CusineView';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import CakeDetailHeaderSection from '../components/cakeDetailsScreenCells/CakeDetailHeaderSection';
import {useSelector} from 'react-redux';
import {CUSINELIST} from '../redux/Action';

const HomeScreen = ({route}) => {
  const [page, setPage] = useState(1);
  const [search, setSearchText] = useState('');
  const [value, setValue] = useState('');
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectIndex, setSelectIndex] = useState(0);
  const userEmail = useSelector(state => state.userEmail.userName);

  const cityDropDown = [
    {
      label: 'CBE',
      value: '1',
    },
    {
      label: 'CBE',
      value: '2',
    },
    {
      label: 'CBE',
      value: '3',
    },
    {
      label: 'CBE',
      value: '4',
    },
  ];

  const clearDate = async () => {
    console.log('Logout ID');
    try {
      // Ensure that Google Sign-In is configured before calling revokeAccess and signOut

      // await GoogleSignin.hasPlayServices();
      // await GoogleSignin.revokeAccess();
      // await GoogleSignin.signOut();

      // Clear other data
      await AsyncStorage.removeItem('customerID');

      navigation.navigate('Login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const symAction = index => {
    setSelectIndex(index);
  };

  const initialLoad = async () => {
    console.log('UserNameeeeeeeeee:', userEmail);
    const value = await AsyncStorage.getItem('UserName');
  };

  useEffect(() => {
    getHomePage();
    initialLoad();
    // getMovies();
  }, []);

  const getHomePage = async () => {
    try {
      await fetch(getList, {
        method: 'POST',
        body: JSON.stringify({
          outlet_id: '2',
          id: '291',
          auth_token: 'f2200911a474eb92446435480aadcd9c',
          merchant_id: '1',
          customer_details_id: '27',
        }),
      })
        .then(response => response.json())
        .then(res => {
          setData(res?.parameters?.cusine);

          dispatch({
            type: CUSINELIST,
            payload: {cusineList: res?.parameters?.cusine},
          });
        });
    } catch (error) {
      console.log('Api error', error);
    } finally {
      setLoading(false);
    }
  };

  const drawerToggle = () => {
    navigation.toggleDrawer();
  };
  const onEndedLastData = () => {
    setPage(page + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerView}>
            <TouchableOpacity
              style={styles.headerImageView}
              onPress={() => {
                drawerToggle();
              }}>
              <Image
                source={require('../assets/images/Jesta.png')}
                style={styles.headerImage}
              />
            </TouchableOpacity>
            <View style={styles.locationView}>
              <Text style={styles.locationText}>Select Location</Text>
              <View style={styles.areaView}>
                <FontAwesome6 name="location-dot" size={20} color="#2D2E8B" />
                {/* <Text style={styles.areaText}>Coimbatore</Text> */}

                <Dropdown
                  data={cityDropDown}
                  value={value}
                  style={styles.dropDownStyle}
                  labelField="label"
                  valueField="value"
                  onFocus={() => setAreaName(true)}
                  renderRightIcon={false}
                  onChange={item => {
                    // setIsFocus(false);
                    setValue(item);
                  }}
                  placeholder="Select"
                />
                {/* <SelectDropdown
                data={cityDropDown}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonStyle={styles.dropDownStyle}
                buttonTextStyle={styles.dropdownButtonStyle}
                rowStyle={styles.dropRowStyle}
              /> */}
                {/* <AntDesign name="down" size={20} color="#2D2E8B" />/ */}
              </View>
            </View>

            <View style={styles.trailingView}>
              <TouchableOpacity style={styles.notificationView}>
                <AntDesign name="google" size={25} color="#2D2E8B" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.favView}
                onPress={() => {
                  clearDate();
                }}>
                <MaterialIcons name="logout" size={25} color="#2D2E8B" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.searchView}>
            <TextInput
              style={styles.searchTexts}
              onChangeText={setSearchText}
              value={search}
              placeholder="Search"
            />
            <AntDesign
              name="search1"
              size={20}
              color="#6D6D6D"
              style={styles.searchIcon}
            />
          </View>

          <View style={styles.bannerView}>
            <Image
              source={require('../assets/images/BannerImage.png')}
              style={styles.bannerImage}
            />
          </View>

          <HeaderTitle title={'Category'} />

          <View>
            <FlatList
              data={catDetails}
              renderItem={({item}) => (
                <CategoryItem name={item.title} image={item.image} />
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <HeaderTitle title={'Symptoms'} />

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              height: 65,
            }}>
            <FlatList
              data={symp}
              renderItem={({item, index}) => (
                <SymptomsList
                  title={item.title}
                  bgColor={item.color}
                  index={index}
                  symtopAction={e => symAction(e)}
                  bgcolor={selectIndex === index ? color.primaryColor : 'white'}
                  textColor={
                    selectIndex === index ? 'white' : color.primaryColor
                  }
                />
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.symList}
            />
          </View>

          <View style={styles.bestHostitalView}>
            <Text style={styles.bestHostitalText}>Best Hospital</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          <View>
            <FlatList
              data={hosDetails}
              renderItem={({item}) => (
                <HosList title={item.title} area={item.area} />
              )}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.symList}
            />
          </View>

          <View>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <View>
                <FlatList
                  data={data}
                  onEndReached={onEndedLastData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item, index}) => (
                    <MovieLiseView
                      title={item.cuisine_name}
                      item={item}
                      index={index}
                    />
                  )}
                />
              </View>
            )}
          </View>

          <View>
            <FlatList
              data={data}
              onEndReached={onEndedLastData}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <>
                  {index !== 0 && (
                    <CusineView
                      name={item.cuisine_name}
                      cusineImage={item?.cuisine_image}
                      item={item}
                    />
                  )}
                </>
              )}
            />
          </View>

          <CakeDetailHeaderSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 80,
    height: 80,
  },
  locationView: {
    marginTop: 20,
  },
  areaView: {
    width: 170,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 5,
  },
  locationImage: {
    width: 14,
    height: 18,
  },
  locationText: {
    color: '#56648D',
    fontWeight: '400',
  },
  areaText: {
    fontWeight: '800',
    color: '#2D2E8B',
  },
  trailingView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 2,
    marginRight: 10,
  },
  notificationView: {
    width: 50,
    height: 50,
    backgroundColor: '#E6EDFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favView: {
    width: 50,
    height: 50,
    backgroundColor: '#E6EDFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  searchView: {
    backgroundColor: '#F4F6F9',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 25,
    height: 50,
    marginTop: 10,
  },
  searchTexts: {
    width: '90%',
    backgroundColor: '#F4F6F9',
    borderRadius: 25,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    alignSelf: 'center',
    right: 15,
  },
  bannerView: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
  },
  bannerImage: {
    width: '100%',
    height: 180,
    alignSelf: 'center',
    borderRadius: 8,
  },
  bannerDot: {
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  categoryText: {
    color: color.titleColor,
    fontWeight: '600',
    fontSize: 18,
    marginHorizontal: 10,
    marginTop: 10,
  },
  catMainView: {
    width: 82,
    height: 82,
    // backgroundColor: '#F4F6F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryListView: {
    width: 78,
    height: 78,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryLisImage: {
    width: 40,
    height: 40,
  },
  categoryListText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 8,
    color: 'black',
  },
  symList: {
    marginTop: 8,
  },
  symListText: {
    color: color.white,
  },
  bestHostitalText: {
    color: color.titleColor,
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'Urbanist-BlackItalic',
  },
  bestHostitalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 8,
  },
  seeAllText: {
    color: color.primaryColor,
    fontWeight: '600',
    fontSize: 16,
  },
  locView: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  specalistView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.white,
    height: 220,
    width: 160,
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  specImage: {
    width: 100,
    height: 100,
  },
  specBestHostitalText: {
    color: color.titleColor,
    fontWeight: '600',
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'Urbanist-ExtraBold.ttf',
  },
  locAreaText: {
    color: color.titleColor,
    fontWeight: '600',
    fontSize: 18,
    left: 8,
    fontFamily: 'Urbanist-ExtraBold.ttf',
    fontWeight: 'bold',
  },
  locImage: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  dropDownStyle: {
    width: '80%',
    height: 30,
    fontFamily: 'Urbanist-ExtraBold.ttf',
    marginTop: -7,
    backgroundColor: 'white',
    left: 10,
  },
  buttonStyle: {
    backgroundColor: 'white',
    width: 100,
  },
  dropdownButtonStyle: {
    fontSize: 12,
  },
  dropRowStyle: {
    backgroundColor: 'white',
  },
  movieTitle: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cusineListView: {
    backgroundColor: 'green',
  },
});
