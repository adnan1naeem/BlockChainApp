import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Color from '../../../../common/Color';

const WalletHeading = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{'Wallet'}</Text>
      <View style={styles.row}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    color: Color.TextDark,
  },
  row: {
    width: '60%',
    flexDirection: 'row',
  },
});
export default WalletHeading;
