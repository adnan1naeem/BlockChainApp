import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Color from '../common/Color';

const AmountHeader = ({
  navigationValue,
  TotalAmount,
  RemainingAmount,
  containerStyle,
  AmountContainerStyle,
  icon,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={navigationValue}>
        <Image resizeMode={'contain'} style={styles.icons} source={icon} />
      </TouchableOpacity>
      <View style={[styles.amountView, AmountContainerStyle]}>
        <View style={styles.remainingAmountView}>
          <Text style={styles.remainingAmountText}>{RemainingAmount}</Text>
          <Image
            resizeMode={'contain'}
            style={styles.iconOne}
            source={require('../assets/images/amount.png')}
          />
        </View>
        <View style={styles.totalAmountView}>
          <Text style={[styles.remainingAmountText, {color: Color.purple}]}>
            {TotalAmount}
          </Text>
          <Image
            resizeMode={'contain'}
            style={styles.iconOne}
            source={require('../assets/images/AmountPurpleOne.png')}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    elevation: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {
    height: 40,
    alignItems: 'center',
    width: 40,
    alignSelf: 'center',
  },
  amountView: {
    width: '70%',
    height: '100%',
    borderWidth: 2,
    borderColor: Color.grey,
    borderRadius: 50,
    flexDirection: 'row',
  },
  remainingAmountView: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  remainingAmountText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    color: Color.TextDark,
    width: '70%',
  },
  iconOne: {
    height: 20,
    margin: 5,
    alignItems: 'center',
    width: 20,
    alignSelf: 'center',
  },
  totalAmountView: {
    width: '50%',
    borderRadius: 50,
    borderWidth: 2,
    height: '100%',
    borderColor: Color.primaryDark,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default AmountHeader;
