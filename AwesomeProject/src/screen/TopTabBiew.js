import {
  StyleSheet,
  View,
  useWindowDimensions,
  Text,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import TabViewDoctorDetailsScree from './TabViewDoctorDetailsScree';
import {color} from '../Constants/Colors';

const renderScene = SceneMap({
  first: TabViewDoctorDetailsScree,
  second: TabViewDoctorDetailsScree,
  third: TabViewDoctorDetailsScree,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: 'white',
      width: 70,
      height: 4,
      borderRadius: 10,
      left: '7%',
    }}
    style={{
      backgroundColor: color.primaryColor,
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
      height: 50,
      justifyContent: 'center',
    }}
    renderLabel={({route, focused}) => (
      <Text style={{color: focused ? 'white' : 'black'}}>{route.title}</Text>
    )}
  />
);

const TopTabView = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: 'First',
    },
    {
      key: 'second',
      title: 'Second',
    },
    {
      key: 'third',
      title: 'Third',
    },
  ]);

  return (
    <View style={{flex: 1}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default TopTabView;

const styles = StyleSheet.create({});
