import {StyleSheet, Text, Image, View, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Carousel from 'react-native-snap-carousel';

const CakeDetailHeaderSection = () => {
  const caroselImage = [
    {source: require('../../assets/images/Buddha.jpeg')},
    {source: require('../../assets/images/Buddha.jpeg')},
    {source: require('../../assets/images/Buddha.jpeg')},
    {source: require('../../assets/images/Buddha.jpeg')},
  ];

  const windowDiemnsions = Dimensions.get('window');

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.headerImageView}>
        <Image
          source={item.source}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>
    );
  };

  return (
    <View style={styles.headerImageView}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          paddingHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          bottom: 8,
        }}>
        Carousel
      </Text>

      <Carousel
        data={caroselImage}
        renderItem={renderItem}
        sliderWidth={windowDiemnsions.width}
        itemWidth={windowDiemnsions.width}
      />

      {this.Pagination}

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome6
            name="arrow-left"
            size={20}
            color="red"
            style={styles.backButton}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <FontAwesome6 name="heart" size={20} style={styles.likeButton} />
        </TouchableOpacity>
      </View>

      <View style={styles.shareButtonContainer}>
        <TouchableOpacity style={styles.shareButton}>
          <FontAwesome6 name="circle-nodes" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CakeDetailHeaderSection;

const styles = StyleSheet.create({
  headerImageView: {
    width: '95%',
    height: 400,
    alignSelf: 'center',
    right: 4,
  },
  headerImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 50,
    width: '100%',
    top: 30,
    paddingHorizontal: 20,
    left: 8,
    position: 'absolute',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    height: 40,
    width: 40,
    borderRadius: 20,

    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
  },
  shareButtonContainer: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 90,
    left: -10,
  },
  shareButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  backButton: {
    color: 'black',
  },
  likeButton: {
    color: 'red',
  },
});
