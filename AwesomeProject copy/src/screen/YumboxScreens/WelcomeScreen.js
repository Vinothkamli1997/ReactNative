import {StyleSheet, View, useWindowDimensions} from 'react-native';
import WelcomeScreenHeaderSection from '../../components/welcomeScreen/WelcomeScreenHeaderSection';
import TabViewDoctorDetailsScree from '../TabViewDoctorDetailsScree';
import WelcomeFirstTabView from './WelcomeFirstTabView';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Loader} from '../../components/loader/Loader';

const Tab = createMaterialTopTabNavigator();

const WelcomeScreen = () => {
  const layout = useWindowDimensions();
  const [earningsList, setearningsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    walletApi();
  }, []);

  const walletApi = () => {
    setLoading(true);

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
        setearningsList(response.data.parameters);
        setLoading(false);
      } catch (error) {
        console.log('Api Error', error);
      }
    };
    fetchData();
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', gap: 10}}>
      <WelcomeScreenHeaderSection
        balance={earningsList.balance_coin}
        usedAmount={earningsList.used_coin}
        usedCoin={earningsList.used_amount}
      />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          indicatorStyle: {
            backgroundColor: 'red',
            height: 5,
            width: '30%',
            left: '10%',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            marginLeft: -10,
          },
          style: {
            backgroundColor: 'white',
            borderRadius: 10,
            width: '95%',
            alignSelf: 'center',
          },
          labelStyle: {
            fontFamily: 'Urbanist',
            fontSize: 15,
            fontWeight: 'bold',
            width: 120,
            left: -10,
            textTransform: 'none',
          },
        }}>
        <Tab.Screen name="Earnings" component={TabViewDoctorDetailsScree} />
        <Tab.Screen name="History" component={WelcomeFirstTabView} />
      </Tab.Navigator>

      {loading && <Loader loading={loading} />}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
