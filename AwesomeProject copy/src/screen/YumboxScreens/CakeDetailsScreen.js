import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import CakeDeatailsImageSection from '../../components/cakeDetailsScreenCells/CakeDeatailsImageSection';
import DishDetailsSection from '../../components/cakeDetailsScreenCells/DishDetailsSection';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CakeDetailsOfferSection from '../../components/cakeDetailsScreenCells/CakeDetailsOfferSection';
import axios from 'axios';
import {cakedetailApi, saltKey} from '../../api/EndPoints';
import HTML from 'react-native-render-html';
import NewArrival from '../../components/homeScreen/NewArrival';
import md5 from 'md5';
import {useRoute} from '@react-navigation/native';
import {Loader} from '../../components/loader/Loader';

const CakeDetailsScreen = () => {
  const [dishDetails, setDishDetails] = useState(null);
  const [suggested, setSuggested] = useState([]);
  const [dishDetailsList, setdishDetailsList] = useState([]);
  const [voucherList, setVoucherList] = useState([]);
  const route = useRoute();
  const [loading, setloading] = useState(true);

  const scrollViewRef = useRef();

  const dishID = route.params.dishID;

  const dishDetail = async id => {
    setloading(true);

    try {
      const hashedDishID = md5(saltKey + id);
      const response = await axios.post(cakedetailApi, {
        merchant_id: '1',
        auth_token: hashedDishID,
        outlet_id: '2',
        customer_id: '27',
        id: '291',
        dish_id: id,
      });

      const res = response.data;

      if (res?.parameters?.dish && res?.parameters?.dish?.description) {
        setDishDetails(res?.parameters?.dish?.description);
      }

      if (res?.parameters?.dish) {
        setdishDetailsList(res?.parameters?.dish);
      }

      if (res?.parameters?.dish && res?.parameters?.dish?.suggested) {
        setSuggested(res?.parameters?.dish?.suggested);
      }

      if (res?.parameters?.dish && res?.parameters?.dish?.vouchers) {
        setVoucherList(res?.parameters?.dish?.vouchers);
      }

      console.log('>>>>>>>> response', response.data);

      setloading(false);
    } catch (error) {
      console.log('Api error', error);
      setloading(false);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    dishDetail(dishID);
  }, []);

  const handleReload = id => {
    setDishDetails([]);
    setSuggested([]);
    setdishDetailsList([]);
    setVoucherList([]);
    setloading(true);
    dishDetail(id);

    scrollViewRef.current.scrollTo({y: 0, animated: true});
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
        {loading ? (
          <View style={{flex: 1}}>
            <Loader loading={loading} />
          </View>
        ) : (
          <>
            <CakeDeatailsImageSection
              dishImage={dishDetailsList?.With_background}
            />

            <View
              style={{
                width: '95%',
                backgroundColor: 'white',
                alignSelf: 'center',
                borderRadius: 20,
                marginTop: 10,

                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 10,
                bottom: 5,
              }}>
              <DishDetailsSection
                dishName={dishDetailsList.dish_name}
                dishType={dishDetailsList.category?.category_name}
                realPrice={dishDetailsList.dish_price}
                discountPrice={dishDetailsList.dish_discounts}
                disPercentage={dishDetailsList.discount_percentage}
                poundPrice={dishDetailsList.unit?.unit_id}
                poundName={dishDetailsList.unit?.unit_name}
                bestPrice={dishDetailsList.landing_price}
                dishID={dishDetailsList.dish_id}
              />

              <View style={{margin: 5, flexDirection: 'row', gap: 5}}>
                <MaterialIcons name={'discount'} size={24} color={'green'} />
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Offers Available
                </Text>
              </View>

              <View>
                <FlatList
                  data={voucherList}
                  renderItem={({item}) => (
                    <CakeDetailsOfferSection
                      vouchersName={item.vouchers_name}
                      vouchersCode={item.vouchers_code}
                      dishID={dishID}
                    />
                  )}
                />
              </View>

              <View style={{marginHorizontal: 10}}>
                <HTML source={{html: dishDetails}} />
              </View>

              <View>
                <FlatList
                  data={suggested}
                  renderItem={({item}) => (
                    <NewArrival
                      name={item.dish_name}
                      price={item.dish_price}
                      bestPrice={item.dish_discounts}
                      cakeType={'Simplistic'}
                      image={item.With_background}
                      dishID={item.dish_id}
                      isHome={false}
                      onPress={() => handleReload(item.dish_id)}
                    />
                  )}
                  horizontal={true}
                />
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default CakeDetailsScreen;

const styles = StyleSheet.create({});
