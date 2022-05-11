import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Header = ({navigationValue, title}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigationValue}>
        <Image
          resizeMode={'contain'}
          style={styles.icon}
          source={require('../assets/images/leftIcon.png')}
        />
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 5,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  icon: {
    height: 15,
    margin: 5,
    alignItems: 'center',
    tintColor: 'black',
    width: 15,
    alignSelf: 'center',
  },
  title: {
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Header;
