<View
  style={{
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#8883',
    width: '100%',
    height: 400,
  }}>
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      height: 80,
      width: '100%',
    }}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
      }}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: '#E6EDFF',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 5,
        }}>
        <FontAwesome6 name="bell" size={20} color="#2D2E8B" />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          width: '80%',
        }}>
        <Text style={{color: 'black'}}>Notification</Text>
        <FontAwesome6
          name="arrow-right-long"
          size={20}
          color="#2D2E8B"
          style={{paddingHorizontal: 10}}
        />
      </View>
    </View>
  </View>

  <View style={{padding: 8, top: -10}}>
    <Divider bold />
  </View>
</View>;
