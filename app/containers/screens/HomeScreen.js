import React, {Component} from 'react';
import {Text, View, Image, ImagePickerIOS} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Color from '../../common/Color';
import ButtonComponent from '../../components/ButtonComponent';

const HomeScreen: React.FC = ({ navigation }) => {

    return (
      <View
        style={{
          flex: 1,
          padding:20,
          backgroundColor:'white'
        }}>
          <View style={{height:'70%',justifyContent:'center'}}>
          <Image
            resizeMode={'contain'}
            style={{
              aspectRatio:1.2,
              height: undefined,
              width: '100%',
              borderRadius: 5,
              alignSelf: 'center',
             }}
            source={require('../../assets/images/yoga.png')}
          />
          </View>
          <Image
            resizeMode={'contain'}
            style={{
              aspectRatio:2,
              height: undefined,
              width:'35%'
             }}
            source={require('../../assets/images/resourceText.png')}
          />        
          <Text style={{fontSize:18,}}>Join mission-driven capanies that are providing benefits 
        to each other's employees at no cost</Text>

        <View style={{flexDirection:'row', justifyContent:'space-between' , marginVertical:10}}>
          <ButtonComponent 
          onPress={()=>{navigation.navigate('CreateAccount')}}
          text = {'Apply'}
          backgroundColorValue = {Color.primary}
          textColorValue = {'white'}
          buttonWidth = {'48%'}
          />

          <ButtonComponent 
          onPress={()=>{navigation.navigate('Login')}}
          text = {'Log in'}
          backgroundColorValue = {Color.whiteColor}
          textColorValue = {Color.primary}
          buttonWidth = {'48%'}
          />
        </View>
      </View>
    );
};

export default HomeScreen;
