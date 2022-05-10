

import React from 'react'
import {Text, TouchableOpacity} from 'react-native';

export default function BannerComponent({ text, onPress ,backgroundColorValue ,textColorValue ,buttonWidth}) {

  return (
    <TouchableOpacity 
    onPress={onPress}
    style={{ backgroundColor:backgroundColorValue,marginTop:20, margin:0,width:buttonWidth, borderRadius: 15,borderColor:'grey' , borderWidth:0.3 }}>
        <Text style={{color:textColorValue ,textAlign:'center', fontSize:18  , marginVertical:10, fontWeight:'bold'}}>
        {text}</Text>
    </TouchableOpacity>
  )
}
