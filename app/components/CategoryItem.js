import Color from '../common/Color'
import React from 'react'
import {Text, TouchableOpacity,Image} from 'react-native';

export default function CategoryItem({ text, onPress ,icon}) {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={{width:'45%',height:150,borderRadius:20,flexDirection:'column', justifyContent:'space-between', backgroundColor:Color.grey, margin:10,justifyContent:'center'}}>
       <Image
            resizeMode={'contain'}
            style={{
              alignSelf:'center',
              height: 30,
              width:30
             }}
            source={icon}
          /> 
        <Text style={{ paddingHorizontal:20 ,fontSize:14,textAlign:'center'  , marginVertical:20}}>
        {text}</Text>
    </TouchableOpacity>
  )
}
