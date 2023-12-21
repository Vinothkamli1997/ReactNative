import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import TitleSection from '../../components/otpScreenComponents/TitleSection';
import CakeAddOnHeaderSection from '../../components/cakeAddOnScreenCells/CakeAddOnHeaderSection';
import SingleAddOnSection from '../../components/cakeAddOnScreenCells/SingleAddOnSection';
import MultiAddOnSection from '../../components/cakeAddOnScreenCells/MultiAddOnSection';
import NewArrival from '../../components/homeScreen/NewArrival';
import md5 from 'md5';
import axios from 'axios';
import {
  apiID,
  cakeAddOnApi,
  customerID,
  merchantID,
  outletID,
  saltKey,
} from '../../api/EndPoints';
import {useRoute} from '@react-navigation/native';

const CakeAddOnScreen = () => {
  const [suggestedList, setSuggestedList] = useState([]);
  const [addOndishList, setAddOndishList] = useState([]);

  const scrollViewRef = useRef();
  const route = useRoute();

  const dishID = route.params.dishID;

  const dishList = [
    {
      name: 'kamli',
    },
    {
      name: 'kamli',
    },
    {
      name: 'kamli',
    },
    {
      name: 'kamli',
    },
    {
      name: 'kamli',
    },
    {
      name: 'kamli',
    },
    {
      name: 'kamli',
    },
    {
      name: 'kamli',
    },
  ];

  const handleReload = id => {
    console.log('HandledReload');
    setSuggestedList([]);
    setAddOndishList([]);
    dishDetail(id);

    scrollViewRef.current.scrollTo({y: 0, animated: true});
  };

  const dishDetail = async id => {
    try {
      const hashedDishID = md5(saltKey + id);

      const response = await axios.post(cakeAddOnApi, {
        merchant_id: merchantID,
        auth_token: hashedDishID,
        outlet_id: outletID,
        customer_id: customerID,
        id: apiID,
        dish_id: id,
      });

      const res = response.data;

      if (res?.parameters?.dish && res.parameters?.dish?.suggested) {
        setSuggestedList(res.parameters?.dish?.suggested);
      }

      if (res?.parameters?.dish) {
        setAddOndishList(res.parameters?.dish);
      }
    } catch (error) {
      console.log('Api error', error);
    } finally {
    }
  };

  useEffect(() => {
    dishDetail(dishID);
    scrollViewRef.current.scrollTo({y: 0, animated: true});
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TitleSection />
      <ScrollView showsVerticalScrollIndicator={false} ref={scrollViewRef}>
        <CakeAddOnHeaderSection
          dishImage={addOndishList.dish_image}
          dishName={addOndishList.dish_name}
          realPrice={addOndishList.dish_discounts}
          disCountPrice={addOndishList.dish_price}
          disPercentage={addOndishList.discount_percentage}
          dishID={addOndishList.dish_id}
        />
        <Text style={{fontWeight: 'bold', color: 'black', margin: 8}}>
          Make It Extra Special
        </Text>
        <FlatList
          data={dishList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <SingleAddOnSection data={item} titleCHeck={index} />
          )}
        />
        <Text style={{fontWeight: 'bold', color: 'black', marginHorizontal: 8}}>
          Make It Extra Special
        </Text>
        <FlatList
          data={dishList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => <MultiAddOnSection data={item} />}
        />

        <Text style={{fontWeight: 'bold', color: 'black', marginHorizontal: 8}}>
          You May Also Like
        </Text>
        <FlatList
          data={suggestedList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <NewArrival
              name={item.dish_name}
              price={item.dish_price}
              bestPrice={item.dish_discounts}
              cakeType={item.category.category_name}
              image={item.With_background}
              dishID={item.dish_id}
              isHome={true}
              onPress={() => handleReload(item.dish_id)}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

export default CakeAddOnScreen;

const styles = StyleSheet.create({});
