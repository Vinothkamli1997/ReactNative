import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {color} from '../../Constants/Colors';

const ImageScrollSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation();

  const caroselImage = [
    {
      source: require('../../assets/images/wlakThroughImage1.jpg'),
      title: 'Hiiiiii',
    },
    {
      source: require('../../assets/images/walkThroughImage.jpg'),
      title: 'Hiiiiii',
    },
  ];

  const buttonText =
    currentIndex === caroselImage.length - 1 ? 'Get Started' : 'Next';

  const window = Dimensions.get('window');

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: '95%',
          height: '92%',
          marginHorizontal: 10,
          alignItems: 'center',
        }}>
        <Image
          source={item.source}
          resizeMode="cover"
          style={{width: '100%', height: '100%', borderRadius: 10}}
        />
      </View>
    );
  };

  const handleNextButtonPress = () => {
    const nextIndex = currentIndex + 1;

    if (nextIndex < caroselImage.length) {
      setCurrentIndex(nextIndex);
    } else {
      navigation.replace('Login');
    }
  };

  const handleCarouselSnap = index => {
    setCurrentIndex(index);
  };

  return (
    <View style={{flexDirection: 'column', justifyContent: 'center'}}>
      <View style={styles.container}>
        <Carousel
          data={caroselImage}
          renderItem={renderItem}
          sliderWidth={window.width}
          itemWidth={window.width}
          onSnapToItem={handleCarouselSnap}
          activeSlideAlignment="start"
          firstItem={currentIndex}
        />
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNextButtonPress}>
        <Text style={styles.nextButtonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageScrollSection;

const styles = StyleSheet.create({
  carouselItem: {
    width: window.width,
    overflow: 'hidden',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',

    marginHorizontal: 10,
  },
  container: {
    height: '90%',
  },
  nextButton: {
    width: '80%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.primaryColor,
    borderRadius: 20,
    position: 'absolute',
    bottom: 20,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
