import {View, FlatList, StyleSheet} from 'react-native';

import React, {useEffect, useState} from 'react';
import WelcomeHistorySection from '../../components/welcomeScreen/WelcomeHistorySection';
import axios from 'axios';

const WelcomeFirstTabView = () => {
  const [earningsList, setearningsList] = useState([]);

  useEffect(() => {
    walletApi();
  }, []);

  const walletApi = () => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://demo.yumbox.in/web/v1/driver/getsupercoin',
          {
            outlet_id: '2',
            id: '291',
            customer_id: '27',
            auth_token: 'ecda1e2f6dfd2420efc293ecb9405f62',
            merchant_id: '1',
          },
        );
        console.log('Wallet Api ', response.data);
        setearningsList(response.data.parameters.history);
      } catch (error) {
        console.log('Api Error', error);
      }
    };
    fetchData();
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={earningsList}
        renderItem={({item}) => (
          <WelcomeHistorySection
            name={item.message}
            time={item.added_at}
            type={item.type}
            coins={item.super_coin}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WelcomeFirstTabView;

const styles = StyleSheet.create({});
