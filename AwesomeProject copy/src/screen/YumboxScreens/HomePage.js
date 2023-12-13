import {
  BackHandler,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import HeaderSection from '../../components/homeScreen/HeaderSection';
import WelcomeSection from '../../components/homeScreen/WelcomeSection';
import CusineView from '../../components/CusineView';
import TitleSection from '../../components/homeScreen/TitleSection';
import CenterTitle from '../../components/homeScreen/CenterTitle';
import SuggestedSection from '../../components/homeScreen/SuggestedSection';
import {getList} from '../../api/EndPoints';
import NewArrival from '../../components/homeScreen/NewArrival';
import {Loader} from '../../components/loader/Loader';
import axios from 'axios';

const HomePage = () => {
  const [data, setData] = useState('');
  const [newArrival, setnewArrival] = useState([]);
  const [category, setCategory] = useState([]);
  const [popular, setPopular] = useState([]);
  const [voucher, setvoucher] = useState([]);
  const [loading, setloading] = useState(false);
  const [dishID, setDishID] = useState('');

  const navigation = useNavigation();

  const backPress = () => {
    BackHandler.exitApp();
  };

  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', backPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', backPress);
    }),
  );

  useEffect(() => {
    getHomePage();
  }, []);

  const getHomePage = async () => {
    setloading(true);
    try {
      const response = await axios.post(getList, {
        outlet_id: '2',
        id: '291',
        auth_token: 'f2200911a474eb92446435480aadcd9c',
        merchant_id: '1',
        customer_details_id: '27',
      });

      const res = response.data;
      setData(res?.parameters?.cusine);
      setCategory(res?.parameters?.category);
      setnewArrival(res?.parameters?.new_arrival[0].dishes);
      setPopular(res?.parameters?.popularofweek);
      setvoucher(res?.parameters?.vouchers[0]);
      setDishID(res?.parameters?.new_arrival[0].dishes.dish_id);

      console.log('dishIDsssss', dishID);
      setloading(false);
    } catch (error) {
      console.log('Api error', error);
    } finally {
      setloading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <HeaderSection />
          <WelcomeSection
            name={voucher.vouchers_name}
            coin={voucher.delivery_amount}
          />

          <TitleSection
            title={'View by flavour'}
            showAllAction={() => navigation.navigate('FlavourScreen')}
          />

          <View>
            <FlatList
              data={data}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <CusineView
                  name={item.cuisine_name}
                  cusineImage={item?.cuisine_image}
                  index={index}
                />
              )}
            />
          </View>

          <TitleSection
            title={'View by category'}
            showAllAction={() => navigation.navigate('Menu', {cat_ID: '-1'})}
          />

          <View>
            <FlatList
              data={category}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <CusineView
                  name={item.category_name}
                  cusineImage={item?.category_image}
                  index={index}
                />
              )}
            />
          </View>

          <CenterTitle title={'New Arrival'} />

          <View>
            <NewArrival
              name={newArrival.dish_name}
              price={newArrival.dish_price}
              bestPrice={newArrival.dish_discounts}
              cakeType={'Simplistic'}
              image={newArrival.With_background}
              dishID={dishID}
              isHome={true}
            />
          </View>

          <CenterTitle title={'Suggested'} />

          <View>
            <FlatList
              data={popular}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <SuggestedSection
                  title={item.dishes.dish_name}
                  cakeType={item.dishes.category.category_name}
                  item={index}
                  heading={item.dishes.message}
                  disPrice={item.dishes.dish_price}
                  realPrice={item.dishes.dish_discounts}
                  disPercentage={item.dishes.dish_onorder}
                  pound={item.dishes.dish_onorder}
                  bestPrice={item.dishes.dish_discounts}
                  image={item.dishes.additional_image_2}
                  rating={item.dishes.dish_rating}
                  dishID={item.dishes.dish_id}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
      {loading && <Loader loading={loading} />}
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
