import Color from '../common/Color'
import React from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native';

export default function ListingMarketPlace({ title, icon, descriptionIcon, description, onPress, logo }) {
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold' }}>{title}</Text>
            <Image
              resizeMode={'contain'}
              style={{
                height: 25,
                width: 25,
              }}
              source={icon}
            />
          </View>
          <View style={{ flexDirection: 'row',alignItems:'center',}}>
            <Image
              resizeMode={'contain'}
              style={{
                height: 25,
                width: 25,
              }}
              source={descriptionIcon}
            />
            <Text style={{textAlignVertical:'center', fontSize:12, marginHorizontal:10}}>{description}</Text>
          </View>
          <Text style={{textAlignVertical:'center', fontSize:14, marginTop:25}}>24.00</Text>
        </View>
      </View>
      <View style={{ height: 1, backgroundColor: '#D9D9D9', width: '100%' }}></View>
    </TouchableOpacity>
  )
}
