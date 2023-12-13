import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const TitleSection = ({title}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    console.log('Testingggggggggg');
    navigation.goBack();
  };

  return (
    <View style={styles.otpView}>
      <TouchableOpacity
        onPress={handleGoBack}
        style={{
          borderRadius: 10,
          padding: 6,
          borderWidth: 1,
        }}>
        <AntDesign name={'arrowleft'} size={28} color={'black'} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TitleSection;

const styles = StyleSheet.create({
  otpView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    backgroundColor: 'white',
    marginTop: 2,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
