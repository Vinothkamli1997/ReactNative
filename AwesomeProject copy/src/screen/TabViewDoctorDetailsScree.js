import {View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import EarningSection from '../components/welcomeScreen/EarningSection';
import axios from 'axios';

const TabViewDoctorDetailsScree = () => {
  const [historyList, sethistoryList] = useState([]);

  useEffect(() => {
    walletApi();
  }, []);

  const walletApi = () => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://demo.yumbox.in/web/v1/signup/get_event',
          {
            customer_id: '27',
            merchant_id: '1',
            auth_token: 'f2200911a474eb92446435480aadcd9c',
          },
        );
        sethistoryList(response.data.parameters);
        console.log('Nameees', response.data.parameters);
      } catch (error) {
        console.log('Api Error', error);
      }
    };
    fetchData();
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={historyList}
        renderItem={({item}) => (
          <EarningSection
            name={item.event_name}
            description={item.description}
            subTitle={item.message}
            id={item.event_id}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TabViewDoctorDetailsScree;
