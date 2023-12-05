import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../Constants/Colors';

const HeaderTitle = props => {
  return (
    <View style={styles.categoryView}>
      <Text style={styles.categoryText}>{props.title}</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  categoryText: {
    color: color.titleColor,
    fontWeight: '600',
    fontSize: 18,
    marginHorizontal: 8,
    marginTop: 15,
  },
});
