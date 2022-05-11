import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Color from '../../../common/Color';
import AmountHeader from '../../../components/AmountHeader';
import WalletHeading from './components/WalletHeading';
const Wallet = () => {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={Color.primaryActive} />
      <AmountHeader
        containerStyle={{backgroundColor: Color.primaryActive}}
        icon={require('../../../assets/images/AmountPurple.png')}
        TotalAmount={'532.00'}
        RemainingAmount={'235.00'}
        AmountContainerStyle={{backgroundColor: Color.whiteColor}}
      />
      <WalletHeading />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.Background,
  },
});
export default Wallet;
