import {Alert, View} from 'react-native';
import React, {useState} from 'react';
import TopDoctors from '../components/topDoctorSection/TopDoctors';
import {FlatList} from 'react-native-gesture-handler';
import BackButton from '../components/BackButton';
import {topDoctorName} from '../data/TopDoctorList';
import SymptomsList from '../components/SymptomsList';
import {symp} from '../data/SymptomsArray';
import {color} from '../Constants/Colors';

const TopDoctor = () => {
  const [selectIndex, setSelectIndex] = useState(0);

  const symAction = index => {
    setSelectIndex(index);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <BackButton title={'Top Doctor'} />

      <View>
        <FlatList
          data={symp}
          renderItem={({item, index}) => (
            <SymptomsList
              title={item.title}
              bgColor={item.color}
              index={index}
              symtopAction={e => symAction(e)}
              bgcolor={selectIndex === index ? color.primaryColor : 'white'}
              textColor={selectIndex === index ? 'white' : color.primaryColor}
            />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <FlatList
        data={topDoctorName}
        renderItem={({item}) => (
          <TopDoctors name={item.name} ratingCount={item.ratingCount} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TopDoctor;
