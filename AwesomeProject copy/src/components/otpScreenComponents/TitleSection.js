import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const TitleSection = ({title}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.otpView}>
      <TouchableOpacity
        style={{
          marginLeft: 8,
          width: 40,
          height: 40,
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
        }}
        onPress={handleGoBack}>
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
    marginTop: 8,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  codeFieldRoot: {marginTop: 20, width: '80%', alignSelf: 'center'},
});
