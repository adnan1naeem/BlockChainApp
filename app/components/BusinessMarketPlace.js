import React from 'react';
import {Text, TouchableOpacity, Image, View, StyleSheet} from 'react-native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Color from '../common/Color';

export default function BusinessMarketPlace({
  title,
  icon,
  descriptionIcon,
  description,
  onPress,
  logo,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.main}>
      <View style={{flexDirection: 'row', margin: 10}}>
        <Image resizeMode={'contain'} style={styles.image} source={logo} />
        <View style={{margin: 15, flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              resizeMode={'contain'}
              style={{
                height: 40,
                width: 40,
              }}
              source={icon}
            />
            <View style={{justifyContent: 'center'}}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.descriptionText}>{description}</Text>
            </View>
          </View>

          <View style={styles.userName}>
            <View style={styles.rowView}>
              <Image
                source={require('../assets/images/pin.png')}
                resizeMode="cover"
                style={{height: 24, width: 15}}
              />
              <Text style={styles.userText}>Austin, TX</Text>
            </View>
            <AirbnbRating
              count={5}
              reviews={false}
              starContainerStyle={{
                justifyContent: 'center',
                marginTop: -30,
              }}
              defaultRating={4}
              size={15}
            />
          </View>
        </View>
      </View>
      <View
        style={{height: 1, backgroundColor: '#D9D9D9', width: '100%'}}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    marginVertical: 0,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  titleText: {
    fontWeight: 'bold',
    textAlignVertical: 'center',
    marginVertical: 3,
    marginHorizontal: 10,
  },
  descriptionText: {
    textAlignVertical: 'center',
    fontSize: 12,
    marginHorizontal: 10,
  },
  userName: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginHorizontal: 0,
    alignItems: 'center',
  },
  rowView: {
    width: '50%',
    flexDirection: 'row',
  },
  userText: {
    fontSize: 14,
    color: Color.TextDark,
    alignSelf: 'center',
    marginLeft: 5,
  },
});
