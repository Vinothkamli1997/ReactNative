import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CategoryItem = props => {
  console.log('category');
  return (
    <TouchableOpacity style={{padding: 10}}>
      <View style={styles.catMainView}>
        <View style={styles.categoryListView}>
          <Image source={props.image} style={styles.categoryLisImage} />
        </View>
      </View>

      <Text style={styles.categoryListText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  catMainView: {
    width: 82,
    height: 82,
    backgroundColor: '#F4F6F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryListView: {
    width: 78,
    height: 78,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryLisImage: {
    width: 40,
    height: 40,
  },
  categoryListText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 8,
    color: '#2D2E8B',
  },
});
