import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MovieLiseView from '../../components/MovieLiseView';
import SearchSection from '../../components/menuScreenCells/SearchSection';
import MenuDishListSection from '../../components/menuScreenCells/MenuDishListSection';
import {getList, showApi} from '../../api/EndPoints';
import {Loader} from '../../components/loader/Loader';
import axios from 'axios';
import {useRoute} from '@react-navigation/native';

const MenuScreen = () => {
  const route = useRoute();
  const {cat_ID} = route?.params || {};
  const [selectindex, setSelectIndex] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dishCategoryList, setdishCategoryList] = useState([]);

  useEffect(() => {
    menuApi();
    getHomePage();
  }, []);

  const menuApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(showApi, {
        method: 'POST',
        body: JSON.stringify({
          outlet_id: '2',
          id: '291',
          auth_token: '5ee70e48fd32f4907f3005c987a652ca',
          merchant_id: '1',
          customer_details_id: '27',
          category_id: cat_ID,
          tag_category_id: [],
          sort: '',
          dish_type: '',
          tag_id: [],
          search: [],
          page: '1',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const res = await response.json();
      setData(res.parameters.dish);
      setLoading(false);
    } catch (error) {
      console.log('Error', error);
    }
  };

  const getHomePage = async () => {
    setLoading(true);
    try {
      const response = await axios.post(getList, {
        outlet_id: '2',
        id: '291',
        auth_token: 'f2200911a474eb92446435480aadcd9c',
        merchant_id: '1',
        customer_details_id: '27',
      });

      const res = response.data;
      setdishCategoryList(res?.parameters?.category);
    } catch (error) {
      console.log('Api error', error);
    } finally {
      setLoading(false);
    }
  };

  const action = index => {
    setSelectIndex(index);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', bottom: 5}}>
      <View>
        <FlatList
          data={dishCategoryList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <MovieLiseView
              name={item.category_name}
              index={index}
              action={action}
              bgcolor={selectindex === index ? 'red' : 'white'}
              borderColor={selectindex === index ? 0 : 1}
              titleColor={selectindex === index ? 'white' : 'black'}
            />
          )}
        />
        <SearchSection />
        <ScrollView
          style={{flexGrow: 1, marginBottom: 110, backgroundColor: 'white'}}>
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
              <MenuDishListSection
                dishname={item.dish_name}
                dishTypeName={item.category.category_name}
                realDishPrice={item.dish_price}
                discountPrice={item.dish_discounts}
                dishPercentage={item.discount_percentage}
                bestPrice={item.landing_price}
                tagName={item.tag}
                cakeType={item.availability}
                customize={item.is_customized}
                dishType={item.dish_type}
                dishImage={item.With_background}
              />
            )}
            ListFooterComponent={<></>}
            ListFooterComponentStyle={{marginBottom: 30}}
          />
        </ScrollView>
      </View>
      {loading && <Loader loading={loading} />}
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({});
