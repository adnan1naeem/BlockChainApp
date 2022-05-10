import Color from '../common/Color'
import React from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function BusinessMarketPlace({ title, icon, descriptionIcon, description, onPress, logo }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: 'white', marginVertical: 0, justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <Image
          resizeMode={'contain'}
          style={{
            alignSelf: 'center',
            height: 120,
            width: 120,
            borderRadius: 10,
            backgroundColor: 'grey'
          }}
          source={logo}
        />
        <View style={{ margin: 15, flex: 1 }}>
          <View style={{ flexDirection: 'row', }}>
            <Image
              resizeMode={'contain'}
              style={{
                height: 40,
                width: 40
              }}
              source={icon}
            />
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontWeight: 'bold', textAlignVertical: 'center', marginVertical: 3, marginHorizontal: 10 }}>{title}</Text>
              <Text style={{ textAlignVertical: 'center', fontSize: 12, marginHorizontal: 10 }}>{description}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40, marginHorizontal: 0 }}>
            <Text>Austin, TX</Text>
            <AirbnbRating
              count={5}
              reviews={false}
              starContainerStyle={{justifyContent:'center',marginTop:-30}}
              defaultRating={4}
              size={15}
            />
          </View>
        </View>
      </View>
      <View style={{ height: 1, backgroundColor: '#D9D9D9', width: '100%' }}></View>
    </TouchableOpacity>
  )
}
