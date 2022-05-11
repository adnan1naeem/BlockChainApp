import Color from '../common/Color';
import React from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function CategoryItem({text, onPress, icon}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image resizeMode={'contain'} style={styles.icon} source={icon} />
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 150,
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: Color.grey,
    margin: 10,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
    height: 30,
    width: 30,
  },
  title: {
    paddingHorizontal: 20,
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 20,
  },
});
